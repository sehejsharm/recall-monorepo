"use client";

import { useEffect } from "react";
import {
  achievementById,
  OPTION_KEYS,
  optionText,
  scheduleExplanation,
  type AnsweredCard,
  type OptionKey
} from "@jyotir/core";
import { useJyotir } from "@/lib/store-provider";
import { BoltIcon, TrophyIcon } from "./icons";

/**
 * The drill loop — auto-graded multiple choice:
 *   1. question + 4 options — click one (or press A–D / 1–4)
 *   2. the app grades the pick (right/wrong is derived, never self-reported),
 *      revealing the correct answer + a one-line explanation
 *   3. "Next" (or Enter / →) renders the next card synchronously from the
 *      in-memory queue; the review screen lists every answer at the end.
 */
export function DrillEngine({
  topicId,
  onStudy,
  reviewMode = false,
  limit,
  onExit,
  onNextTopic,
  onExamHome
}: {
  topicId: string;
  onStudy?: () => void;
  /** Cross-exam review: due-only queue, no study tab. */
  reviewMode?: boolean;
  /** Cap the session length (e.g. the 5-card onboarding taste session). */
  limit?: number;
  /** Secondary action on the completion screen (e.g. back to home). */
  onExit?: () => void;
  /** Completion action: advance to the next topic card. */
  onNextTopic?: () => void;
  /** Completion action: return to the exam's topic list. */
  onExamHome?: () => void;
}) {
  const drill = useJyotir((s) => s.drill);
  const ready = useJyotir((s) => s.ready);
  const progress = useJyotir((s) => s.progress);
  const startDrill = useJyotir((s) => s.startDrill);
  const startReview = useJyotir((s) => s.startReview);
  const answer = useJyotir((s) => s.answer);
  const next = useJyotir((s) => s.next);
  const newlyUnlocked = useJyotir((s) => s.newlyUnlocked);
  const clearNewlyUnlocked = useJyotir((s) => s.clearNewlyUnlocked);

  const start = () => (reviewMode ? startReview() : startDrill(topicId, limit));

  // (Re)build the queue once local progress has hydrated.
  useEffect(() => {
    if (ready) (reviewMode ? startReview() : startDrill(topicId, limit));
  }, [ready, topicId, reviewMode, limit, startDrill, startReview]);

  // Keyboard: A–D or 1–4 answers the question; Enter/Space/→ advances.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const phase = drill.phase;
      if (phase === "question") {
        const letter = e.key.toUpperCase();
        const numIndex = "1234".indexOf(e.key);
        if ((OPTION_KEYS as readonly string[]).includes(letter)) {
          e.preventDefault();
          answer(letter as OptionKey);
        } else if (numIndex >= 0) {
          e.preventDefault();
          answer(OPTION_KEYS[numIndex]!);
        }
      } else if (phase === "answered" && (e.key === "Enter" || e.key === " " || e.key === "ArrowRight")) {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drill.phase, answer, next]);

  if (!ready || drill.topicId !== topicId) {
    return <div className="flex-1" aria-busy="true" />;
  }

  const card = drill.queue[drill.index];

  // ── Review screen ────────────────────────────────────────────────────────
  if (drill.phase === "complete" || !card) {
    const { knew, wrong } = drill.stats;
    const total = knew + wrong;
    const caughtUp = reviewMode && total === 0;
    const dismiss = (fn?: () => void) => () => {
      clearNewlyUnlocked();
      fn?.();
    };
    return (
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col items-center gap-4 text-center">
          {caughtUp ? (
            <div>
              <p className="text-base font-semibold text-correct">All caught up</p>
              <p className="mt-1 text-sm text-muted">No cards due across your exams. Come back later.</p>
            </div>
          ) : (
            <div>
              <p className="text-5xl font-bold tabular-nums">
                {total > 0 ? Math.round((knew / total) * 100) : 100}%
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="font-semibold text-correct">{knew} correct</span>
                {" · "}
                <span className="font-semibold text-wrong-bright">{wrong} wrong</span>
              </p>
              {drill.sessionXp > 0 && (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-correct-dim/50 px-3 py-1 text-sm font-bold text-correct-bright">
                  <BoltIcon className="h-3.5 w-3.5" />+{drill.sessionXp} XP
                </p>
              )}
            </div>
          )}

          {newlyUnlocked.length > 0 && (
            <div className="w-full max-w-md animate-pop-in rounded-2xl border border-correct/40 bg-correct-dim/30 p-3">
              <div className="mb-2 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-correct">
                <TrophyIcon className="h-3.5 w-3.5" /> Achievement unlocked
              </div>
              {newlyUnlocked.map((id) => {
                const a = achievementById(id);
                return a ? (
                  <div key={id} className="text-sm">
                    <span className="font-bold text-correct-bright">{a.name}</span>
                    <span className="text-muted"> — {a.description}</span>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>

        {drill.answers.length > 0 && (
          <>
            <h2 className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wider text-faint">Review</h2>
            <ul className="flex flex-col gap-2.5">
              {drill.answers.map((a, i) => (
                <ReviewRow key={`${a.question.id}-${i}`} answer={a} index={i} />
              ))}
            </ul>
          </>
        )}

        <div className="mt-6 flex flex-col gap-2.5">
          {onNextTopic && (
            <button
              onClick={dismiss(onNextTopic)}
              className="w-full rounded-xl bg-correct py-3.5 font-bold text-black transition-transform active:scale-[0.98]"
            >
              Next topic →
            </button>
          )}
          {!caughtUp && (
            <button
              onClick={dismiss(start)}
              className="w-full rounded-xl bg-ink py-3.5 font-bold text-black transition-transform active:scale-[0.98]"
            >
              {reviewMode ? "Review Again" : "Drill this topic again"}
            </button>
          )}
          {onStudy && (
            <button
              onClick={dismiss(onStudy)}
              className="w-full rounded-xl border border-edge py-3.5 font-semibold text-muted transition-colors hover:text-ink"
            >
              Back to the notes
            </button>
          )}
          {onExamHome && (
            <button
              onClick={dismiss(onExamHome)}
              className="w-full rounded-xl border border-edge py-3.5 font-semibold text-muted transition-colors hover:text-ink"
            >
              Back to exam home
            </button>
          )}
          {onExit && (
            <button
              onClick={dismiss(onExit)}
              className="w-full rounded-xl border border-edge py-3.5 font-semibold text-muted transition-colors hover:text-ink"
            >
              Done
            </button>
          )}
        </div>
      </div>
    );
  }

  const { question } = card;
  const answered = drill.phase === "answered";
  const selected = drill.selected;
  const progressPct = (drill.index / drill.queue.length) * 100;
  const isLast = drill.index + 1 >= drill.queue.length;

  return (
    <div className="relative flex flex-1 flex-col">
      {/* session progress: visible counter + bar + combo badge */}
      <div className="mb-6 flex items-center gap-3">
        <span className="shrink-0 text-xs font-semibold tabular-nums text-muted">
          Q {drill.index + 1} / {drill.queue.length}
        </span>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={drill.queue.length}
          aria-valuenow={drill.index}
          aria-label={`Question ${drill.index + 1} of ${drill.queue.length}`}
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-raised"
        >
          <div
            className="h-full rounded-full bg-correct transition-[width] duration-200"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        {drill.combo >= 2 && (
          <span
            key={drill.combo}
            className="animate-combo inline-flex items-center gap-1 rounded-full bg-correct-dim/60 px-2 py-0.5 text-[11px] font-bold text-correct-bright"
          >
            <BoltIcon className="h-3 w-3" />
            {drill.combo}x
          </span>
        )}
      </div>

      {/* floating XP award on grade */}
      {drill.lastXpAward > 0 && answered && (
        <span
          key={drill.index}
          className={`animate-xp-float pointer-events-none absolute right-0 top-4 text-sm font-bold ${
            drill.selected === question.correctOption ? "text-correct-bright" : "text-muted"
          }`}
        >
          +{drill.lastXpAward}
        </span>
      )}

      <div className="flex flex-1 flex-col">
        <p className="whitespace-pre-line text-lg font-semibold leading-relaxed">{question.text}</p>

        <ul className="mt-6 flex flex-col gap-2.5">
          {OPTION_KEYS.map((key) => {
            const isCorrect = answered && key === question.correctOption;
            const isWrongPick = answered && key === selected && key !== question.correctOption;
            const dimmed = answered && !isCorrect && !isWrongPick;
            return (
              <li key={key}>
                <button
                  disabled={answered}
                  onClick={() => {
                    // Light haptic pulse on grade (feature-gated; no-op on desktop).
                    try {
                      navigator.vibrate?.(key === question.correctOption ? 30 : [80, 40, 80]);
                    } catch {
                      /* unsupported */
                    }
                    answer(key);
                  }}
                  className={`flex w-full items-baseline gap-3 rounded-xl border px-4 py-3 text-left text-[15px] transition-all duration-150 active:scale-[0.97] ${
                    isCorrect
                      ? "border-correct bg-correct-dim/60 font-semibold text-correct-bright"
                      : isWrongPick
                        ? "border-wrong bg-wrong-dim/50 font-semibold text-wrong-bright"
                        : dimmed
                          ? "border-edge/50 text-faint"
                          : "border-edge bg-surface hover:border-correct/40"
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${
                      isCorrect ? "text-correct" : isWrongPick ? "text-wrong-bright" : "text-faint"
                    }`}
                  >
                    {key}
                  </span>
                  <span className="flex-1">{optionText(question, key)}</span>
                  {isCorrect && <span aria-hidden>✓</span>}
                  {isWrongPick && <span aria-hidden>✕</span>}
                </button>
              </li>
            );
          })}
        </ul>

        {answered ? (
          <div className="mt-5 flex flex-col gap-2.5">
            {/* When the user picked a wrong option and that option has an
                authored rationale, lead with WHY their pick is wrong — the
                highest-value feedback moment — then the correct answer's
                explanation. */}
            {selected &&
              selected !== question.correctOption &&
              question.distractors?.[selected] && (
                <p className="border-l-2 border-wrong pl-3 text-sm leading-relaxed text-wrong-bright">
                  Why not {selected}: {question.distractors[selected]}
                </p>
              )}
            <p className="border-l-2 border-correct pl-3 text-sm leading-relaxed text-muted">
              {question.explanation}
            </p>
            {/* Scheduling transparency: why this card comes back when it does. */}
            {progress[question.id] && (
              <p className="pl-3 text-xs text-faint">
                {scheduleExplanation(progress[question.id]!, selected === question.correctOption)}
              </p>
            )}
          </div>
        ) : (
          <p className="mt-6 text-center text-xs text-faint">
            tap the answer you think is correct (or press A–D)
          </p>
        )}
      </div>

      {answered && (
        <button
          onClick={() => next()}
          className="mt-8 w-full rounded-xl bg-ink py-4 font-bold text-black transition-transform active:scale-[0.98]"
        >
          {isLast ? "See results" : "Next question"}
        </button>
      )}

      <p className="mt-3 text-center text-[11px] tabular-nums text-faint">
        {drill.index + 1} / {drill.queue.length}
        {card.reason === "new" && " · new card"}
        {card.reason === "early" && " · ahead of schedule"}
      </p>
    </div>
  );
}

/** One row on the review screen. */
function ReviewRow({ answer, index }: { answer: AnsweredCard; index: number }) {
  const { question, selected, correct, wasCorrect } = answer;
  const label = (key: OptionKey) => `${key}. ${optionText(question, key)}`;
  return (
    <li
      className={`rounded-2xl border px-4 py-3 ${
        wasCorrect ? "border-correct/40 bg-correct-dim/15" : "border-wrong/40 bg-wrong-dim/15"
      }`}
    >
      <div className="flex items-start gap-2">
        <span aria-hidden className={wasCorrect ? "text-correct" : "text-wrong-bright"}>
          {wasCorrect ? "✓" : "✕"}
        </span>
        <p className="flex-1 text-sm font-semibold leading-snug">
          {index + 1}. {question.text}
        </p>
      </div>
      <div className="mt-2 pl-6">
        <p className={`text-xs ${wasCorrect ? "text-correct-bright" : "text-wrong-bright"}`}>
          Your answer: {label(selected)}
        </p>
        {!wasCorrect && <p className="mt-0.5 text-xs text-correct-bright">Correct: {label(correct)}</p>}
        {!wasCorrect && question.distractors?.[selected] && (
          <p className="mt-1 text-[11px] leading-normal text-wrong-bright">
            Why not {selected}: {question.distractors[selected]}
          </p>
        )}
        <p className="mt-1.5 text-[11px] leading-normal text-muted">{question.explanation}</p>
      </div>
    </li>
  );
}
