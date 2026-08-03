import Link from "next/link";
import { t } from "@/lib/i18n";
import { SUPPORT_EMAIL } from "@/lib/site-config";

/**
 * Shared legal footer: Privacy, Terms and Contact, reachable from every
 * content page, the home page and Settings — Play requires the privacy
 * policy (and, for accounts, deletion info) to be accessible in-app.
 */
export function LegalFooter() {
  return (
    <footer className="mt-12 border-t border-edge/60 pt-6 text-center text-[11px] text-faint">
      <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <Link href="/privacy" className="hover:text-muted">
          {t("footer.privacy")}
        </Link>
        <span aria-hidden>·</span>
        <Link href="/terms" className="hover:text-muted">
          {t("footer.terms")}
        </Link>
        <span aria-hidden>·</span>
        <Link href="/delete-account" className="hover:text-muted">
          {t("footer.deleteAccount")}
        </Link>
        <span aria-hidden>·</span>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-muted">
          {t("footer.contact")}
        </a>
      </nav>
      <p className="mt-3">{t("footer.tagline")}</p>
      {/* No opacity modifier here: text-faint/70 drops below the 4.5:1 AA
          contrast floor on this background. */}
      <p className="mt-1 text-faint">{t("footer.disclaimer")}</p>
    </footer>
  );
}
