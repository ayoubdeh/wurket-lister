// All generative AI goes through Firebase AI Logic hybrid inference:
// Gemini Nano runs on the seller's device when Chrome has it, and the SDK
// falls back to a cloud Gemini model when it doesn't (or for languages and
// inputs the local model can't handle).
import { getAI, getGenerativeModel, GoogleAIBackend, InferenceMode, Schema } from 'firebase/ai';
import { app } from './firebase.js';

const ai = getAI(app, { backend: new GoogleAIBackend() });

export const MODES = {
  auto: InferenceMode.PREFER_ON_DEVICE,
  device: InferenceMode.ONLY_ON_DEVICE,
  cloud: InferenceMode.ONLY_IN_CLOUD,
};

export const CATEGORIES = [
  'Fashion', 'Shoes & bags', 'Beauty & perfume', 'Home & kitchen', 'Electronics', 'Phones & accessories',
  'Handicrafts & decor', 'Food & local products', 'Kids & baby', 'Sports & outdoors', 'Auto & moto', 'Other',
];
export const CONDITIONS = ['New', 'Like new', 'Good', 'Fair', 'For parts'];

// One JSON schema, used as a Prompt API responseConstraint on-device and as responseSchema in the cloud.
const listingJsonSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', description: 'Max 70 characters. Brand + product + key attribute.' },
    description: { type: 'string', description: '2-4 short sentences.' },
    category: { type: 'string', enum: CATEGORIES },
    condition: { type: 'string', enum: CONDITIONS },
    attributes: {
      type: 'array',
      items: { type: 'object', properties: { name: { type: 'string' }, value: { type: 'string' } }, required: ['name', 'value'] },
    },
    tags: { type: 'array', items: { type: 'string' } },
    price: { type: 'number', description: 'Price in local currency if the seller gave one, else 0.' },
    missing_info: { type: 'array', items: { type: 'string' }, description: 'Facts a buyer would ask about that are missing (size, color, warranty...).' },
  },
  required: ['title', 'description', 'category', 'condition', 'attributes', 'tags', 'price', 'missing_info'],
};

const listingCloudSchema = Schema.object({
  properties: {
    title: Schema.string(),
    description: Schema.string(),
    category: Schema.enumString({ enum: CATEGORIES }),
    condition: Schema.enumString({ enum: CONDITIONS }),
    attributes: Schema.array({ items: Schema.object({ properties: { name: Schema.string(), value: Schema.string() } }) }),
    tags: Schema.array({ items: Schema.string() }),
    price: Schema.number(),
    missing_info: Schema.array({ items: Schema.string() }),
  },
});

const cache = new Map();
function model(key, factory) {
  if (!cache.has(key)) cache.set(key, factory());
  return cache.get(key);
}

function listingModel(mode, cfg) {
  return model(`listing:${mode}:${cfg.cloudModel}`, () => getGenerativeModel(ai, {
    mode: MODES[mode],
    onDeviceParams: {
      createOptions: {
        expectedInputs: [{ type: 'image' }, { type: 'text', languages: ['en'] }],
        expectedOutputs: [{ type: 'text', languages: ['en'] }],
      },
      promptOptions: { responseConstraint: listingJsonSchema },
    },
    inCloudParams: {
      model: cfg.cloudModel,
      generationConfig: { responseMimeType: 'application/json', responseSchema: listingCloudSchema, temperature: 0.4 },
    },
  }));
}

function textModel(mode, cfg, lang) {
  return model(`text:${mode}:${lang}:${cfg.cloudModel}`, () => getGenerativeModel(ai, {
    mode: MODES[mode],
    onDeviceParams: {
      createOptions: {
        expectedInputs: [{ type: 'text', languages: ['en', lang] }],
        expectedOutputs: [{ type: 'text', languages: [lang] }],
      },
    },
    inCloudParams: { model: cfg.cloudModel, generationConfig: { temperature: 0.5 } },
  }));
}

