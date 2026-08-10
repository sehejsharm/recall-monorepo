# Google Play submission runbook — Recall

The end-to-end path from this repo to a live Play listing, written against
**the actual state of the code**, not the intended state. Every "done" claim
below names the file that makes it true, so it can be re-checked rather than
believed.

Legend: **[CODE]** already true in the repo · **[YOU-CMD]** a command you run
locally · **[YOU-DECIDE]** a decision only the owner can make ·
**[CONSOLE]** a step in the Play Console web UI.

---

## 🛑 STOP — the one decision that cannot be undone

**An Android package name can never be changed after the first upload to a
Play listing.** Not by support, not by re-uploading, not ever. The only
remedy is a brand-new listing with zero installs, zero reviews and zero
ranking. Right now the repo contains **three different identities**:

| Where | Value | Notes |
|---|---|---|
| `apps/web/public/.well-known/assetlinks.json` → `package_name` | `app.recall.twa` | the TWA path |
| `store/twa/twa-manifest.json` → `packageId` | `app.recall.twa` | kept in sync with the above |
| `apps/mobile/app.json` → `android.package` | `app.jyotir` | the Expo path |
| `apps/mobile/app.json` → `ios.bundleIdentifier` | `app.jyotir` | iOS, separate concern |
| `apps/mobile/app.json` → `slug` | `jyotir` | EAS project slug |

`app.jyotir` is the product's **old name**. The product is called Recall
everywhere user-visible (`app.json` → `"name": "Recall"`, the PWA manifest,
both store listings). Shipping `app.jyotir` permanently bakes the old name
into the Play URL (`play.google.com/store/apps/details?id=app.jyotir`), into
the APK's data directory, and into every crash report forever.

**[YOU-DECIDE] Before anything else, decide and write down:**

1. **Which Android artifact goes to Play** — the Bubblewrap TWA (wraps the
   deployed PWA) or the Expo app (`apps/mobile`). They are two different
   packages and cannot share one listing. See "Choosing the artifact" below.
2. **The final package name**, e.g. `app.recall` / `com.recall.app` /
   something on a domain you actually control. Then make it consistent:
   * TWA path → `store/twa/twa-manifest.json` `packageId` **and**
     `apps/web/public/.well-known/assetlinks.json` `package_name` (they must
     be byte-identical or the TWA ships with a browser URL bar);
   * Expo path → `apps/mobile/app.json` `android.package` (and decide
     separately whether `ios.bundleIdentifier` and `slug` follow — the iOS
     bundle ID is equally permanent once submitted to App Store Connect).

Run `node store/twa/validate.mjs` after editing; it fails the build if the
two package names disagree.

### Choosing the artifact (facts, not a recommendation)

| | TWA (Bubblewrap) | Expo app (`apps/mobile`) |
|---|---|---|
| Source of truth | the deployed PWA at `recall-monorepo-web.vercel.app` | native RN code in `apps/mobile` |
| Ships updates | instantly, by deploying the web app | via a new Play release |
| Offline | service worker (`apps/web/public/sw.js`) + localStorage | on-device SQLite (`expo-sqlite`) |
| Notifications | none — TWA declares `enableNotifications: false` | local daily reminder (`expo-notifications`) |
| Haptics / read-aloud | no | yes (`expo-haptics`, `expo-speech`) |
| Extra Play risk | must clear the "minimum functionality / not just a webview" bar | none of that risk |
| Packaging state in repo | reproducible — `store/twa/` | reproducible — `eas.json` |

Both are ready to build. This is a product call, not an engineering one.

---

## A. Already done in code — verified [CODE]

### PWA manifest (`apps/web/app/manifest.ts`) — the TWA's source of truth
- ✅ `name` "Recall — Drill. Read. Repeat." (29 chars), `short_name`
  "Recall" (6) — both within Android launcher limits.
- ✅ `id: "/"` — pins app identity so a future `start_url` change does not
  orphan installs. Was **missing**; added.
