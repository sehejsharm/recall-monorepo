import { SUPPORT_EMAIL } from "@/lib/site-config";
import { LegalFooter } from "@/components/LegalFooter";

export const metadata = {
  title: "Delete your account — Recall",
  description:
    "How to permanently delete your Recall account and all associated data, in-app or by request."
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 pb-24 pt-14">
      <a href="/" className="text-xs text-muted hover:text-ink">
        ← Home
      </a>
      <h1 className="mb-1 mt-3 text-2xl font-bold tracking-tight">Delete your account</h1>
      <p className="mb-8 text-xs text-muted">Recall · account &amp; data deletion</p>

      <div className="space-y-5 text-sm leading-relaxed text-muted">
        <p>
          You can permanently delete your Recall account and all data associated with it. There are
          two ways to do it.
        </p>

        <section>
          <h2 className="mb-2 font-semibold text-ink">Option 1 — in the app (instant)</h2>
          <ol className="ml-4 list-decimal space-y-1.5">
            <li>Open Recall and go to the <strong>Settings</strong> tab.</li>
            <li>Tap <strong>Account</strong> (or the sign-in row).</li>
            <li>
              Tap <strong>&ldquo;Delete account &amp; cloud data&rdquo;</strong> and type{" "}
              <strong>DELETE</strong> to confirm.
            </li>
          </ol>
          <p className="mt-2">
            This happens immediately and cannot be undone. You must be signed in to use this option.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold text-ink">Option 2 — by email</h2>
          <p>
            Email{" "}
            <a className="text-correct-bright underline" href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20Recall%20account`}>
              {SUPPORT_EMAIL}
            </a>{" "}
            from the email address on your account with the subject &ldquo;Delete my account&rdquo;.
            We&apos;ll delete it within 30 days and confirm when it&apos;s done.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold text-ink">What gets deleted</h2>
          <p>Deleting your account permanently removes, from our servers:</p>
          <ul className="ml-4 mt-1.5 list-disc space-y-1">
            <li>your sign-in identity (email / authentication record);</li>
            <li>your synced spaced-repetition progress and read history;</li>
            <li>your leaderboard entries (overall and per-exam) and stats.</li>
          </ul>
          <p className="mt-2">
            Progress saved only on your device (if you used Recall without an account, or want a
            clean slate) is cleared separately with <strong>Reset all progress</strong> in Settings,
            or by uninstalling the app.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold text-ink">What we keep</h2>
          <p>
            We retain nothing tied to your identity after deletion. Anonymous, non-identifying
            records (e.g. a support message you sent) are disassociated from your account.
          </p>
        </section>
      </div>

      <LegalFooter />
    </main>
  );
}
