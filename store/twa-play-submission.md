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