- ✅ `scope: "/"` — **Bubblewrap requires this**; without it every route
  outside the inferred scope opens a Custom Tab with a URL bar. Was
  **missing**; added.
- ✅ `lang: "en"` / `dir: "ltr"` — match `<html lang="en">` in
  `app/layout.tsx`. Were **missing**; added.
- ✅ `start_url`, `display: "standalone"`, `display_override`,
  `orientation: "portrait"`, `theme_color`/`background_color` `#000000`,
  `categories`.
- ✅ `prefer_related_applications: false` (no Play listing to point at yet).
- ✅ **Dedicated maskable icon.** `icon-512.png` was previously declared as
  *both* `purpose: "any"` and `purpose: "maskable"`; its glyph reaches
  r ≈ 170/512 px (33.2%), which clears the W3C safe zone (40%) but **not**
  Android's tightest 66/108 dp circular mask (31.25%) — i.e. clippable on
  some OEM masks. `apps/web/public/icon-maskable-512.png` is now a dedicated
  asset with the glyph at r ≈ 146 px (28.5%), regenerable via
  `node store/twa/make-maskable-icon.mjs`.
- ✅ App shortcuts (`/review`, `/stats`) — become Android long-press
  shortcuts in the TWA. Both routes exist (`app/review`, `app/stats`).

### Digital Asset Links
- ✅ `apps/web/public/.well-known/assetlinks.json` has **exactly** the shape
  Android's verifier requires: a JSON **array**, `relation` as an array
  containing `delegate_permission/common.handle_all_urls`, `target.namespace`
  `android_app`, `package_name`, and `sha256_cert_fingerprints` as an array.
  Nothing but the fingerprint (and the package-name decision) is outstanding.
- ✅ `apps/web/next.config.ts` now pins `Content-Type: application/json`,
  `X-Content-Type-Options: nosniff` and a short `max-age` on that exact path.
  Vercel already infers the type from the extension, but that was an implicit
  default whose failure mode (a URL bar in the shipped app) is invisible
  until after release. Also verified: **none** of the `redirects()` rules
  match `/.well-known/*`, and there is no `trailingSlash` setting — a
  redirect there would silently break verification.

### TWA packaging reproducibility
- ✅ `store/twa/twa-manifest.json` — every field Bubblewrap needs, filled
  from the real deployed manifest and site URL. `bubblewrap init --manifest
  store/twa/twa-manifest.json` is now deterministic instead of an interactive
  interview. Only `signingKey.path` / `signingKey.alias` are placeholders.
- ✅ `store/twa/README.md` — exact command sequence, including the Play App
  Signing re-signing caveat that trips up most first TWA releases.
- ✅ `store/twa/validate.mjs` — dependency-free, network-free preflight.
- ❌ **No keystore is generated.** Deliberately: it cannot be regenerated,
  must be backed up outside the repo, and one created in an ephemeral build
  container would be lost. You create it (step B1).

### Expo build config
- ✅ `apps/mobile/eas.json` production profile now explicitly declares
  `"distribution": "store"` and `"android": { "buildType": "app-bundle" }`.
  **Play requires an `.aab`**; `app-bundle` was previously only an implicit
  default, while the `preview` profile explicitly builds an `.apk` — one
  copy-paste away from uploading the wrong artifact.
- ✅ `autoIncrement: true` with `cli.appVersionSource: "remote"` — EAS holds
  the `versionCode` server-side and bumps it every production build. This is
  why there is deliberately **no** `versionCode` in `app.json`: in remote
  mode EAS ignores a local value, so having one would be misleading.
- ✅ `apps/mobile/app.json` now declares
  `"runtimeVersion": { "policy": "appVersion" }` — inert today and it does
  **not** enable OTA updates (see the gap in section E).

### Policy / listing surface
- ✅ In-app account deletion on both platforms — `apps/web/app/account/page.tsx`
  and `apps/mobile/app/account.tsx` call the `delete_account()` RPC
  (`supabase/migrations/0005_privacy_remediation.sql`).
