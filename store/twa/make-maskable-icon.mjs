#!/usr/bin/env node
/**
 * Generates apps/web/public/icon-maskable-512.png — the DEDICATED `purpose:
 * "maskable"` icon referenced by apps/web/app/manifest.ts.
 *
 * Why this exists
 * ---------------
 * `icon-512.png` used to be declared as BOTH `purpose: "any"` and
 * `purpose: "maskable"`. That is legal but fragile: Android applies an
 * OEM-chosen mask to a maskable icon, and the strictest common mask is a
 * circle of 66dp inside the 108dp adaptive-icon canvas — i.e. a radius of
 * only 31.25% of the image. Measured, the "R" glyph in icon-512.png reaches
 * a radius of ~170px / 512px (33.2%), so on a device using the tight circular
 * mask the corner of the glyph can be clipped. (It does clear the looser
 * W3C maskable safe zone of r = 40%, which is why this is a polish fix and
 * not an outright bug.)
 *
 * Rather than redraw the artwork — which would need the original typeface and
 * would drift from icon-512.png — we downscale the existing 512px icon and
 * re-centre it on the same flat brand green. The glyph is identical, just
 * inset, so the maskable variant can never disagree with the `any` variant.
 *
 * Determinism: the only input is apps/web/public/icon-512.png, and the
 * background colour is read from that file's own corner pixel. Re-running
 * this script on an unchanged source produces an identical PNG.
 *
 * Run from the repo root (sharp is already a workspace dependency):
 *   node store/twa/make-maskable-icon.mjs
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const SRC = join(root, "apps", "web", "public", "icon-512.png");
const OUT = join(root, "apps", "web", "public", "icon-maskable-512.png");

const SIZE = 512;
/**
 * Inset factor. 0.86 puts the glyph's furthest pixel at r ≈ 146px (28.5%),
 * comfortably inside the 66/108dp circular mask (r = 156px / 31.25%) with
 * room for the fade Android applies at the mask edge.
 */
const SCALE = 0.86;

const inner = Math.round(SIZE * SCALE);
const pad = Math.round((SIZE - inner) / 2);

const { data } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
// Corner pixel of the source = the flat brand background it was drawn on.
const background = { r: data[0], g: data[1], b: data[2], alpha: 1 };

await sharp(SRC)
  .resize(inner, inner, { fit: "fill", kernel: "lanczos3" })
  .extend({
    top: pad,
    bottom: SIZE - inner - pad,
    left: pad,
    right: SIZE - inner - pad,
    background
  })
  // colourType 2 (truecolour, no alpha) — matches icon-512.png. A maskable
  // icon must be fully opaque edge-to-edge or the mask reveals the wallpaper.
  .png({ compressionLevel: 9, palette: false })
  .removeAlpha()
  .toFile(OUT);

console.log(
  `wrote ${OUT} (${SIZE}x${SIZE}, glyph inset to ${(SCALE * 100).toFixed(0)}%, bg rgb(${background.r},${background.g},${background.b}))`
);
