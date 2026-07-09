"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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
  // Neighbour cards render full content only once the deck is scrolled to
  // the requested topic. Before that (SSR HTML, pre-hydration, the frame
  // before positioning) the only real content on screen is the requested
  // topic's own card — a different topic's study note can never flash.
  const [positioned, setPositioned] = useState(false);
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

  // Jump to the requested topic BEFORE first paint (no animation). If the
  // layout hasn't settled yet (clientWidth 0, e.g. behind the launch
  // splash), retry on the next frame instead of silently landing on the
  // wrong card.
  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const place = () => {
      if (el.clientWidth === 0) {
        raf = requestAnimationFrame(place);
        return;
      }
      el.scrollLeft = startIndex * el.clientWidth;
      setPositioned(true);
    };
    place();
    return () => cancelAnimationFrame(raf);
  }, [startIndex]);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== active) setActive(idx);
  };

  if (!exam || !subject || topics.length === 0) return null;
  const current = topics[active] ?? topics[startIndex]!;

  return (
    // 100dvh minus the fixed bottom nav's clearance (nav height + notch-phone
    // safe area, matching the root layout), so the end of a card — e.g. the
    // "Drill this topic" CTA — is never rendered underneath the nav bar.
    <div className="mx-auto flex h-[calc(100dvh-4rem-env(safe-area-inset-bottom))] w-full max-w-xl flex-col px-5 pb-2 pt-10">
      <header className="mb-2">
        {/* min-h keeps every header control at a ≥44px thumb target without
            growing the visual text size (negative margins absorb the box). */}
        <Link
          href={examHomeHref}
          className="-my-2 inline-flex min-h-[44px] items-center text-xs text-muted hover:text-ink"
        >
          ← {subjectName}
        </Link>
        <div className="mt-1 flex items-start justify-between gap-3">
          {/* Wrap to two lines before ellipsizing; title= exposes the full
              name on hover/long-press for the rare 3-line monster. */}
          <h1
            title={current.name}
            className="line-clamp-2 min-w-0 flex-1 text-xl font-bold leading-snug tracking-tight"
          >
            {current.name}
          </h1>
          <span className="shrink-0 pt-1 text-xs font-medium text-muted">
            {active + 1} / {topics.length}
          </span>
        </div>
        <div className="-my-1 flex items-center justify-between gap-2">
          <button
            onClick={() => goToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous topic"
            className="-mx-2 flex min-h-[44px] min-w-[44px] items-center px-2 text-xs text-muted hover:text-ink disabled:pointer-events-none disabled:opacity-30"
          >
            ← prev
          </button>
          {/* Carousel dots: the visual cue that this deck swipes. */}
          <div className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-hidden" aria-hidden>
            {topics.map((t, i) => (
              <button
                key={t.id}
                tabIndex={-1}
                onClick={() => goToIndex(i)}
                className="shrink-0 py-2"
              >
                <span
                  className={`block rounded-full transition-all ${
                    i === active ? "h-1.5 w-4 bg-correct" : "h-1.5 w-1.5 bg-raised"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => goToIndex(active + 1)}
            disabled={active >= topics.length - 1}
            aria-label="Next topic"
            className="-mx-2 flex min-h-[44px] min-w-[44px] items-center px-2 text-xs text-muted hover:text-ink disabled:pointer-events-none disabled:opacity-30"
          >
            next →
          </button>
        </div>
        <p className="pb-1 text-center text-[11px] text-muted">swipe / drag to change topic</p>
      </header>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {topics.map((t, index) => {
          // Only render heavy content for the active card and its neighbours —
          // and neighbours only after the deck has scrolled into position.
          const nearby = positioned ? Math.abs(index - active) <= 1 : index === active;
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
                <div className="flex flex-1 items-center justify-center text-sm text-faint">
                  {positioned ? t.name : null}
                </div>
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

  // Belt-and-braces with `inert`: inert blocks real user interaction on
  // off-screen cards, but programmatic clicks (automation, some assistive
  // tech) still dispatch handlers — so every handler on a non-active card
  // must also be a no-op, or a click meant for the visible topic can mark
  // a NEIGHBOUR topic read / switch its tab.
  const switchTab = (next: Tab) => {
    if (!isActive) return;
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
            className={`min-h-[44px] rounded-lg py-2 text-sm font-semibold transition-colors ${
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
            className={`min-h-[44px] rounded-lg py-2 text-sm font-semibold transition-colors disabled:opacity-30 ${
              tab === "study" ? "bg-raised text-ink" : "text-muted hover:text-ink"
            }`}
          >
            Study Material
          </button>
        </div>
        {hasNext && (
          <button
            onClick={() => {
              if (isActive) onNextTopic();
            }}
            className="min-h-[44px] shrink-0 rounded-lg border border-edge px-3 text-xs font-semibold text-muted hover:text-ink"
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
        <StudyReader material={material} onDrill={() => switchTab("drill")} interactive={isActive} />
      ) : (
        <div className="flex flex-1 items-center justify-center text-sm text-muted">
          Swipe back to drill this topic.
        </div>
      )}
    </div>
  );
}
