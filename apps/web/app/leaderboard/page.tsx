"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { levelForXp, rankName } from "@jyotir/core";
import { repo } from "@/lib/content";
import { getSupabase } from "@/lib/supabase";
import { fetchLeaderboard, fetchMyRank, type LeaderboardRow } from "@/lib/leaderboard";
import { loadSettings } from "@/lib/settings";
import { useJyotir } from "@/lib/store-provider";
import { UsersIcon } from "@/components/icons";

export default function LeaderboardPage() {
  const supabase = getSupabase();
  const localXp = useJyotir((s) => s.stats.xp);
  const exams = useMemo(() => repo.exams(), []);
  const [scope, setScope] = useState<string>(""); // "" = overall, else examId
  const [rows, setRows] = useState<LeaderboardRow[] | null>(null);
  const [me, setMe] = useState<LeaderboardRow | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [signedIn, setSignedIn] = useState(false);
  // Loaded in an effect, never at render: reading localStorage during render
  // bakes SSR/client differences into the HTML (React #418), and loadSettings
  // can even WRITE storage on first read — a side effect renders must not have.
  const [myHandle, setMyHandle] = useState("");

  useEffect(() => setMyHandle(loadSettings().handle), []);

  useEffect(() => {
    if (!supabase) return;
    void supabase.auth.getSession().then(({ data }) => setSignedIn(Boolean(data.session)));
  }, [supabase]);

  // Distinct, compact chip label: "CFA I", "FRM II", else first word ("UPSC").
  const chipLabel = (e: (typeof exams)[number]) => {
    if (e.levelLabel) {
      const fam = (e.familyName ?? e.name).split(" ")[0];
      return `${fam} ${e.levelLabel.replace(/^(Level|Part)\s+/, "")}`;
    }
    return e.name.split(" ")[0];
  };

  useEffect(() => {
    if (!supabase) return;
    let on = true;
    setRows(null);
    setError(null);
    (async () => {
      try {
        const examId = scope || undefined;
        const [board, rank] = await Promise.all([
          fetchLeaderboard(supabase, examId, 100),
          fetchMyRank(supabase, examId).catch(() => null)
        ]);
        if (on) {
          setRows(board);
          setMe(rank);
        }
      } catch (e) {
        if (on) setError((e as Error).message);
      }
    })();
    return () => {
      on = false;
    };
  }, [supabase, scope]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-12">
      <header className="mb-4">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-correct" />
          <h1 className="text-2xl font-bold tracking-tight">Ranks</h1>
        </div>
        <p className="mt-1 text-xs text-muted">
          Anonymized by XP. You are <span className="text-correct">{myHandle}</span>.
        </p>
      </header>

      {/* Scope selector: Overall + per exam. The right-edge fade signals that
          the chip row scrolls horizontally beyond the viewport. */}
      <div className="relative -mx-5 mb-5">
        <div className="flex gap-2 overflow-x-auto px-5 pb-1">
          <button
            onClick={() => setScope("")}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              scope === "" ? "border-correct bg-correct-dim/40 text-correct-bright" : "border-edge text-muted"
            }`}
          >
            Overall
          </button>
          {exams.map((e) => (
            <button
              key={e.id}
              onClick={() => setScope(e.id)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                scope === e.id ? "border-correct bg-correct-dim/40 text-correct-bright" : "border-edge text-muted"
              }`}
            >
              {chipLabel(e)}
            </button>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 flex w-14 items-center justify-end bg-gradient-to-l from-oled via-oled/80 to-transparent pb-1 pr-0.5"
        >
          <span className="text-lg leading-none text-muted">›</span>
        </div>
      </div>

      {!supabase ? (
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6 text-sm text-muted">
          Sign in (Account) with cloud sync configured to join the leaderboards. Your local XP is{" "}
          <span className="font-semibold text-ink">{localXp}</span>.
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-wrong/40 bg-wrong-dim/30 px-5 py-4 text-sm text-wrong-bright">
          {error}
        </div>
      ) : rows === null ? (
        <div className="h-40 animate-pulse rounded-2xl border border-edge bg-surface" />
      ) : rows.length === 0 ? (
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6 text-sm text-muted">
          {scope ? (
            "No one has drilled this exam yet — claim the top spot."
          ) : signedIn ? (
            <>
              No ranks yet. You&apos;re signed in with{" "}
              <span className="font-semibold text-ink">{localXp} XP</span> — it appears here once it
              syncs after your next drill. If this persists, check Settings → Status.
            </>
          ) : (
            "No players yet. Drill and sign in to lead."
          )}
        </div>
      ) : (
        <>
          {me && (
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-correct/40 bg-correct-dim/30 px-4 py-3">
              <span className="text-sm font-semibold text-correct-bright">
                You are #{me.rank} · {me.handle}
              </span>
              <span className="text-sm font-bold tabular-nums text-correct">{me.xp} XP</span>
            </div>
          )}
          <ol className="flex flex-col gap-1.5">
            {rows.map((r) => {
              const isMe = r.handle === myHandle;
              return (
                <li
                  key={r.rank}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${
                    isMe ? "border-correct/50 bg-correct-dim/20" : "border-edge bg-surface"
                  }`}
                >
                  <span className={`w-7 text-sm font-bold tabular-nums ${r.rank <= 3 ? "text-correct" : "text-faint"}`}>
                    {r.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{isMe ? "You" : r.handle}</div>
                    <div className="text-[11px] text-faint">{rankName(levelForXp(r.xp))}</div>
                  </div>
                  <span className="text-sm font-bold tabular-nums">{r.xp}</span>
                </li>
              );
            })}
          </ol>
        </>
      )}

      <Link href="/" className="mt-8 text-center text-xs text-muted hover:text-ink">
        ← Home
      </Link>
    </main>
  );
}
