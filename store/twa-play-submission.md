# TWA packaging & Play submission

How to wrap the PWA as a Trusted Web Activity (TWA), and the manual steps
only you can do (accounts, signing, dashboard settings).

## 1. Build the Android app (AAB) with Bubblewrap

Prereqs: Node, JDK 17. Point Bubblewrap at the live manifest.

```sh
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://recall-monorepo-web.vercel.app/manifest.webmanifest
# Accept defaults; when asked, set:
#   Application ID (package name): app.recall.twa   (MUST match assetlinks.json)
#   Host: recall-monorepo-web.vercel.app
#   Start URL: /
bubblewrap build          # produces app-release-signed.aab + a signing keystore
```

Bubblewrap creates/uses a signing keystore on first build. **Back up that
keystore and its passwords** — losing it means you can never update the app.

> Alternative: PWABuilder (https://www.pwabuilder.com) — paste the URL, choose
> Android, download the package. Same assetlinks requirement applies.

## 2. Digital Asset Links (removes the browser URL bar)

`apps/web/public/.well-known/assetlinks.json` is already deployed at
`https://recall-monorepo-web.vercel.app/.well-known/assetlinks.json`. It has
two placeholders you must fill:

- `package_name` — must equal the Application ID you set in Bubblewrap
  (default here: `app.recall.twa`).
- `sha256_cert_fingerprints` — the SHA-256 of your signing key. Get it with:

  ```sh
  keytool -list -v -keystore android.keystore -alias android \
    | grep "SHA256:"
  ```

  Or, once uploaded, copy it from **Play Console → Setup → App signing →
  "SHA-256 certificate fingerprint"** (use the *App signing key*, not just the
  upload key — Play re-signs your app).

Commit the real values, redeploy, then verify:
`curl https://recall-monorepo-web.vercel.app/.well-known/assetlinks.json`
must show your real fingerprint before the TWA will hide the URL bar.

## 3. Upload & fill the listing

- Create the app in **Play Console**, upload the AAB to a testing track first.
- Store listing copy, screenshots, feature graphic → `store/listing-playstore.md`,
  `store/screenshots.md`.
- **Data safety form** → `store/data-safety-playstore.md`.
- Content rating (IARC) questionnaire → answer for an educational app, no
  ads, target audience 16+.
- Privacy policy URL: `https://recall-monorepo-web.vercel.app/privacy`
- Account deletion URL (required, since accounts exist):
  `https://recall-monorepo-web.vercel.app/delete-account`

---

## Android API level (P0.5) — needs your confirmation

Play requires new apps and updates to target a recent API level (currently
API 35 / Android 15, moving to API 36; Play shows the exact live requirement
in Console → your app → Dashboard when you upload).

**Two different Android artifacts exist in this project — confirm which one
you're submitting, because the API-level answer differs:**

1. **A TWA wrap of the PWA** (Bubblewrap, per the steps above). Bubblewrap
   writes `targetSdkVersion` into a generated Android project that is **not
   in this repo** — I can't see or set it. After `bubblewrap init`, check
   `twa-manifest.json` → `"targetSdk"`, and `app/build.gradle` →
   `targetSdkVersion`. Bump both to the level Play demands, then
   `bubblewrap update && bubblewrap build`.
2. **The Expo/React Native app at `apps/mobile`** — a genuinely native app
   (SQLite, local notifications, haptics), not a wrapper. It pins Expo SDK
   `~56.0.11`, which targets a current API level automatically; no manual
   `targetSdkVersion` is set, which is the recommended Expo default. If you
   ever need to pin one, add `expo-build-properties` to `app.json`.

⚠️ Submitting **both** to the same Play listing isn't possible — they're
different packages. Pick one as the Play artifact. The Expo app is the
stronger product (real native capabilities, offline SQLite); the TWA is
cheaper to maintain. This is a product decision, not a code one.

## Digital Asset Links — status

`apps/web/public/.well-known/assetlinks.json` exists and is served with
`content-type: application/json` (verified). It still contains placeholders:
`package_name` (`app.recall.twa`) and a `REPLACE_WITH_...` fingerprint. The
TWA will show the URL bar until both are real and redeployed.

## Notification permission (P0.5) — already compliant

- **Web/PWA**: requests no notification permission at all (verified: no
  `Notification.requestPermission` call anywhere in `apps/web`).
- **Expo app**: the OS prompt is already gated behind an in-app rationale.
  `components/Onboarding.tsx` shows a dedicated "Never miss a day" screen
  explaining the single daily reminder, with **Enable daily reminder** /
  **Maybe later**; only the explicit Enable tap calls
  `scheduleDailyReminder()` → `requestPermissionsAsync()`. The Settings
  toggle also only prompts on deliberate user action. No change needed.
