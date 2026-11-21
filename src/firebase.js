// Firebase wiring: App Check (required by Firebase AI Logic), anonymous Auth,
// Firestore (listing sync) and Remote Config (model + prompt tuning without a redeploy).
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

export const firebaseConfig = {
  apiKey: 'AIzaSyAz4vJyX4lMaLOFzOrTgKtGekUjNvdMko4',
  authDomain: 'wurket-lister.firebaseapp.com',
  projectId: 'wurket-lister',
  storageBucket: 'wurket-lister.firebasestorage.app',
  messagingSenderId: '160184160436',
  appId: '1:160184160436:web:e52c8df9e7f63981e947e1',
};

// Public reCAPTCHA (Fraud Defense) site key. Not a secret.
const RECAPTCHA_SITE_KEY = '6LfJxiouAAAAANFYAH7nccqpYs0aG2gwPWex4vTJ';

export const app = initializeApp(firebaseConfig);

// Local development uses the App Check debug provider; the token printed in the
// console must be registered in Firebase console > App Check > Manage debug tokens.
if (['localhost', '127.0.0.1'].includes(location.hostname)) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = import.meta.env.VITE_APPCHECK_DEBUG_TOKEN || true;
}
export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});

// ---- Remote Config ----
export const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 10 * 60 * 1000;
remoteConfig.defaultConfig = {
  cloud_model: 'gemini-3.5-flash-lite',
  currency: 'MAD',
  marketplace_name: 'Wurket',
  listing_style: 'Short, honest, no exaggeration. Mention condition and what is included.',
};
export async function loadRemoteConfig() {
  try { await fetchAndActivate(remoteConfig); } catch (e) { console.warn('Remote Config fetch failed, using defaults', e); }
  return {
    cloudModel: getValue(remoteConfig, 'cloud_model').asString(),
    currency: getValue(remoteConfig, 'currency').asString(),
    marketplace: getValue(remoteConfig, 'marketplace_name').asString(),
    listingStyle: getValue(remoteConfig, 'listing_style').asString(),
  };
}

// ---- Auth + Firestore sync ----
export const auth = getAuth(app);
export const db = getFirestore(app);

export function watchUser(cb) { return onAuthStateChanged(auth, cb); }
export async function ensureSignedIn() {
  if (auth.currentUser) return auth.currentUser;
  const cred = await signInAnonymously(auth);
  return cred.user;
}

export async function pushListing(listing) {
  const user = await ensureSignedIn();
  const { photo, ...data } = listing; // photos stay on the device
  await setDoc(doc(db, 'users', user.uid, 'listings', listing.id), { ...data, syncedAt: serverTimestamp() });
}

export async function pullListings() {
  const user = await ensureSignedIn();
  const snap = await getDocs(collection(db, 'users', user.uid, 'listings'));
  return snap.docs.map(d => d.data());
}
