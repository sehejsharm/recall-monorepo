/**
 * Feature flags — extension points for work that is planned but deliberately
 * NOT built yet. Everything defaults OFF, so shipping these costs nothing at
 * runtime and adding the real feature never has to restructure existing code.
 *
 * Flags are read from NEXT_PUBLIC_* env vars so they can be flipped per
 * environment (preview on, production off) without a code change.
 *
 * ⚠️ Nothing here implies a decision. In particular `billing` does NOT commit
 * to a pricing model, a product SKU, or that the app will be paid at all —
 * see docs/monetization.md.
 */

function flag(value: string | undefined, fallback = false): boolean {
  if (value === undefined) return fallback;
  return value === "1" || value.toLowerCase() === "true";
}

export interface Features {
  /**
   * Timed mock-exam mode (full-length, scored, timer, no per-card feedback).
   * The drill engine already supports a bounded queue via `limit`, so the
   * feature is mostly a timer + a results screen — no scheduler changes.
   */
  mockExam: boolean;
  /**
   * Google Play Billing / paid unlock. OFF and unpriced. See
   * lib/entitlements.ts for the seam any implementation must go through.
   */
  billing: boolean;
}

export const features: Features = {
  mockExam: flag(process.env.NEXT_PUBLIC_FEATURE_MOCK_EXAM),
  billing: flag(process.env.NEXT_PUBLIC_FEATURE_BILLING)
};

export function isEnabled(name: keyof Features): boolean {
  return features[name];
}
