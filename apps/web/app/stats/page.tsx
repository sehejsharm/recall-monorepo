"use client";

import { useState } from "react";
import { ACHIEVEMENTS, isStreakActive, levelProgress, RANKS, shareCard } from "@jyotir/core";
import { useJyotir } from "@/lib/store-provider";
import { FlameIcon, TrophyIcon } from "@/components/icons";

function Stat({
  label,
  value,
  accent,
  hint
}: {
  label: string;
  value: string | number;
  accent?: boolean;
  /** One-line definition so a "0" is never a mystery (shown under the label). */
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-edge bg-surface px-4 py-3" title={hint}>
      {/* Word values ("Resting", "On track") are far wider than a 2–3 digit
          number and overflowed this tile at 360px. Numbers keep the large
          tabular treatment; text steps down a size and wraps instead. */}
      <div
        className={`font-bold ${accent ? "text-correct" : ""} ${
          typeof value === "number"
            ? "text-2xl tabular-nums"
            : "text-lg leading-tight break-words"
        }`}
      >
        {value}
      </div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-faint">{label}</div>
      {hint && <div className="mt-0.5 text-[10px] leading-tight text-faint">{hint}</div>}
    </div>
  );
}

export default function StatsPage() {
  const ready = useJyotir((s) => s.ready);
  const stats = useJyotir((s) => s.stats);
  const mastered = useJyotir((s) => (s.ready ? s.masteredCount() : 0));
  const [shared, setShared] = useState(false);

  const lp = levelProgress(stats.xp);
  const unlocked = new Set(stats.achievements);
  // Levels are unbounded (50·(L-1)²) but RANKS stops at Legend, so past the
  // cap `RANKS[level]` clamps back to the rank you already hold — the label
  // then read "180 XP to Legend" to someone the same screen called a Legend.
  // Beyond the cap, count toward the next level number instead.
  const atMaxRank = lp.level >= RANKS.length;
  const nextRank = atMaxRank ? `level ${lp.level + 1}` : RANKS[lp.level];

  const onShare = async () => {
    const text = shareCard(stats, { url: typeof window !== "undefined" ? window.location.origin : undefined });
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ text });
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setShared(true);
        setTimeout(() => setShared(false), 1800);
      }
    } catch {
      /* user dismissed the share sheet — no-op */
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 py-12">
      {/* No breadcrumb: Stats is a bottom-nav destination (like Settings), so
          a "← Home" link here was misleading when arriving via the tab bar. */}
      <header className="mb-8 flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold tracking-tight">Your Progress</h1>
        {ready && stats.cardsGraded > 0 && (
          <button
            onClick={onShare}
            className="shrink-0 rounded-full border border-edge bg-surface px-3.5 py-2 text-xs font-semibold text-correct transition-colors hover:border-correct/40"
          >
            {shared ? "Copied ✓" : "Share"}
          </button>
        )}
      </header>

      {!ready ? (
        <div className="h-40 rounded-2xl border border-edge bg-surface" aria-busy="true" />
      ) : (
        <>
          {/* Level + XP hero */}
          <section className="mb-4 rounded-2xl border border-edge bg-surface p-5">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-faint">Level {lp.level}</div>
                <div className="text-3xl font-bold">{lp.rank}</div>
              </div>
              <div className="flex items-center gap-1.5 text-correct">
                <FlameIcon className="h-5 w-5" />
                <span className="text-xl font-bold tabular-nums">{stats.currentStreak}</span>
                <span className="text-xs text-muted">day{stats.currentStreak === 1 ? "" : "s"}</span>
              </div>
            </div>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={lp.span}
              aria-valuenow={lp.into}
              aria-label={`Level ${lp.level} progress: ${lp.into} of ${lp.span} XP`}
              className="mt-4 h-2 w-full overflow-hidden rounded-full bg-raised"
            >
              <div className="h-full rounded-full bg-correct" style={{ width: `${lp.pct}%` }} />
            </div>
            <div className="mt-1.5 flex justify-between text-[11px] tabular-nums text-faint">
              <span title="Lifetime XP across all levels">{stats.xp} XP earned in total</span>
              <span>
                {lp.toNext} XP to {nextRank}
              </span>
            </div>
          </section>

          <section className="mb-6 grid grid-cols-3 gap-2.5">
            <Stat label="Cards drilled" value={stats.cardsGraded} />
            <Stat label="Mastered" value={mastered} accent hint="3+ correct recalls of a card" />
            <Stat label="Best combo" value={stats.bestCombo} />
            <Stat label="Current streak" value={stats.currentStreak} />
            <Stat label="Longest streak" value={stats.longestStreak} />
            <Stat
              label="Streak status"
              value={isStreakActive(stats) ? "Alive" : "Resting"}
            />
          </section>

          <section>
            <div className="mb-3 flex items-center gap-2">
              <TrophyIcon className="h-4 w-4 text-muted" />
              <h2 className="text-sm font-semibold">
                Achievements
                <span className="ml-1.5 text-faint">
                  {unlocked.size}/{ACHIEVEMENTS.length}
                </span>
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {ACHIEVEMENTS.map((a) => {
                const got = unlocked.has(a.id);
                return (
                  <li
                    key={a.id}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                      // No opacity on the locked state: it dropped the row's
                      // text below the 4.5:1 AA floor. Locked vs unlocked is
                      // already carried by border + text colour.
                      got ? "border-correct/40 bg-correct-dim/30" : "border-edge bg-surface"
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-semibold ${got ? "text-correct-bright" : "text-muted"}`}>
                        {a.name}
                      </div>
                      <div className="text-xs text-faint">{a.description}</div>
                    </div>
                    <span className={`text-xs font-bold ${got ? "text-correct" : "text-faint"}`}>
                      {got ? "Unlocked" : "Locked"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
