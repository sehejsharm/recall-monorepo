"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { REVIEW_QUEUE_LIMIT, REVIEW_SCOPE } from "@jyotir/core";
import { DrillEngine } from "@/components/DrillEngine";
import { useJyotir } from "@/lib/store-provider";
import { ErrorTrigger } from "@/components/ErrorTrigger";

/**
 * The daily review: one due-only queue spanning every exam. The
 * frictionless entry point — open the app, clear what's due, leave.
 */
export default function ReviewPage() {
  const router = useRouter();
  // The subtitle must promise exactly what the session serves: all due
  // cards, unless the backlog exceeds the safety cap — then say so.
  const due = useJyotir((s) => (s.ready ? s.dueTotal() : 0));
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-6 pt-10">
      <ErrorTrigger route="/review" />
      <header className="mb-6">
        <Link href="/" className="text-xs text-muted hover:text-ink">
          ← Home
        </Link>
        <h1 className="mt-2 text-xl font-bold tracking-tight">Daily Review</h1>
        <p className="mt-0.5 text-xs text-muted">
          {due > REVIEW_QUEUE_LIMIT
            ? `The ${REVIEW_QUEUE_LIMIT} most overdue of your ${due} due cards.`
            : "Everything due, across all your exams."}
        </p>
      </header>

      <DrillEngine topicId={REVIEW_SCOPE} reviewMode onExit={() => router.push("/")} />
    </div>
  );
}
