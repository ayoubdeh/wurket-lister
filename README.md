# Wurket Lister

**Snap a product, get a ready-to-sell listing. Hybrid AI that runs on the seller's device with Gemini Nano and falls back to Gemini in the cloud.**

Built for [#BuildHybridAI 2026](https://firebasehybridaihackathon.devpost.com/) with **Firebase AI Logic hybrid inference** (Web / Chrome).

Live demo: https://ayoubdeh.github.io/wurket-lister/ · Demo video: https://youtu.be/1yDMDKFnwb4

## The problem

In Morocco, most small sellers (artisans, cooperatives, small shops) sell through Instagram and WhatsApp chats. Writing a good listing is slow: a title, a description, the right category, the facts buyers will ask about, and often French and Arabic versions too. Buyers then send the same questions again and again ("still available?", "which sizes?", "delivery to Casablanca?").

These sellers work on cheap laptops and phones, on patchy mobile data, and their customer chats are personal. A cloud-only AI tool costs money per request, needs a good connection and sends every chat to a server.

## What it does

1. **Snap & list.** Take a photo, add a short note ("handmade in Fes, sizes 38–44, 180 dh") and get a structured listing: title, description, category, condition, attributes, tags, price, plus a **"buyers will ask" list** of missing facts. The model is told never to invent specs.
2. **Translate.** One tap for French or Arabic. French runs on-device (Gemini Nano supports it); Arabic is routed to the cloud automatically because the local model doesn't support it.
3. **Answer a buyer.** Paste a WhatsApp message (French, Darija, English…) and get a short reply grounded in the listing. When Gemini Nano is available, **the customer conversation never leaves the device**.
4. **Offline first.** Listings are saved on the device and synced to Firestore when the connection comes back. Export everything as CSV or copy a listing formatted for WhatsApp.

Every AI result shows a badge, **🔒 On-device · Gemini Nano** or **☁️ Cloud**, with the time it took. A switch lets you force on-device only or cloud only to compare.

## How it uses Firebase AI Logic

| Feature | Inference mode | On-device | Cloud fallback |
|---|---|---|---|
| Photo → listing (multimodal, structured JSON) | `PREFER_ON_DEVICE` | Gemini Nano with image input and `responseConstraint` (JSON schema) | `gemini-3.5-flash-lite` with `responseSchema` |
| Translate → French | `PREFER_ON_DEVICE` | Nano (`expectedOutputs: fr`) | cloud |
| Translate → Arabic | `PREFER_ON_DEVICE` | not supported locally → SDK falls back | cloud |
| Buyer reply | `PREFER_ON_DEVICE` | Nano (private) | cloud |

- `src/ai.js`: all model calls (`getAI`, `getGenerativeModel` with `HybridParams`, `initializeDeviceModel`, `response.inferenceSource`).
- One JSON schema drives both sides, so categories and conditions are always valid values.
- `initializeDeviceModel()` is called from a user click to download Gemini Nano with a progress indicator.

Other Firebase products:

- **App Check** (reCAPTCHA Enterprise / Fraud Defense provider) protects the Gemini API; the debug provider is used on localhost.
- **Authentication** (anonymous) and **Cloud Firestore** sync each seller's listings (`users/{uid}/listings`, owner-only security rules). Photos are not uploaded.
- **Remote Config** sets the cloud model name, currency, marketplace name and writing style without a redeploy.

## Run it

Requirements for on-device inference: desktop Chrome 139+, enough free disk space for the model, and `chrome://flags/#prompt-api-for-gemini-nano-multimodal-input` enabled. Without them, the app still works through the cloud fallback.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static build in dist/
```

To use your own Firebase project, replace `firebaseConfig` and the reCAPTCHA site key in `src/firebase.js`, enable Firebase AI Logic (Gemini Developer API), register the web app in App Check, enable anonymous Auth and create a Firestore database with these rules:

```
match /users/{uid}/listings/{id} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
}
```

## Built during the hackathon

This is a new project, created during the submission period. It was built by the team behind [Wurket](https://wurket.com), a marketplace app for small sellers in Morocco, with help from an AI coding assistant (Claude Code). No code from the Wurket app is included.

Demo photos: Wikimedia Commons, CC BY-SA 4.0 (see `demo-photos/CREDITS.md`).

## License

Apache-2.0
