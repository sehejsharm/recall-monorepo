import Script from "next/script";

/**
 * Privacy-friendly analytics (Plausible). Cookieless, GDPR-friendly, no
 * personal data — so no consent banner is needed. Activates only when
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set (e.g. "recall.app"), otherwise renders
 * nothing. Self-host or use plausible.io; override the script host with
 * NEXT_PUBLIC_PLAUSIBLE_SRC if self-hosting.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.js";
  return <Script defer data-domain={domain} src={src} strategy="afterInteractive" />;
}
