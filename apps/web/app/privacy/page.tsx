import { SUPPORT_EMAIL, MIN_AGE } from "@/lib/site-config";
import { LegalFooter } from "@/components/LegalFooter";

export const metadata = {
  title: "Privacy Policy — Recall",
  description: "How Recall handles your data: private by default, no ads, no tracking."
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 pb-24 pt-14">
      <a href="/" className="text-xs text-muted hover:text-ink">
        ← Home
      </a>
      <h1 className="mb-1 mt-3 text-2xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mb-8 text-xs text-muted">Last updated: 27 July 2026</p>

      <div className="space-y-5 text-sm leading-relaxed text-muted">
        <p>
          Recall is an exam-preparation app for active-recall drilling and micro-notes. It is
          private by default.
        </p>
        <section>
          <h2 className="mb-1 font-semibold text-ink">What we collect</h2>
          <p>
            Nothing is required. The app works fully offline and anonymous — your progress,
            spaced-repetition schedule, XP, streaks and bookmarks live only on your device. If you
            choose to create an account, we store your email (for sign-in), your progress and read
            history (to sync across devices), and an <strong>anonymized</strong> leaderboard handle
            with your XP, level and streak. Your real name and email are never shown publicly.
          </p>
        </section>
        <section>
          <h2 className="mb-1 font-semibold text-ink">What we don&apos;t do</h2>
          <p>
            We don&apos;t sell or share your data, run ads or ad trackers, or collect location,
            contacts or photos. We do not collect crash reports, analytics or diagnostics from
            your device. You can opt out of the leaderboard anytime in Settings.
          </p>
        </section>
        <section>
          <h2 className="mb-1 font-semibold text-ink">Your rights &amp; the law</h2>
          <p>
            We handle personal data in line with India&apos;s Digital Personal Data Protection Act,
            2023 (DPDP) — which is where most of our users are — and apply the same standards
            everywhere. You can access and port your data (Settings →{" "}
            <strong>Download your data</strong>, a JSON export generated on your device), correct
            it (Settings → Display name), and erase it (below). The lawful basis for the optional
            account is your consent, which you can withdraw at any time by deleting the account.
          </p>
        </section>
        <section>
          <h2 className="mb-1 font-semibold text-ink">Age</h2>
          <p>
            Recall is intended for exam aspirants aged {MIN_AGE} and older. We do not target or
            knowingly collect personal information from anyone under {MIN_AGE}. If you believe a
            younger person has created an account, contact us and we will remove it.
          </p>
        </section>
        <section>
          <h2 className="mb-1 font-semibold text-ink">Notifications</h2>
          <p>Daily reminders are scheduled locally on your device; they involve no server data.</p>
        </section>
        <section>
          <h2 className="mb-1 font-semibold text-ink">Data deletion &amp; contact</h2>
          <p>
            You can permanently delete your account and all synced data from inside the app at any
            time: <strong>Settings → Account, then &ldquo;Delete account &amp; cloud data&rdquo;</strong>.
            This immediately removes your progress, read history, leaderboard entries and sign-in
            identity from our servers. Full instructions are on our{" "}
            <a className="text-correct-bright underline" href="/delete-account">
              account deletion page
            </a>
            . If you prefer, email{" "}
            <a className="text-correct-bright underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>{" "}
            from your account email and we&apos;ll remove it within 30 days.
          </p>
        </section>
      </div>

      <LegalFooter />
    </main>
  );
}
