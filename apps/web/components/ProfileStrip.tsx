"use client";

import Link from "next/link";
import { isStreakActive, levelProgress } from "@jyotir/core";
import { useJyotir } from "@/lib/store-provider";
import { FlameIcon } from "./icons";

/**
 * Home-screen identity row: level, rank, XP progress and daily streak.
 * Tapping it opens the full stats screen. Selects the stable `stats`
 * reference (never a fresh object) to stay loop-safe.
 */
export function ProfileStrip() {
  const ready = useJyotir((s) => s.ready);
  const stats = useJyotir((s) => s.stats);

  if (!ready) {
    return <div className="mb-4 h-[58px] rounded-2xl border border-edge bg-surface" aria-busy="true" />;
  }

  const lp = levelProgress(stats.xp);
  const streakAlive = isStreakActive(stats);

  return (
    <Link
      href="/stats"
      className="mb-4 flex items-center gap-4 rounded-2xl border border-edge bg-surface px-4 py-3 transition-colors hover:border-correct/40"
    >
      <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-raised">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-faint">Lvl</span>
        <span className="-mt-0.5 text-lg font-bold leading-none tabular-nums">{lp.level}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between">
          <span className="truncate text-sm font-semibold">{lp.rank}</span>
          <span
            className="ml-2 shrink-0 text-[11px] tabular-nums text-faint"
            title={`XP within level ${lp.level} — see Stats for your lifetime total`}
          >
            {lp.into} / {lp.span} XP this level
          </span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-raised">
          <div className="h-full rounded-full bg-correct" style={{ width: `${lp.pct}%` }} />
        </div>
      </div>

      <div
        className={`flex shrink-0 items-center gap-1 ${streakAlive ? "text-correct" : "text-faint"}`}
        title={`Longest streak: ${stats.longestStreak} days`}
      >
        <FlameIcon className="h-4 w-4" />
        <span className="text-sm font-bold tabular-nums">{stats.currentStreak}</span>
      </div>
    </Link>
  );
}
