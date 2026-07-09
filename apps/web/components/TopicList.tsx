"use client";

import Link from "next/link";
import { repo } from "@/lib/content";
import { readMinutes } from "@/lib/read-time";
import { useJyotir } from "@/lib/store-provider";
import { topicCounts } from "@jyotir/core";

export function TopicList({
  examSlug,
  examName,
  subjectId,
  subjectName,
  subjectSlug
}: {
  examSlug: string;
  examName: string;
  subjectId: string;
  subjectName: string;
  subjectSlug: string;
}) {
  const topics = repo.topicsBySubject(subjectId);
  const progress = useJyotir((s) => s.progress);
  const reads = useJyotir((s) => s.reads);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 py-14">
      <header className="mb-6">
        <Link href={`/${examSlug}`} className="text-xs text-muted hover:text-ink">
          ← {examName}
        </Link>
        <h1 className="mt-3 text-2xl font-bold tracking-tight">{subjectName}</h1>
        {/* Legend: what the badge colours mean (count = cards waiting for you). */}
        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-faint">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="h-2 w-2 rounded-full bg-correct" /> due for review
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="h-2 w-2 rounded-full bg-raised" /> new cards
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="text-correct">✓</span> all caught up
          </span>
        </p>
      </header>

      <ul className="flex flex-col gap-2.5">
        {topics.map((topic) => {
          const counts = topicCounts(repo.questionsByTopic(topic.id), progress);
          const material = repo.materialByTopic(topic.id);
          const isRead = material ? Boolean(reads[material.id]) : false;
          const pending = counts.due + counts.fresh;

          return (
            <li key={topic.id}>
              <Link
                href={`/${examSlug}/${subjectSlug}/${topic.slug}`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-edge bg-surface px-5 py-4 transition-colors hover:border-correct/40 active:bg-raised"
              >
                <div className="min-w-0">
                  <span className="block truncate font-semibold">{topic.name}</span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {material ? `${readMinutes(material)} min read` : "drill only"}
                    {isRead && <span className="text-correct"> · read ✓</span>}
                  </span>
                </div>
                {pending > 0 ? (
                  <span
                    title={`${counts.due} due for review · ${counts.fresh} new`}
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold tabular-nums ${
                      counts.due > 0 ? "bg-correct text-black" : "bg-raised text-muted"
                    }`}
                  >
                    {pending}
                  </span>
                ) : (
                  <span className="shrink-0 text-xs font-semibold text-correct">✓ clear</span>
                )}
                <span aria-hidden className="shrink-0 text-lg leading-none text-muted">
                  ›
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
