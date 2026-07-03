"use client";

import { ACHIEVEMENTS, isStreakActive, levelProgress, RANKS } from "@jyotir/core";
import { useJyotir } from "@/lib/store-provider";
import { FlameIcon, TrophyIcon } from "@/components/icons";

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-edge bg-surface px-4 py-3">
      <div className={`text-2xl font-bold tabular-nums ${accent ? "text-correct" : ""}`}>{value}</div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-faint">{label}</div>
    </div>
  );
}

export default function StatsPage() {
  const ready = useJyotir((s) => s.ready);
  const stats = useJyotir((s) => s.stats);
  const mastered = useJyotir((s) => (s.ready ? s.masteredCount() : 0));

  const lp = levelProgress(stats.xp);
  const unlocked = new Set(stats.achievements);
  const nextRank = RANKS[Math.min(lp.level, RANKS.length - 1)];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 py-12">
      {/* No breadcrumb: Stats is a bottom-nav destination (like Settings), so
          a "← Home" link here was misleading when arriving via the tab bar. */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Your Progress</h1>
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
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-raised">
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
            <Stat label="Mastered" value={mastered} accent />
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
                      got ? "border-correct/40 bg-correct-dim/30" : "border-edge bg-surface opacity-60"
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
