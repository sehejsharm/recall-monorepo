#!/usr/bin/env node
/**
 * Store-readiness preflight for the Expo app. Run before `eas build`.
 *
 *   node scripts/preflight-store.mjs
 *
 * Verifies what can be checked without store accounts: app config sanity,
 * required assets (size/alpha rules), and that EAS submit placeholders are
 * filled. Prints a checklist; exits non-zero only on hard FAILs so it can
 * gate CI. Account-gated placeholders (EAS projectId, Apple/Play creds) are
 * reported as WARN, not FAIL, since they're filled by `eas init` / by you.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const mobile = join(root, "apps", "mobile");

let fails = 0;
let warns = 0;
const ok = (m) => console.log(`  \x1b[32m✓\x1b[0m ${m}`);
const warn = (m) => { warns++; console.log(`  \x1b[33m!\x1b[0m ${m}`); };
const fail = (m) => { fails++; console.log(`  \x1b[31m✗\x1b[0m ${m}`); };

function pngInfo(path) {
  const b = readFileSync(path);
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), colorType: b.readUInt8(25) };
}

console.log("\nStore preflight — apps/mobile\n");

// 1. app.json
console.log("app.json");
const app = JSON.parse(readFileSync(join(mobile, "app.json"), "utf8")).expo;
if (/^\d+\.\d+\.\d+$/.test(app.version)) ok(`version ${app.version}`);
else fail(`version "${app.version}" is not semver`);
app.ios?.bundleIdentifier ? ok(`iOS bundleIdentifier ${app.ios.bundleIdentifier}`) : fail("missing ios.bundleIdentifier");
app.android?.package ? ok(`Android package ${app.android.package}`) : fail("missing android.package");
const projectId = app.extra?.eas?.projectId ?? "";
projectId.startsWith("REPLACE_") || !projectId
  ? warn("extra.eas.projectId not set — run `eas init` (account-gated)")
  : ok(`EAS projectId ${projectId}`);

// 2. assets
console.log("\nassets");
const checkPng = (rel, want) => {
  const p = join(mobile, rel);
  if (!existsSync(p)) return fail(`${rel} missing`);
  const { w, h, colorType } = pngInfo(p);
  const hasAlpha = colorType === 6 || colorType === 4;
  let msg = `${rel} ${w}x${h}${hasAlpha ? " (alpha)" : ""}`;
  if (want.square && w !== h) return fail(`${msg} — must be square`);
  if (want.min && (w < want.min || h < want.min)) return fail(`${msg} — min ${want.min}px`);
  if (want.noAlpha && hasAlpha) return fail(`${msg} — iOS icon must NOT have alpha`);
  if (want.alpha && !hasAlpha) warn(`${msg} — expected transparency`);
  ok(msg);
};
checkPng("assets/icon.png", { square: true, min: 1024, noAlpha: true });
checkPng("assets/adaptive-icon.png", { square: true, min: 1024, alpha: true });
checkPng("assets/splash.png", { min: 1024 });
checkPng("assets/notification-icon.png", { square: true, alpha: true });

// 3. eas.json submit placeholders
console.log("\neas.json (submit)");
const eas = JSON.parse(readFileSync(join(mobile, "eas.json"), "utf8"));
const sub = eas.submit?.production ?? {};
const ios = sub.ios ?? {};
for (const [k, v] of Object.entries(ios)) {
  String(v).startsWith("REPLACE_")
    ? warn(`ios.${k} placeholder — fill before \`eas submit\` (account-gated)`)
    : ok(`ios.${k} set`);
}
const saPath = sub.android?.serviceAccountKeyPath;
if (saPath) existsSync(join(mobile, saPath))
  ? ok(`android service account present (${saPath})`)
  : warn(`android serviceAccountKeyPath ${saPath} not found — add before \`eas submit\` (account-gated)`);

// 4. notification plugin wired (we request permission in onboarding)
console.log("\nplugins");
const notif = (app.plugins ?? []).find((p) => Array.isArray(p) && p[0] === "expo-notifications");
notif ? ok("expo-notifications configured" + (notif[1]?.icon ? " (icon set)" : "")) : warn("expo-notifications plugin not found");

console.log(`\n${fails ? `\x1b[31m${fails} FAIL\x1b[0m, ` : ""}${warns} warning(s) (account-gated steps).`);
console.log(fails ? "Fix FAILs before building.\n" : "Code/config ready — remaining items are account-gated (see STORE.md).\n");
process.exit(fails ? 1 : 0);
