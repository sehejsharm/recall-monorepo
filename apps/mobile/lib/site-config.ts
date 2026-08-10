/**
 * Public site configuration for the native app.
 *
 * The legal pages are served by the web app rather than duplicated natively,
 * so there is exactly one canonical copy of the policy to keep accurate.
 * Google Play and the App Store both require the privacy policy to be
 * reachable from *inside* the app, not just from the store listing, which is
 * what the Legal section in Settings uses these for.
 *
 * Update SITE_URL if the production domain changes — a custom domain here
 * would be more durable than the deployment URL.
 */
export const SITE_URL = "https://recall-monorepo-web.vercel.app";

export const PRIVACY_URL = `${SITE_URL}/privacy`;
export const TERMS_URL = `${SITE_URL}/terms`;
export const DELETE_ACCOUNT_URL = `${SITE_URL}/delete-account`;

/** Kept in step with apps/web/lib/site-config.ts. */
export const MIN_AGE = 16;
