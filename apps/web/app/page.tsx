import Link from "next/link";
import { groupExams } from "@jyotir/core";
import { repo } from "@/lib/content";
import { ExamCountdown } from "@/components/ExamCountdown";
import { ProfileStrip } from "@/components/ProfileStrip";
import { ReviewBanner } from "@/components/ReviewBanner";

export default function ExamPickerPage() {
  const groups = groupExams(repo.exams());
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-14">
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recall</h1>
          <p className="mt-1.5 text-sm text-muted">
            Drill. Read. Repeat. Nothing else.
          </p>
        </div>
        <Link
          href="/account"
          className="mt-1 rounded-full border border-edge px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
        >
          Account
        </Link>
      </header>

      <ProfileStrip />
      <ExamCountdown />
      <ReviewBanner />

      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">Exams</h2>
      <ul className="flex flex-col gap-2.5">
        {groups.map((group) =>
          group.levels.length === 1 ? (
            <li key={group.id}>
              <Link
                href={`/${group.levels[0]!.slug}`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-edge bg-surface px-5 py-4 transition-colors hover:border-correct/40 active:bg-raised"
              >
                <span className="min-w-0">
                  <span className="block text-lg font-semibold">{group.levels[0]!.name}</span>
                  <span className="mt-0.5 block text-xs text-muted">{group.levels[0]!.tagline}</span>
                </span>
                <span aria-hidden className="shrink-0 text-lg text-muted">
                  ›
                </span>
              </Link>
            </li>
          ) : (
            <li key={group.id} className="rounded-2xl border border-edge bg-surface px-5 py-4">
              <span className="text-lg font-semibold">{group.name}</span>
              <span className="mt-0.5 block text-xs text-muted">{group.tagline}</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.levels.map((level) => (
                  <Link
                    key={level.id}
                    href={`/${level.slug}`}
                    className="rounded-full border border-edge bg-raised px-3.5 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-correct/40 hover:text-ink"
                  >
                    {level.levelLabel ?? level.name}
                  </Link>
                ))}
              </div>
            </li>
          )
        )}
      </ul>
    </main>
  );
}
