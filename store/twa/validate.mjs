#!/usr/bin/env node
/**
 * TWA packaging preflight — zero dependencies, no network, no build.
 *
 *   node store/twa/validate.mjs
 *
 * Checks the things that silently produce a *shipped* TWA with a browser URL
 * bar (or an un-updatable Play listing), all of which are invisible until
 * after upload:
 *
 *   1. store/twa/twa-manifest.json is well-formed and every host-derived URL
 *      points at the same origin.
 *   2. twa-manifest.json `packageId` === assetlinks.json `package_name`.
 *      A mismatch here is THE reason TWAs ship with a URL bar.
 *   3. assetlinks.json has the exact shape Android's verifier requires.
 *   4. Every icon URL the TWA references resolves to a file that exists in
 *      apps/web/public (so `bubblewrap build` can't 404 mid-build).
 *   5. The PWA manifest still declares the fields Bubblewrap depends on
 *      (`scope`, `id`) and still points at the dedicated maskable icon.
 *   6. Which placeholders are still unfilled (reported, never failed — they
 *      are owner-supplied secrets by design).
 *
 * Exit code is non-zero only on hard FAILs, so it is safe to gate CI on.
 * Cross-artifact package-name coherence (Expo vs TWA) is REPORTED, not
 * failed — picking one is an owner decision, see store/submission-checklist.md.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const PUBLIC = join(root, "apps", "web", "public");

let fails = 0;
let warns = 0;
const ok = (m) => console.log(`  \x1b[32m✓\x1b[0m ${m}`);
const warn = (m) => { warns++; console.log(`  \x1b[33m!\x1b[0m ${m}`); };
const fail = (m) => { fails++; console.log(`  \x1b[31m✗\x1b[0m ${m}`); };
const note = (m) => console.log(`  \x1b[36mi\x1b[0m ${m}`);

const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
const isPlaceholder = (v) => typeof v === "string" && /^REPLACE_WITH/.test(v);

console.log("\nTWA packaging preflight\n");

// ── 1. twa-manifest.json ──────────────────────────────────────────────────
console.log("store/twa/twa-manifest.json");
const twa = readJson(join(here, "twa-manifest.json"));

for (const k of ["packageId", "host", "name", "launcherName", "startUrl", "iconUrl"]) {
  twa[k] ? ok(`${k}: ${twa[k]}`) : fail(`${k} missing — bubblewrap needs it`);
}

const urlFields = ["fullScopeUrl", "webManifestUrl", "iconUrl", "maskableIconUrl"];
for (const f of urlFields) {
  if (!twa[f]) { warn(`${f} not set`); continue; }
  let u;
  try { u = new URL(twa[f]); } catch { fail(`${f} is not a valid URL: ${twa[f]}`); continue; }
  if (u.protocol !== "https:") fail(`${f} must be https (Digital Asset Links is HTTPS-only)`);
  else if (u.host !== twa.host) fail(`${f} host ${u.host} ≠ manifest host ${twa.host}`);
  else ok(`${f} on ${u.host}`);
}

// ── 2 & 3. assetlinks.json ────────────────────────────────────────────────
console.log("\napps/web/public/.well-known/assetlinks.json");
const alPath = join(PUBLIC, ".well-known", "assetlinks.json");
if (!existsSync(alPath)) {
  fail("missing — the TWA cannot verify its origin without it");
} else {
  const al = readJson(alPath);
  if (!Array.isArray(al)) fail("must be a JSON ARRAY of statements");
  else if (al.length === 0) fail("array is empty");
  else {
    ok(`JSON array with ${al.length} statement(s)`);
    al.forEach((e, i) => {
      const at = `statement[${i}]`;
      Array.isArray(e.relation) && e.relation.includes("delegate_permission/common.handle_all_urls")
        ? ok(`${at}.relation includes delegate_permission/common.handle_all_urls`)
        : fail(`${at}.relation must be the ARRAY ["delegate_permission/common.handle_all_urls"]`);
      e.target?.namespace === "android_app"
        ? ok(`${at}.target.namespace = android_app`)
        : fail(`${at}.target.namespace must be "android_app"`);
      const pkg = e.target?.package_name;
      pkg ? ok(`${at}.target.package_name = ${pkg}`) : fail(`${at}.target.package_name missing`);
      const fps = e.target?.sha256_cert_fingerprints;
      if (!Array.isArray(fps) || fps.length === 0) {
        fail(`${at}.target.sha256_cert_fingerprints must be a non-empty ARRAY`);
      } else {
        for (const fp of fps) {
          if (isPlaceholder(fp)) {
            warn(`${at} fingerprint is still a placeholder — the TWA WILL show a URL bar until this is real`);
          } else if (!/^([0-9A-F]{2}:){31}[0-9A-F]{2}$/i.test(fp)) {
            fail(`${at} fingerprint is not 32 colon-separated hex bytes: ${String(fp).slice(0, 24)}…`);
          } else {
            ok(`${at} fingerprint looks well-formed`);
          }
        }
      }
      // THE check: a mismatch here is why a TWA ships with a URL bar.
      if (pkg && pkg !== twa.packageId) {
        fail(`package_name "${pkg}" ≠ twa-manifest packageId "${twa.packageId}" — origin verification WILL fail`);
      } else if (pkg) {
        ok(`package_name matches twa-manifest packageId`);
      }
    });
  }
}

// ── 4. Icons referenced by the TWA exist on disk ──────────────────────────
console.log("\nicons referenced by the TWA");
for (const f of ["iconUrl", "maskableIconUrl", "monochromeIconUrl"]) {
  if (!twa[f]) { if (f !== "monochromeIconUrl") warn(`${f} not set`); continue; }
  const rel = new URL(twa[f]).pathname.replace(/^\//, "");
  existsSync(join(PUBLIC, rel))
    ? ok(`${f} → apps/web/public/${rel}`)
    : fail(`${f} → apps/web/public/${rel} does not exist`);
}
for (const s of twa.shortcuts ?? []) {
  if (!s.chosenIconUrl) { warn(`shortcut "${s.name}" has no chosenIconUrl`); continue; }
  const rel = new URL(s.chosenIconUrl).pathname.replace(/^\//, "");
  existsSync(join(PUBLIC, rel))
    ? ok(`shortcut "${s.name}" icon → apps/web/public/${rel}`)
    : fail(`shortcut "${s.name}" icon → apps/web/public/${rel} does not exist`);
}

// ── 5. PWA manifest still has what Bubblewrap reads ───────────────────────
console.log("\napps/web/app/manifest.ts (source of truth for bubblewrap init)");
const src = readFileSync(join(root, "apps", "web", "app", "manifest.ts"), "utf8");
const has = (re, label, hard = true) =>
  re.test(src) ? ok(label) : (hard ? fail : warn)(`${label} — NOT found`);
has(/\bscope\s*:/, "declares `scope` (bubblewrap requires it)");
has(/\bid\s*:/, "declares `id` (stable app identity)");
has(/\blang\s*:/, "declares `lang`");
has(/\bdir\s*:/, "declares `dir`", false);
has(/purpose:\s*"maskable"/, "declares a maskable icon");
const maskableSrcs = [...src.matchAll(/src:\s*"([^"]+)"[^}]*purpose:\s*"maskable"/g)].map((m) => m[1]);
const maskableBlocks = [...src.matchAll(/\{[^{}]*purpose:\s*"maskable"[^{}]*\}/g)].map((m) => m[0]);
const maskablePaths = maskableBlocks
  .map((b) => b.match(/src:\s*"([^"]+)"/)?.[1])
  .filter(Boolean)
  .concat(maskableSrcs);
const unique = [...new Set(maskablePaths)];
if (unique.length === 0) {
  warn("could not statically resolve the maskable icon path — check manually");
} else if (unique.length > 1) {
  warn(`more than one maskable icon declared: ${unique.join(", ")}`);
} else {
  const p = unique[0].replace(/^\//, "");
  existsSync(join(PUBLIC, p)) ? ok(`maskable icon ${unique[0]} exists`) : fail(`maskable icon ${unique[0]} missing from public/`);
  // icon-512 doing double duty as any+maskable is the classic cropping bug.
  const anyBlocks = [...src.matchAll(/\{[^{}]*purpose:\s*"any"[^{}]*\}/g)].map((m) => m[0]);
  const anyPaths = anyBlocks.map((b) => b.match(/src:\s*"([^"]+)"/)?.[1]).filter(Boolean);
  anyPaths.includes(unique[0])
    ? fail(`${unique[0]} is declared as BOTH "any" and "maskable" — give maskable its own safe-zone asset`)
    : ok("maskable icon is a dedicated asset (not shared with purpose:any)");
}
// Screenshots are declared; a declared-but-missing file makes Chrome drop the
// entire richer-install UI silently.
for (const m of src.matchAll(/src:\s*"(\/screenshots\/[^"]+)"/g)) {
  const rel = m[1].replace(/^\//, "");
  existsSync(join(PUBLIC, rel))
    ? ok(`screenshot ${m[1]} present`)
    : warn(`screenshot ${m[1]} declared but not in public/ — Chrome drops the whole screenshot set`);
}

// ── 6. Placeholders + cross-artifact coherence ────────────────────────────
console.log("\nowner-supplied values");
if (isPlaceholder(twa.signingKey?.path) || isPlaceholder(twa.signingKey?.alias)) {
  warn("twa-manifest signingKey is a placeholder — create/point at YOUR keystore (never commit it)");
} else {
  ok("twa-manifest signingKey set");
}

console.log("\ncross-artifact package names (owner decision — reported, not failed)");
const appJson = readJson(join(root, "apps", "mobile", "app.json")).expo;
note(`TWA (Bubblewrap)   packageId          = ${twa.packageId}`);
note(`Expo Android       android.package    = ${appJson.android?.package}`);
note(`Expo iOS           bundleIdentifier   = ${appJson.ios?.bundleIdentifier}`);
note(`Expo               slug               = ${appJson.slug}`);
if (twa.packageId !== appJson.android?.package) {
  warn("the two Android artifacts have DIFFERENT package names — they are two different Play listings. Pick one BEFORE the first upload: a package name can never be changed afterwards.");
}
if (isPlaceholder(appJson.extra?.eas?.projectId ?? "")) {
  warn("apps/mobile extra.eas.projectId is a placeholder — run `eas init` (only needed for the Expo artifact)");
}

console.log(`\n${fails ? `\x1b[31m${fails} FAIL\x1b[0m, ` : ""}${warns} warning(s).`);
console.log(
  fails
    ? "Fix FAILs before `bubblewrap build`.\n"
    : "Shape is correct — remaining items are owner-supplied secrets/decisions (see store/submission-checklist.md).\n"
);
process.exit(fails ? 1 : 0);
