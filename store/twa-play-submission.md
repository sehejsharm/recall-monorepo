# TWA packaging — status and Play-specific notes

**Start at `store/submission-checklist.md`** — that is the ordered, end-to-end
runbook for the whole Play submission. This file holds the TWA-specific
detail and the current status of each moving part.

The step-by-step Bubblewrap command sequence now lives in
**`store/twa/README.md`**, next to the committed inputs it operates on.

---

## What changed: packaging is no longer tribal knowledge

Previously the only record of how to build the Android artifact was the prose
"run `bubblewrap init` and accept the defaults, but set these three things" —
an interactive interview whose answers lived in one person's head and whose
output (the `android/` project) is gitignored. That is not reproducible: two
people running it get two different apps, and nobody can review the diff.

Now committed:

| File | Purpose |
|---|---|
| `store/twa/twa-manifest.json` | Every field Bubblewrap asks for, pre-filled from the real deployed PWA manifest. `bubblewrap init --manifest store/twa/twa-manifest.json` is deterministic. |
| `store/twa/README.md` | The exact command sequence, incl. the Play App Signing re-signing trap. |
| `store/twa/validate.mjs` | Offline preflight: assetlinks shape, package-name coherence, icon existence, manifest fields, remaining placeholders. |
| `store/twa/make-maskable-icon.mjs` | Regenerates the dedicated maskable icon. |

```sh
node store/twa/validate.mjs      # run this before every bubblewrap build
```

**No signing keystore is generated here, on purpose.** It cannot be
regenerated, it must be backed up outside the repo, and one created in an
ephemeral container would be lost. `*.keystore` / `*.jks` are gitignored so
it cannot be committed by accident. You create it — `store/twa/README.md`
step 1.

---

## PWA manifest — status

`apps/web/app/manifest.ts` is the TWA's source of truth. Fixed for TWA use:

- **`scope: "/"` added.** It was missing. Bubblewrap needs an explicit scope;
  without one, navigations it considers out-of-scope open in a Custom Tab
  with a visible URL bar — the exact thing a TWA exists to avoid.
- **`id: "/"` added.** Without it, app identity defaults to `start_url`, so
  changing `start_url` later would read as a *new* app to Chrome and orphan
  every existing install.
- **`lang: "en"` / `dir: "ltr"` added**, matching `<html lang="en">`.
- **Dedicated maskable icon added.** `icon-512.png` was serving as both
  `purpose: "any"` and `purpose: "maskable"`. Measured, its glyph reaches
  r ≈ 170 px of 512 (33.2%): inside the W3C maskable safe zone (r = 40%) but
  outside Android's tightest 66/108 dp circular mask (r = 31.25%), i.e.
  clippable on some OEM masks. `icon-maskable-512.png` now carries the
  `maskable` purpose alone, with the glyph at r ≈ 146 px (28.5%).
- **App shortcuts added** (`/review`, `/stats`) — Bubblewrap turns these into
  Android long-press shortcuts.
- `name` (29 chars) / `short_name` (6 chars) are within launcher limits;
  `display`, `orientation`, `theme_color`, `background_color` and
  `categories` were already correct.

⚠️ The three `screenshots` entries point at `public/screenshots/*.png`, which
**do not exist yet**. Chrome drops the *whole* screenshot set if any file
404s or if a file's real pixel size differs from the declared `1080x1920`.

---

## Digital Asset Links — status

`apps/web/public/.well-known/assetlinks.json` has exactly the shape Android's
verifier requires (verified programmatically by `store/twa/validate.mjs`): a
JSON **array**, `relation` as an array containing
`delegate_permission/common.handle_all_urls`, `target.namespace` =
`android_app`, `package_name`, and a `sha256_cert_fingerprints` **array**.

Outstanding — one substitution and one decision:

1. `sha256_cert_fingerprints[0]` is
   `REPLACE_WITH_YOUR_SIGNING_KEY_SHA256_FINGERPRINT`. **The TWA shows a
   browser URL bar until this is a real fingerprint, live in production.**
2. `package_name` is `app.recall.twa` — a *default*, not a decision. See the
   package-name section of `store/submission-checklist.md`; it is permanent
   after the first Play upload.

`apps/web/next.config.ts` now pins the response headers for that exact path
(`Content-Type: application/json`, `nosniff`, `max-age=300`). Vercel already
infers `application/json` from the `.json` extension, but that was an
implicit default whose failure mode is invisible until after release. Also
confirmed: no `redirects()` rule matches `/.well-known/*` and there is no
`trailingSlash` setting — Android's verifier rejects a redirect.

The `curl` verification of the **live** URL is in `store/twa/README.md`
step 3. It has **not** been run from this environment — outbound requests to
the deployment are blocked by the sandbox egress proxy, so every claim here
is about repository contents, not about what is currently served.

---

## Android API level

Play requires new apps and updates to target a recent API level, and raises
it annually; the exact live requirement appears in
**Play Console → your app → Dashboard** when you upload.

**`targetSdkVersion` is not pinned anywhere in this repo, for either
artifact** (verified):

1. **TWA** — Bubblewrap does not expose `targetSdk` in `twa-manifest.json`;
   it comes from the Android project Bubblewrap generates, which is not in
   the repo. After `bubblewrap init`, read it:
   `grep -n "targetSdk" /tmp/recall-twa/app/build.gradle`. If it is short,
   update the CLI (`npm i -g @bubblewrap/cli@latest`) and `bubblewrap update`
   — the CLI version pins the template. Do not hand-edit gradle.
2. **Expo app** — the template's `android/build.gradle` delegates SDK
   versions to the `expo-root-project` Gradle plugin, and no
   `expo-build-properties` config is present, so the value comes from Expo
   SDK 56 defaults. Read it after
   `npx expo prebuild -p android --no-install`:
   `grep -n "targetSdk" android/app/build.gradle`. To pin it, add
   `expo-build-properties` — but prefer the SDK default unless Play forces
   your hand.

---

## Which artifact ships is still undecided

The TWA and the Expo app are different Android packages and cannot share one
Play listing. The decision — and the permanent package-name choice that comes
with it — is the first section of `store/submission-checklist.md`.

## Notification permission — compliant on both paths

- **TWA**: `store/twa/twa-manifest.json` sets `"enableNotifications": false`,
  and the PWA never calls `Notification.requestPermission()` (verified: no
  such call anywhere in `apps/web`). The Android app therefore declares no
  notification permission and has nothing to justify.
- **Expo app**: the OS prompt is gated behind an in-app rationale.
  `apps/mobile/components/Onboarding.tsx` shows a dedicated "Never miss a
  day" screen explaining the single daily reminder, with **Enable daily
  reminder** / **Maybe later**; only the explicit Enable tap reaches
  `scheduleDailyReminder()` → `ensureNotificationPermission()` →
  `requestPermissionsAsync()` (`apps/mobile/lib/notifications.ts`). The
  Settings toggle likewise only prompts on deliberate user action.

  ⚠️ Separately: `expo-notifications` injects permissions into the **merged**
  Android manifest that `app.json` does not list. Read them from a prebuild
  before answering Play's permissions questions — `store/submission-checklist.md`
  section E3.
