import Script from "next/script";

/**
 * Privacy-friendly analytics (Plausible). Cookieless, GDPR-friendly, no
 * personal data — so no consent banner is needed. Activates only when
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set (e.g. "recall.app"), otherwise renders
 * nothing. Self-host or use plausible.io; override the script host with
 * NEXT_PUBLIC_PLAUSIBLE_SRC if self-hosting.
 *
 * ⚠️ SETTING NEXT_PUBLIC_PLAUSIBLE_DOMAIN IS A LEGAL CHANGE, NOT A CONFIG ONE.
 * The privacy policy (apps/web/app/privacy/page.tsx, "What we don't do")
 * states: "We do not collect crash reports, analytics or diagnostics from
 * your device." That sentence is true only while this variable is unset. If
 * you turn analytics on you MUST, in the same change:
 *   1. amend that sentence in the privacy policy,
 *   2. add an "Analytics" row to store/data-safety-playstore.md — Play's
 *      data-safety form counts this, and an inaccurate form is a policy
 *      violation, and
 *   3. re-check it against the TWA, since the script would then be running
 *      inside the Play-distributed app.
 * Leaving it unset requires no disclosure at all, which is why it is unset.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.js";
  return <Script defer data-domain={domain} src={src} strategy="afterInteractive" />;
}