async function timed(fn) {
  const t0 = performance.now();
  const result = await fn();
  return { result, ms: Math.round(performance.now() - t0), source: result.response.inferenceSource || 'in_cloud' };
}

// Seller photo (+ optional note) -> structured listing.
export async function draftListing({ photoBase64, note, mode, cfg }) {
  const prompt = [
    `You help small sellers in Morocco list products on ${cfg.marketplace}, an online marketplace with cash on delivery.`,
    `Look at the product photo and write a listing in English. ${cfg.listingStyle}`,
    'Only state what you can see or what the seller wrote. Never invent brands, sizes or specs; list unknowns in missing_info instead.',
    `If the seller gave a price, put it in "price" (number, ${cfg.currency}); otherwise 0.`,
    `Seller note: ${note?.trim() || '(none)'}`,
    'Answer with JSON only.',
  ].join('\n');
  const parts = [prompt];
  if (photoBase64) parts.push({ type: 'inlineData', inlineData: { data: photoBase64, mimeType: 'image/jpeg' } });
  const out = await timed(() => listingModel(mode, cfg).generateContent(parts));
  const text = out.result.response.text().trim().replace(/^```(json)?|```$/g, '');
  return { listing: JSON.parse(text), source: out.source, ms: out.ms };
}

const LANG_NAMES = { fr: 'French', ar: 'Modern Standard Arabic', es: 'Spanish' };

// Translate title + description. The local model is asked first; if it lacks
// the target language, the SDK routes the request to the cloud.
export async function translateListing({ listing, lang, mode, cfg }) {
  const prompt = [
    `Translate this marketplace listing into ${LANG_NAMES[lang]}. Keep brand names. Return exactly two lines:`,
    'TITLE: <translated title>',
    'DESCRIPTION: <translated description>',
    '',
    `TITLE: ${listing.title}`,
    `DESCRIPTION: ${listing.description}`,
  ].join('\n');
  const out = await timed(() => textModel(mode, cfg, lang).generateContent(prompt));
  const t = out.result.response.text();
  const title = (t.match(/TITLE:\s*(.+)/i) || [])[1]?.trim() || '';
  const description = (t.match(/DESCRIPTION:\s*([\s\S]+)/i) || [])[1]?.trim() || t.trim();
  return { title, description, source: out.source, ms: out.ms };
}

// Draft a reply to a buyer's chat message. Runs on-device when possible, so
// customer conversations never leave the phone or laptop.
export async function draftReply({ listing, message, mode, cfg }) {
  const prompt = [
    `You are a friendly small seller on ${cfg.marketplace} (Morocco, cash on delivery, delivery 24-72h).`,
    'Write a short reply (max 3 sentences) to the buyer, in the same language the buyer used.',
    'Use only facts from the listing. If the answer is not in the listing, say you will check and reply soon.',
    `Listing: ${listing.title}. ${listing.description} Condition: ${listing.condition}. Price: ${listing.price || 'not set'} ${cfg.currency}.`,
    `Attributes: ${(listing.attributes || []).map(a => `${a.name}: ${a.value}`).join('; ') || 'none'}`,
    `Buyer message: ${message}`,
  ].join('\n');
  const out = await timed(() => textModel(mode, cfg, 'en').generateContent(prompt));
  return { reply: out.result.response.text().trim(), source: out.source, ms: out.ms };
}

// ---- On-device model status (Chrome Prompt API) ----
export async function deviceStatus() {
  if (!('LanguageModel' in self)) return 'unsupported';
  try {
    return await self.LanguageModel.availability({
      expectedInputs: [{ type: 'image' }, { type: 'text', languages: ['en'] }],
      expectedOutputs: [{ type: 'text', languages: ['en'] }],
    });
  } catch { return 'unavailable'; }
}

// Must be called from a user gesture. Starts/continues the Gemini Nano download.
export async function prepareDevice(cfg, onProgress) {
  await listingModel('auto', cfg).initializeDeviceModel(onProgress);
}
