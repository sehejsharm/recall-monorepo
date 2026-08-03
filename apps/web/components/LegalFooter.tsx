import Link from "next/link";
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
          Privacy
        </Link>
        <span aria-hidden>·</span>
        <Link href="/terms" className="hover:text-muted">
          Terms
        </Link>
        <span aria-hidden>·</span>
        <Link href="/delete-account" className="hover:text-muted">
          Delete account
        </Link>
        <span aria-hidden>·</span>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-muted">
          Contact
        </a>
      </nav>
      <p className="mt-3">Recall · Drill. Read. Repeat.</p>
      {/* No opacity modifier here: text-faint/70 drops below the 4.5:1 AA
          contrast floor on this background. */}
      <p className="mt-1 text-faint">
        Not affiliated with, endorsed by, or sponsored by CFA Institute, GARP, UPSC, or any exam
        body. CFA® and FRM® are trademarks of their respective owners.
      </p>
    </footer>
  );
}
