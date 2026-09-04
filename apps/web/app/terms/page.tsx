import { SUPPORT_EMAIL, MIN_AGE } from "@/lib/site-config";
import Link from "next/link";
import { LegalFooter } from "@/components/LegalFooter";

export const metadata = {
  title: "Terms of Service — Recall",
  description: "The terms that govern your use of the Recall exam-prep app."
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-1 font-semibold text-ink">{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 pb-24 pt-14">
      <Link href="/" className="text-xs text-muted hover:text-ink">
        ← Home
      </Link>
      <h1 className="mb-1 mt-3 text-2xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mb-8 text-xs text-muted">Last updated: 27 July 2026</p>

      <div className="space-y-5 text-sm leading-relaxed text-muted">
        <p>
          These terms govern your use of Recall (the &ldquo;app&rdquo;). By using the app you agree
          to them. If you don&apos;t agree, please don&apos;t use the app.
        </p>
        <Section title="Who can use Recall">
          You must be at least {MIN_AGE} years old to use Recall. An account is optional; the app is
          fully usable offline and anonymously without one.
        </Section>
        <Section title="Your account">
          You&apos;re responsible for keeping your sign-in credentials secure and for activity under
          your account. You may delete your account and all synced data at any time from Settings →
          Account, or via the{" "}
          <a className="text-correct-bright underline" href="/delete-account">
            account deletion page
          </a>
          .
        </Section>
        <Section title="Acceptable use">
          Use Recall for your own exam preparation. Don&apos;t attempt to disrupt the service, scrape
          or resell the content, abuse the leaderboard, or use the app for anything unlawful.
        </Section>
        <Section title="Study content">
          Recall&apos;s notes and practice questions are provided for study and revision. We aim for
          accuracy but make no guarantee of exam outcomes, and the content is not a substitute for
          official syllabi or exam-board materials. Recall is not affiliated with, endorsed by, or
          sponsored by any exam body, CFA Institute, or GARP; those names and marks belong to their
          respective owners and are used only to describe what Recall helps you study.
        </Section>
        <Section title="Intellectual property">
          The app, its design, and its original study content are owned by Recall and provided to
          you under a personal, non-transferable licence to use the app. You may not copy,
          redistribute, or create derivative works from the content.
        </Section>
        <Section title="Disclaimers &amp; liability">
          The app is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum
          extent permitted by law, Recall is not liable for any indirect or consequential loss
          arising from your use of the app.
        </Section>
        <Section title="Changes">
          We may update these terms; material changes will be reflected by the &ldquo;last
          updated&rdquo; date above. Continued use after a change means you accept the new terms.
        </Section>
        <Section title="Contact">
          Questions about these terms? Email{" "}
          <a className="text-correct-bright underline" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </Section>
      </div>

      <LegalFooter />
    </main>
  );
}
