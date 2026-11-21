import { loadRemoteConfig, pushListing, ensureSignedIn } from './firebase.js';
import { draftListing, translateListing, draftReply, deviceStatus, prepareDevice, CATEGORIES, CONDITIONS } from './ai.js';

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let cfg = { cloudModel: 'gemini-3.5-flash-lite', currency: 'MAD', marketplace: 'Wurket', listingStyle: '' };
let photo = null;      // { base64, dataUrl }
let current = null;    // listing being edited
let translations = {};

// ---------- local store (offline first) ----------
const KEY = 'wurket-lister:listings';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
const store = list => { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { toast('Storage full: ' + e.message); } };

function toast(msg, ms = 3200) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => (t.hidden = true), ms); }
const mode = () => document.querySelector('input[name=mode]:checked').value;
const badge = (el, source, ms) => {
  el.className = 'badge ' + source;
  el.textContent = (source === 'on_device' ? '🔒 On-device · Gemini Nano' : `☁️ Cloud · ${cfg.cloudModel}`) + ` · ${(ms / 1000).toFixed(1)}s`;
};
async function busy(btn, fn) {
  btn.disabled = true; btn.classList.add('spin');
  try { return await fn(); }
  catch (e) {
    console.error(e);
    const m = String(e.message || e);
    toast(/on-device|ONLY_ON_DEVICE|LanguageModel|not available/i.test(m) && mode() === 'device'
      ? 'The on-device model is not ready on this device. Switch to Hybrid to fall back to the cloud.'
      : 'AI request failed: ' + m.slice(0, 160), 6000);
  } finally { btn.disabled = false; btn.classList.remove('spin'); }
}

// ---------- device + network status ----------
async function refreshDevice() {
  const s = await deviceStatus();
  const el = $('device');
  const map = {
    available: ['ok', 'Gemini Nano ready on this device'],
    downloadable: ['bad', 'On-device model not downloaded'],
    downloading: ['bad', 'Downloading on-device model…'],
    unavailable: ['cloud', 'No on-device model → cloud'],
    unsupported: ['cloud', 'Browser has no built-in AI → cloud'],
  };
  const [cls, label] = map[s] || ['cloud', s];
  el.className = 'chip ' + cls; el.textContent = label;
  $('prepare').hidden = !(s === 'downloadable' || s === 'downloading');
}
function refreshNet() { const n = $('net'); n.textContent = navigator.onLine ? 'online' : 'offline'; n.className = 'chip ' + (navigator.onLine ? '' : 'bad'); }
addEventListener('online', () => { refreshNet(); syncAll(true); });
addEventListener('offline', refreshNet);

$('prepare').onclick = () => busy($('prepare'), async () => {
  await prepareDevice(cfg, p => { $('device').textContent = `Downloading on-device model… ${Math.round(p * 100)}%`; });
  await refreshDevice();
});

// ---------- photo ----------
async function usePhoto(fileOrBlob) {
  photo = await downscale(fileOrBlob, 768);
  $('preview').src = photo.dataUrl; $('preview').hidden = false; $('dropText').hidden = true; $('draft').disabled = false;
}
$('photo').onchange = e => { const f = e.target.files[0]; if (f) usePhoto(f); };
// Sample photos are preloaded so they also work offline.
const samples = {};
document.querySelectorAll('[data-sample]').forEach(b => {
  const name = b.dataset.sample;
  samples[name] = fetch(`./demo-photos/${name}`).then(r => r.blob()).catch(() => null);
  b.onclick = async () => { const blob = await samples[name]; if (blob) usePhoto(blob); else toast('Sample photo not available offline'); };
});
function downscale(file, max) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      const dataUrl = c.toDataURL('image/jpeg', 0.85);
      res({ dataUrl, base64: dataUrl.split(',')[1] });
      URL.revokeObjectURL(img.src);
    };
    img.onerror = rej; img.src = URL.createObjectURL(file);
  });
}

// ---------- draft listing ----------
$('category').innerHTML = CATEGORIES.map(c => `<option>${c}</option>`).join('');
$('condition').innerHTML = CONDITIONS.map(c => `<option>${c}</option>`).join('');

$('draft').onclick = () => busy($('draft'), async () => {
  const { listing, source, ms } = await draftListing({ photoBase64: photo?.base64, note: $('note').value, mode: mode(), cfg });
  current = { id: crypto.randomUUID(), ...listing, photo: photo?.dataUrl, source, createdAt: Date.now(), synced: false };
  translations = {};
  renderDraft(); badge($('draftBadge'), source, ms);
});

function renderDraft() {
  $('result').hidden = false;
  $('title').value = current.title || '';
  $('desc').value = current.description || '';
  $('category').value = CATEGORIES.includes(current.category) ? current.category : 'Other';
  $('condition').value = CONDITIONS.includes(current.condition) ? current.condition : 'Good';
  $('price').value = current.price || '';
  $('attrs').innerHTML = (current.attributes || []).map(a => `<span><b>${esc(a.name)}:</b> ${esc(a.value)}</span>`).join('');
  $('tags').innerHTML = (current.tags || []).slice(0, 8).map(t => `<span>#${esc(String(t).replace(/^#/, '').replace(/\s+/g, ''))}</span>`).join('');
  const miss = (current.missing_info || []).map(s => String(s).trim()).filter(Boolean);
  $('missing').hidden = !miss.length;
  $('missing').innerHTML = `<b>Buyers will ask:</b> ${miss.map(esc).join(' · ')}. Add it to the note and draft again, or edit the text.`;
  $('translations').innerHTML = '';
}
function readForm() {
  Object.assign(current, { title: $('title').value.trim(), description: $('desc').value.trim(), category: $('category').value, condition: $('condition').value, price: Number($('price').value) || 0 });
}

