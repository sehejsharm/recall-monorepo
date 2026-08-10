# TWA packaging — reproducible Bubblewrap build

The Bubblewrap-generated Android project is **not** in this repo (`android/`
is gitignored, and it is 100% derived output). What *is* committed is the
input that makes generating it deterministic:

| File | What it is |
|---|---|
| `twa-manifest.json` | Every field Bubblewrap asks for during `init`, pre-filled from the real deployed PWA manifest. Committing it turns an interactive Q&A into a reproducible command. |
| `validate.mjs` | Zero-dependency preflight. Catches the failures that are invisible until *after* you upload (package-name mismatch, missing icon, malformed assetlinks). |
| `make-maskable-icon.mjs` | Regenerates `apps/web/public/icon-maskable-512.png` from `icon-512.png`. |

Everything else — the app name, colours, orientation, icons, scope and
shortcuts — is derived from **`apps/web/app/manifest.ts`**. That file is the
single source of truth; `twa-manifest.json` is a snapshot of it plus the
Android-only bits (package id, signing key, version code).

---

## The two placeholders (and why they are placeholders)

`twa-manifest.json` → `signingKey.path` / `signingKey.alias`, and
`apps/web/public/.well-known/assetlinks.json` →
`sha256_cert_fingerprints[0]`.

A signing keystore is **not** generated here on purpose:

* it is the one artifact that cannot be regenerated — lose it and the Play
  listing can never be updated again, by anyone, ever;
* it must be backed up somewhere the repo is not;
* a keystore created inside an ephemeral agent container would be destroyed
  along with the container.

Create it yourself, once, and back it up (see step 1 below).

---

## Command sequence

Run everything from the repo root unless noted. Prereqs: Node 22, **JDK 17**.

### 0. Preflight (no accounts needed, safe to run anytime)

```sh
node store/twa/validate.mjs
```

Exits non-zero only on hard failures. Warnings about the fingerprint, the
signing key and the screenshots are expected until those exist.

### 1. Create your upload keystore — ONCE, then back it up

```sh
keytool -genkeypair -v \
  -keystore ~/keys/recall-upload.keystore \
  -alias recall-upload \
  -keyalg RSA -keysize 2048 -validity 10000
```

Store the file **and both passwords** in your password manager and one offline
backup. Do not put it in this repo — `*.keystore` / `*.jks` are gitignored
precisely so this cannot happen by accident.

Then fill it into `store/twa/twa-manifest.json`:

```jsonc
"signingKey": {
  "path": "/absolute/path/to/recall-upload.keystore",
  "alias": "recall-upload"
}
```

(The absolute path is machine-local. If you would rather not commit your own
path, keep the placeholder committed and pass the real values via
`bubblewrap`'s prompts on your machine.)

### 2. Generate the Android project from the committed manifest

```sh
npm i -g @bubblewrap/cli
mkdir -p /tmp/recall-twa && cd /tmp/recall-twa
bubblewrap init --manifest /absolute/path/to/repo/store/twa/twa-manifest.json
```

Passing a **local file path** (not the https manifest URL) is what makes this
reproducible: Bubblewrap reads the committed values instead of interviewing
you. Answer only the keystore-password prompts.

> If you ever want to re-derive `twa-manifest.json` from the live site instead:
> `bubblewrap init --manifest https://recall-monorepo-web.vercel.app/manifest.webmanifest`
> then diff the generated `twa-manifest.json` against the committed one and
> copy the delta back into this repo. Do not let the two drift.

### 3. Get the fingerprint and publish it

```sh
keytool -list -v -keystore ~/keys/recall-upload.keystore -alias recall-upload \
  | grep "SHA256:"
```

Paste the `AA:BB:…` value (32 colon-separated hex bytes) into
`apps/web/public/.well-known/assetlinks.json`, re-run
`node store/twa/validate.mjs`, then **deploy the web app** and confirm:

```sh
curl -sI https://recall-monorepo-web.vercel.app/.well-known/assetlinks.json
#   HTTP/2 200                       <- must be 200, NOT a 3xx redirect
#   content-type: application/json   <- pinned in apps/web/next.config.ts
curl -s  https://recall-monorepo-web.vercel.app/.well-known/assetlinks.json
```

The TWA shows a browser URL bar until this file, live in production, contains
the fingerprint of the key that signed the installed APK.

**Play App Signing caveat:** once the app is enrolled in Play App Signing
(the default), Google **re-signs** your upload with a *different* key. The
fingerprint that matters for the shipped app is
**Play Console → Test and release → Setup → App signing → "App signing key
certificate" → SHA-256**. The usual end state is *both* fingerprints in the
array — the app-signing key (for Play installs) and your upload key (for
locally-installed test builds):

```json
"sha256_cert_fingerprints": [
  "<app signing key SHA-256 from Play Console>",
  "<your upload key SHA-256 from keytool>"
]
```

### 4. Build the AAB

```sh
cd /tmp/recall-twa
bubblewrap build          # produces app-release-bundle.aab (+ a signed APK)
```

Play requires the **.aab**, not the .apk.

### 5. After any change to `apps/web/app/manifest.ts`

```sh
# 1. mirror the change into the committed snapshot
$EDITOR store/twa/twa-manifest.json
node store/twa/validate.mjs
# 2. regenerate the Android project
cd /tmp/recall-twa && bubblewrap update && bubblewrap build
```

Bump `appVersionCode` in `twa-manifest.json` for every Play upload — Play
rejects a bundle whose version code is not strictly greater than the last one.

---

## targetSdkVersion

Bubblewrap does **not** expose `targetSdk` in `twa-manifest.json`; it comes
from the Android project Bubblewrap generates. After step 2, check:

```sh
grep -n "targetSdk" /tmp/recall-twa/app/build.gradle
```

Play enforces a minimum target API for new apps and updates, and raises it
every year. If the generated value is below what Play demands, update the CLI
(`npm i -g @bubblewrap/cli@latest`) and re-run `bubblewrap update` rather than
hand-editing gradle — the CLI version is what pins the template.

## Notifications

`enableNotifications` is `false` on purpose. The PWA never calls
`Notification.requestPermission()` (verified: no such call anywhere in
`apps/web`), so the TWA has nothing to deliver. Setting it to `true` would add
`POST_NOTIFICATIONS` to the Android manifest, which then has to be justified
in the Play permissions declaration for a feature that does not exist.
