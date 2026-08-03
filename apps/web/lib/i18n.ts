/**
 * Minimal i18n layer. English-only at launch; the point is that adding Hindi
 * (or Tamil/Telugu/Bengali for UPSC/SSC aspirants) becomes "add a catalog
 * file", not a refactor.
 *
 * Deliberately dependency-free: pulling in next-intl/react-i18next is a
 * vendor + bundle-size decision, and everything needed here is ~40 lines.
 * Swapping to a library later only has to satisfy the same `t()` signature.
 *
 * Conventions:
 *   - keys are dot-namespaced by surface: "nav.home", "settings.dailyGoal";
 *   - `en` is the source of truth AND the fallback, so a missing translation
 *     degrades to English rather than showing a raw key;
 *   - interpolation uses {named} placeholders — never string concatenation,
 *     which breaks languages with different word order.
 *
 * STATUS: scaffold + shared chrome extracted. Remaining screens still hold
 * inline English; migrating them is mechanical (wrap literal → t("key")) and
 * intentionally left as follow-up so it can land in reviewable slices rather
 * than one 20-file diff. See docs/i18n.md.
 */

export const SUPPORTED_LOCALES = ["en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** The English catalog — the source of truth for every key. */
const en = {
  "nav.home": "Home",
  "nav.ranks": "Ranks",
  "nav.stats": "Stats",
  "nav.settings": "Settings",

  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "footer.deleteAccount": "Delete account",
  "footer.contact": "Contact",
  "footer.tagline": "Recall · Drill. Read. Repeat.",
  "footer.disclaimer":
    "Not affiliated with, endorsed by, or sponsored by CFA Institute, GARP, UPSC, or any exam body. CFA® and FRM® are trademarks of their respective owners.",

  "error.title": "Something broke",
  "error.body": "Your progress is safe — it's stored on this device, not on this screen.",
  "error.retry": "Try again",
  "error.home": "Go to home",

  "search.placeholder": "Search {count} topics…",
  "search.noResults": "No topics match “{query}”.",
  "search.label": "Search {exam} topics",

  "banner.localOnly":
    "Your progress is saved on this device only — it's lost if you uninstall or clear site data.",
  "banner.signIn": "Sign in to back it up",
  "banner.dismiss": "Dismiss local storage notice"
} as const;

export type MessageKey = keyof typeof en;

/**
 * Catalogs by locale. Adding Hindi = add `hi: { ... }` (partial is fine —
 * anything missing falls back to English).
 */
const catalogs: Record<Locale, Partial<Record<MessageKey, string>>> = { en };

let current: Locale = DEFAULT_LOCALE;

export function setLocale(locale: Locale): void {
  current = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function getLocale(): Locale {
  return current;
}

/** Resolve the best locale from the browser, falling back to English. */
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.split("-")[0] as Locale;
    if (SUPPORTED_LOCALES.includes(base)) return base;
  }
  return DEFAULT_LOCALE;
}

/**
 * Translate `key`, interpolating {named} placeholders.
 * Falls back: current locale → English → the key itself.
 */
export function t(key: MessageKey, vars?: Record<string, string | number>): string {
  const template = catalogs[current]?.[key] ?? en[key] ?? key;
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in vars ? String(vars[name]) : match
  );
}