for (const [btn, lang] of [['trFr', 'fr'], ['trAr', 'ar']]) {
  $(btn).onclick = () => busy($(btn), async () => {
    readForm();
    const r = await translateListing({ listing: current, lang, mode: mode(), cfg });
    translations[lang] = { title: r.title, description: r.description };
    const div = document.createElement('div');
    div.className = 'tr'; if (lang === 'ar') div.dir = 'rtl';
    div.innerHTML = `<div class="row between"><strong>${lang === 'fr' ? 'Français' : 'العربية'}</strong><span class="badge"></span></div><p><b>${esc(r.title)}</b><br>${esc(r.description)}</p>`;
    badge(div.querySelector('.badge'), r.source, r.ms);
    $('translations').querySelector(`[data-lang=${lang}]`)?.remove(); div.dataset.lang = lang;
    $('translations').append(div);
  });
}

$('save').onclick = async () => {
  readForm();
  const list = load().filter(l => l.id !== current.id);
  list.unshift({ ...current, translations, synced: false });
  store(list); renderList(); toast('Saved on this device');
  syncAll(true);
};

// ---------- buyer reply ----------
$('replyBtn').onclick = () => busy($('replyBtn'), async () => {
  const listing = load().find(l => l.id === $('replyListing').value) || current;
  if (!listing) return toast('Save a listing first');
  if (!$('buyerMsg').value.trim()) return toast('Paste the buyer message');
  const r = await draftReply({ listing, message: $('buyerMsg').value, mode: mode(), cfg });
  $('replyText').textContent = r.reply; $('replyOut').hidden = false; badge($('replyBadge'), r.source, r.ms);
});
$('copyReply').onclick = () => navigator.clipboard.writeText($('replyText').textContent).then(() => toast('Copied'));

// ---------- list, sync, export ----------
function renderList() {
  const list = load();
  $('list').innerHTML = list.length ? list.map(l => `
    <li><img src="${l.photo || ''}" alt="" /><div class="meta"><b>${esc(l.title)}</b>
    <small>${esc(l.category)} · ${esc(l.condition)} · ${l.price ? l.price + ' ' + esc(cfg.currency) : 'no price'} · ${l.source === 'on_device' ? '🔒 drafted on-device' : '☁️ drafted in cloud'} · ${l.synced ? '✓ synced' : 'not synced'}</small></div>
    <button class="ghost small" data-wa="${l.id}">Copy for WhatsApp</button></li>`).join('')
    : '<li><small>No listings yet. Draft one above.</small></li>';
  $('replyListing').innerHTML = list.map(l => `<option value="${l.id}">${esc(l.title)}</option>`).join('') || '<option value="">(current draft)</option>';
  $('list').querySelectorAll('[data-wa]').forEach(b => b.onclick = () => {
    const l = list.find(x => x.id === b.dataset.wa);
    const text = `*${l.title}*\n${l.description}\n${l.price ? `Prix / Price: ${l.price} ${cfg.currency}\n` : ''}Paiement à la livraison ✅`;
    navigator.clipboard.writeText(text).then(() => toast('Copied, paste it in WhatsApp'));
  });
}

async function syncAll(quiet) {
  if (!navigator.onLine) { if (!quiet) toast('Offline: listings will sync when you are back online'); return; }
  const list = load(); const todo = list.filter(l => !l.synced);
  try {
    for (const l of todo) { await pushListing(l); l.synced = true; }
    store(list); renderList();
    $('syncState').textContent = todo.length ? `Synced ${todo.length} listing(s) to Firestore.` : 'Everything is synced.';
  } catch (e) { console.error(e); $('syncState').textContent = 'Sync failed: ' + e.message; }
}
$('sync').onclick = () => syncAll(false);

$('csv').onclick = () => {
  const cols = ['title', 'description', 'category', 'condition', 'price', 'currency', 'tags', 'title_fr', 'description_fr', 'title_ar', 'description_ar'];
  const q = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = load().map(l => [l.title, l.description, l.category, l.condition, l.price || '', cfg.currency, (l.tags || []).join(' '),
    l.translations?.fr?.title, l.translations?.fr?.description, l.translations?.ar?.title, l.translations?.ar?.description].map(q).join(','));
  const blob = new Blob(['﻿' + [cols.join(','), ...rows].join('\n')], { type: 'text/csv' });
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'listings.csv' }); a.click();
};

// ---------- boot ----------
(async () => {
  refreshNet(); renderList();
  cfg = await loadRemoteConfig();
  await refreshDevice();
  ensureSignedIn().then(() => syncAll(true)).catch(e => console.warn('auth', e));
  setInterval(refreshDevice, 15000);
})();
