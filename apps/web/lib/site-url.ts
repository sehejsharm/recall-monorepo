/**
 * The canonical site origin, used for metadataBase, canonical tags, OG URLs,
 * robots `host` and the sitemap. Single source of truth so these can never
 * disagree.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this in Vercel to the ONE canonical domain
 *      you want indexed (the same value on every project pointing at this
 *      repo), so self-referential canonicals across duplicate deployments
 *      don't fracture SEO.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's stable per-project production
 *      domain. A safety net so a forgotten env var still yields a real HTTPS
 *      origin in production instead of localhost (it just may self-reference).
 *   3. http://localhost:3000 — local dev only.
 *
 * Trailing slash is stripped so `${siteUrl()}/path` never doubles up.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;
  return "http://localhost:3000";
}
