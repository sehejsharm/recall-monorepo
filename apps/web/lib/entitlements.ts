import { features } from "./features";

/**
 * Entitlement seam for a possible future paid tier.
 *
 * ⚠️ NO PRICING OR MONETIZATION DECISION IS ENCODED HERE. Today
 * `hasEntitlement()` returns true for everything — the app is entirely free
 * and nothing is gated. This exists only so that IF a paid unlock is added
 * later, it plugs in here instead of forcing a rewrite of the account and
 * settings code.
 *
 * Design rules any future implementation must keep:
 *   - offline-first: entitlement state must be cached locally and default to
 *     GRANTED on failure, never lock a paying user out because a receipt
 *     check couldn't reach the network;
 *   - no-account-required: an anonymous user must still be able to use
 *     everything currently free;
 *   - Play Billing is the only permitted purchase path for digital goods in
 *     the Android build (Play policy) — do not add a web checkout that
 *     unlocks Android features.
 */

/** Capabilities that a future paid tier might gate. Free today. */
export type Entitlement = "unlimited-mock-exams" | "all-exams" | "offline-packs";

export interface EntitlementState {
  /** Whether the user has an active paid entitlement. */
  active: boolean;
  /** Where it came from — for debugging; never shown to users. */
  source: "free" | "play-billing" | "promo";
}

/** Current state. Everything is free, so this is a constant for now. */
export function entitlementState(): EntitlementState {
  return { active: false, source: "free" };
}

/**
 * The single gate call sites should use. Returns true for everything while
 * billing is disabled, so adding a flag never accidentally locks features.
 */
export function hasEntitlement(_entitlement: Entitlement): boolean {
  if (!features.billing) return true; // free product — nothing is gated
  // TODO(billing): consult cached Play Billing purchase state here.
  return true;
}