- ✅ Public deletion page for Play's "account deletion URL" field:
  `apps/web/app/delete-account`.
- ✅ Privacy policy and terms reachable **inside** the app (Play requires
  this, not just a listing link) — `apps/mobile/lib/site-config.ts` links
  Settings → Legal at `/privacy` and `/terms`.
- ✅ App is fully usable with **no account**, so a reviewer never hits a
  login wall.
- ✅ Display name is never uploaded (`apps/*/lib/leaderboard.ts`), so no
  "Name" disclosure is required — see `store/data-safety-playstore.md`.

---

## B. Commands you run locally [YOU-CMD]

Run the preflights first — both are offline and account-free:

```sh
node store/twa/validate.mjs      # TWA packaging + assetlinks shape
pnpm preflight:store             # Expo app config + asset rules
```

### B1 — TWA path only

```sh
# 1. Create the upload keystore ONCE. Back it up. Losing it ends the listing.
keytool -genkeypair -v -keystore ~/keys/recall-upload.keystore \
  -alias recall-upload -keyalg RSA -keysize 2048 -validity 10000

# 2. Fill signingKey.path / .alias in store/twa/twa-manifest.json, then:
npm i -g @bubblewrap/cli
mkdir -p /tmp/recall-twa && cd /tmp/recall-twa
bubblewrap init --manifest /abs/path/to/repo/store/twa/twa-manifest.json

# 3. Read the target API level Bubblewrap chose and compare it to what Play
#    demands on your app's Dashboard (it rises every year).
grep -n "targetSdk" /tmp/recall-twa/app/build.gradle

# 4. Fingerprint -> assetlinks.json -> DEPLOY THE WEB APP -> verify live
keytool -list -v -keystore ~/keys/recall-upload.keystore -alias recall-upload | grep SHA256:
$EDITOR /abs/path/to/repo/apps/web/public/.well-known/assetlinks.json
node store/twa/validate.mjs
# ... deploy ... then:
curl -sI https://recall-monorepo-web.vercel.app/.well-known/assetlinks.json   # 200 + application/json, NOT a 3xx
curl -s  https://recall-monorepo-web.vercel.app/.well-known/assetlinks.json

# 5. Build the bundle
cd /tmp/recall-twa && bubblewrap build     # -> app-release-bundle.aab
```

⚠️ After Play App Signing enrols the app, Google **re-signs** it with a
different key. Come back and add the *app signing key* SHA-256 from
**Play Console → Test and release → Setup → App signing** to the same
`sha256_cert_fingerprints` array, redeploy the web app, and reinstall to
confirm the URL bar is gone. Full detail in `store/twa/README.md`.

### B2 — Expo path only

```sh
npm i -g eas-cli && eas login
cd apps/mobile
eas init                                          # mints extra.eas.projectId
eas build  --platform android --profile production   # -> .aab
eas submit --platform android --profile production   # needs the Play service account JSON
```

Verify the merged permission list before submitting (see E3):

```sh
cd apps/mobile && npx expo prebuild -p android --no-install
grep uses-permission android/app/src/main/AndroidManifest.xml
grep -n "targetSdk" android/app/build.gradle
```

`android/` is gitignored — this is a throwaway inspection, not a commit.

### B3 — Both paths

```sh
vercel env ls        # NEXT_PUBLIC_PLAUSIBLE_DOMAIN must be UNSET (see data-safety doc)
```

---

## C. Decisions only you can make [YOU-DECIDE]

1. **Which Android artifact** ships (see the STOP section). Everything else
   branches off this.
2. **Final Android package name** — permanent after first upload.
3. **iOS bundle identifier / Expo slug** — whether they follow the rename.
4. **Pricing and monetization.** Nothing is decided in code: the app is
   entirely free, `apps/web/lib/entitlements.ts` gates nothing, and
   `docs/monetization.md` deliberately holds no decision. If you ever charge
   for digital goods in the Android app, **Play Billing is the only permitted
   path** — a web checkout that unlocks Android features is a policy
   violation. Not decided here.
