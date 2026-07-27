/**
 * Public site configuration. The support email is env-configurable so the
 * listing/policy contact isn't a hardcoded personal address — set
 * NEXT_PUBLIC_SUPPORT_EMAIL in Vercel to a dedicated alias.
 */
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hello@recall.app";

/** Minimum age, kept consistent across the policy, terms and store answers. */
export const MIN_AGE = 16;
