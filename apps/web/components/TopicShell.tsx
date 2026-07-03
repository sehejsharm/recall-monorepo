"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Topic } from "@jyotir/core";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";
import { DrillEngine } from "./DrillEngine";
import { StudyReader } from "./StudyReader";

/**
 * Topic view as a swipeable deck: each card is one topic in the subject, and
 * the user swipes/drags (or uses prev/next) to move between them — card-style.
 * Drilling is never mandatory (a card can be read and skipped). Only the active
 * card mounts the drill engine, keeping the single in-memory drill session safe.
 */
export function TopicShell({
  examSlug,
  subjectSlug,
  subjectName,
  topicId
}: {
  examSlug: string;
  subjectSlug: string;
  subjectName: string;
  topicId: string;
  topicName: string;
}) {
  const router = useRouter();
  const exam = repo.examBySlug(examSlug);
  const subject = exam ? repo.subjectBySlug(exam.id, subjectSlug) : undefined;
  const topics = subject ? repo.topicsBySubject(subject.id) : [];
  const startIndex = Math.max(
    0,
    topics.findIndex((t) => t.id === topicId)
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(startIndex);
  const examHomeHref = `/${examSlug}/${subjectSlug}`;

  const goToIndex = useCallback(
    (idx: number) => {
      const el = scrollerRef.current;
      if (!el || idx < 0 || idx >= topics.length) return;
      el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
      setActive(idx);
    },
    [topics.length]
  );

  // Jump to the requested topic on first mount (no animation).
  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollLeft = startIndex * el.clientWidth;
  }, [startIndex]);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== active) setActive(idx);
  };

  if (!exam || !subject || topics.length === 0) return null;
  const current = topics[active] ?? topics[startIndex]!;

  return (
    // 100dvh minus the fixed bottom nav's clearance (pb-16 in the root layout),
    // so the end of a card — e.g. the "Drill this topic" CTA — is never
    // rendered underneath the nav bar.
    <div className="mx-auto flex h-[calc(100dvh-4rem)] w-full max-w-xl flex-col px-5 pb-2 pt-10">
      <header className="mb-4">
        <Link href={examHomeHref} className="text-xs text-muted hover:text-ink">
          ← {subjectName}
        </Link>
        <div className="mt-2 flex items-center justify-between gap-3">
          <h1 className="min-w-0 flex-1 truncate text-xl font-bold tracking-tight">{current.name}</h1>
          <span className="shrink-0 text-xs font-medium text-faint">
            {active + 1} / {topics.length}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-3">
          <button
            onClick={() => goToIndex(active - 1)}
            disabled={active === 0}
            className="text-xs text-muted hover:text-ink disabled:opacity-30"
          >
            ← prev
          </button>
          <span className="text-[11px] text-faint">swipe / drag to change topic</span>
          <button
            onClick={() => goToIndex(active + 1)}
            disabled={active >= topics.length - 1}
            className="text-xs text-muted hover:text-ink disabled:opacity-30"
          >
            next →
          </button>
        </div>
      </header>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {topics.map((t, index) => {
          // Only render heavy content for the active card and its neighbours.
          const nearby = Math.abs(index - active) <= 1;
          return (
            <section
              key={t.id}
              // Off-screen cards are inert + aria-hidden: only the active
              // card's tab set is focusable/exposed, so the DOM never carries
              // a duplicate, interactive copy of the Drill/Study tabs.
              inert={index !== active}
              aria-hidden={index !== active}
              className="flex h-full w-full shrink-0 snap-start flex-col overflow-y-auto pr-0.5"
            >
              {nearby ? (
                <TopicCard
                  topic={t}
                  isActive={index === active}
                  hasNext={index + 1 < topics.length}
                  onNextTopic={() => goToIndex(index + 1)}
                  onExamHome={() => router.push(examHomeHref)}
                />
              ) : (
                <div className="flex flex-1 items-center justify-center text-sm text-faint">{t.name}</div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

type Tab = "drill" | "study";

/** One swipeable topic card: study notes ⇄ drill, scoped to a single topic. */
function TopicCard({
  topic,
  isActive,
  hasNext,
  onNextTopic,
  onExamHome
}: {
  topic: Topic;
  isActive: boolean;
  hasNext: boolean;
  onNextTopic: () => void;
  onExamHome: () => void;
}) {
  const material = repo.materialByTopic(topic.id);
  const exitDrill = useJyotir((s) => s.exitDrill);
  const [tab, setTab] = useState<Tab>(material ? "study" : "drill");

  // When this card scrolls out of focus, drop any drill in progress and reset.
  useEffect(() => {
    if (!isActive) {
      exitDrill();
      setTab(material ? "study" : "drill");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const switchTab = (next: Tab) => {
    if (next === tab) return;
    if (next === "study") exitDrill();
    setTab(next);
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-4 flex items-center gap-2">
        <div
          role="tablist"
          aria-label="Topic mode"
          className="grid flex-1 grid-cols-2 rounded-xl border border-edge bg-surface p-1"
        >
          <button
            role="tab"
            aria-selected={tab === "drill"}
            onClick={() => switchTab("drill")}
            className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
              tab === "drill" ? "bg-raised text-ink" : "text-muted hover:text-ink"
            }`}
          >
            Drill Engine
          </button>
          <button
            role="tab"
            aria-selected={tab === "study"}
            onClick={() => switchTab("study")}
            disabled={!material}
            className={`rounded-lg py-2 text-sm font-semibold transition-colors disabled:opacity-30 ${
              tab === "study" ? "bg-raised text-ink" : "text-muted hover:text-ink"
            }`}
          >
            Study Material
          </button>
        </div>
        {hasNext && (
          <button
            onClick={onNextTopic}
            className="shrink-0 rounded-lg border border-edge px-3 py-2 text-xs font-semibold text-muted hover:text-ink"
          >
            Skip →
          </button>
        )}
      </div>

      {/* Only the active card runs a drill (protects the single drill session). */}
      {tab === "drill" && isActive ? (
        <DrillEngine
          topicId={topic.id}
          onStudy={material ? () => switchTab("study") : undefined}
          onNextTopic={hasNext ? onNextTopic : undefined}
          onExamHome={onExamHome}
        />
      ) : material ? (
        <StudyReader material={material} onDrill={() => switchTab("drill")} />
      ) : (
        <div className="flex flex-1 items-center justify-center text-sm text-muted">
          Swipe back to drill this topic.
        </div>
      )}
    </div>
  );
}