5. **Target audience & content rating (IARC) answers.** The code fixes
   `MIN_AGE = 16` (`apps/web/lib/site-config.ts`,
   `apps/mobile/lib/site-config.ts`) and the privacy policy states 16+. That
   makes "Target age group: 13–15, 16–17, 18+" the consistent answer and
   means the **Families policy programme does not apply** — do not opt in.
   The actual IARC questionnaire is yours to answer truthfully.
6. **Contact-form data-safety answer** — see blocker 1 in
   `store/data-safety-playstore.md`.
7. **Crash-reporting vendor**, if any. `apps/web/lib/error-reporting.ts` is a
   deliberate no-op seam; adding a vendor adds a data processor that must be
   named in the privacy policy *and* the data-safety form. See
   `docs/error-reporting.md`.
8. **Support email on the listing.** `apps/web/lib/site-config.ts` defaults
   to `hello@recall.app` (a domain that must actually exist and receive mail)
   unless `NEXT_PUBLIC_SUPPORT_EMAIL` is set; `PRIVACY.md` and
   `store/listing-playstore.md` still print a personal Gmail address. Pick
   one and make them agree.
9. **Custom domain.** Everything is currently pinned to
   `recall-monorepo-web.vercel.app` — the PWA manifest, the assetlinks host,
   `apps/mobile/lib/site-config.ts`, and `store/twa/twa-manifest.json`.
   Moving to a custom domain later means re-verifying asset links and
   shipping a TWA update, so decide **before** the first release if you can.

---

## D. Play Console steps, in order [CONSOLE]

1. **Create the developer account** ($25 one-time, identity-verified). Note
   that individual accounts created recently must complete a 12-tester /
   14-day closed test before production access is granted — check the
   requirement that applies to your account type early, it is the longest
   lead-time item in this whole document.
2. **Create the app** — name, default language, "App" (not Game), "Free".
   ⚠️ You supply the package name here on first upload. It is permanent.
3. **Internal testing track first.** Upload the `.aab` from B1 or B2. Never
   go straight to production.
4. **Setup → App signing** — record the *app signing key* SHA-256. TWA path:
   put it into `assetlinks.json` and redeploy (B1 step 4).
5. **App content** section, in this order:
   - Privacy policy URL → `https://recall-monorepo-web.vercel.app/privacy`
   - App access → "All functionality available without special access" (the
     app genuinely works with no account — say so, and add the reviewer note
     below).
   - Ads → **No ads.**
   - Content rating (IARC) questionnaire → [YOU-DECIDE], see C5.
   - Target audience and content → [YOU-DECIDE], see C5.
   - **Data safety** → `store/data-safety-playstore.md`, after resolving its
     two flagged blockers.
   - Government apps → No. Financial features → No.
   - **Account deletion** → in-app deletion exists; public URL
     `https://recall-monorepo-web.vercel.app/delete-account`.
   - Permissions declaration → only if the merged manifest contains a
     sensitive permission (see E3).
6. **Main store listing** — copy from `store/listing-playstore.md`
   (title/short/full description are already written and length-checked).
   Category **Education**.
7. **Graphics** — app icon 512×512, feature graphic **1024×500**, and ≥2
   phone screenshots. ❌ **None of these exist in the repo yet** — see E1.
8. **Countries / pricing** — Free. [YOU-DECIDE] see C4.
9. Promote internal → closed → production.

**Reviewer note (paste into the release notes / app access field):**

> Recall works fully offline with no account — every study feature is
> available anonymously, so there is no login wall. An optional email
> sign-in adds cross-device sync and an anonymized leaderboard; account
> deletion is in Account → "Delete account & cloud data".

---

## E. Known gaps and open risks

**E1 — Store graphics do not exist.** `apps/web/public/screenshots/` is
absent, yet `apps/web/app/manifest.ts` declares three screenshots at
`/screenshots/{drill,note,stats}.png` sized `1080x1920`. Chrome silently
drops the **entire** screenshot set if any declared file 404s or if its real
dimensions differ from the declared `sizes`, so the generated PNGs must be
exactly 1080×1920. The Play feature graphic (1024×500) also does not exist.
Plan and captions: `store/screenshots.md`. (Generation is another workstream;
`node store/twa/validate.mjs` warns until the files land.)

**E2 — targetSdkVersion is not pinned anywhere in this repo, for either
artifact.** Verified: the Expo Android template's `build.gradle` delegates to
the `expo-root-project` Gradle plugin, and there is no `expo-build-properties`
config; Bubblewrap does not expose `targetSdk` in `twa-manifest.json` either.
The value therefore comes from the Expo SDK 56 / Bubblewrap CLI defaults at
build time and can only be read from the generated project (commands in B1/B2).
Play publishes the required level on your app's Dashboard. **Do not guess a
number** — read it, compare it, and if it is short, upgrade the toolchain
(`npm i -g @bubblewrap/cli@latest`, or bump the Expo SDK) rather than
hand-editing gradle.

**E3 — Android permissions must be read from the *merged* manifest.**
`apps/mobile/app.json` declares only `android.permission.VIBRATE`, which is
justified (`expo-haptics` fires on every graded card in
`apps/mobile/lib/store-provider.tsx`). But Expo's `android.permissions` is **additive**,
not restrictive: `expo-notifications` injects its own permissions at
prebuild — `POST_NOTIFICATIONS` at minimum, and potentially
`RECEIVE_BOOT_COMPLETED`, `WAKE_LOCK`, `SCHEDULE_EXACT_ALARM` and the FCM
receive permission. Two of those have Play consequences:
* `SCHEDULE_EXACT_ALARM` triggers a **separate Play declaration form**, and
  Recall only needs an *inexact* daily reminder;
* an FCM permission implies push messaging the app does not have.

Run the `expo prebuild` + `grep uses-permission` commands in B2 and declare
exactly what is there. If unwanted permissions appear, the remedy is
`expo.android.blockedPermissions` in `app.json` — **not applied here on
purpose**, because blocking a permission changes notification runtime
behaviour (exact → inexact alarm scheduling) and that needs a device test,
which belongs to the QA workstream, not to packaging.

**E4 — `channel` in `eas.json` is currently inert.** All three build profiles
set a `channel`, and `app.json` now sets a `runtimeVersion` policy, but
`expo-updates` is **not** a dependency of `apps/mobile`. So there are no OTA
updates today and these fields do nothing. That is fine — but do not assume
you can hot-fix a shipped build without a new Play release. Adding
`expo-updates` is a separate, deliberate change.

**E5 — The live deployment was not re-verified from this environment.**
Outbound requests to `recall-monorepo-web.vercel.app` are blocked by the
build sandbox's egress proxy, so the `curl` checks in B1 step 4 are written
for you to run and have **not** been executed. All assetlinks/manifest claims
above are about the repository contents and the Next.js config that produces
them, not about what is currently live.

**E6 — Hardcoded Supabase credentials.** `apps/web/lib/supabase.ts` and
`apps/mobile/lib/supabase.ts` hardcode the project URL and publishable key as
fallbacks. That is by design (publishable keys are client-safe and protected
by row-level security) but it means **sync is always on** for a signed-in
user, in every build, with no env wiring — so the data-safety answers can
never be "we didn't configure a backend".

**E7 — Listing URLs.** The `https://<your-domain>` placeholders in
`store/listing-playstore.md` and `store/listing-appstore.md` have been
replaced with the live deployment URL,
`https://recall-monorepo-web.vercel.app`. Play rejects a privacy-policy URL
that does not resolve, so this could not stay a placeholder.

If you later move to a custom domain, these two files, `SITE_URL` in
`apps/mobile/lib/site-config.ts`, `store/twa/twa-manifest.json` (`host` and
`startUrl`), and the `NEXT_PUBLIC_SITE_URL` env var on both Vercel projects
all have to move together — and the TWA must be rebuilt, because its verified
origin is compiled into the Android app.
