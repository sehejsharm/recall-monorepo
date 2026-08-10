import type { SupabaseClient } from "@supabase/supabase-js";
import { levelForXp, type GamificationState } from "@jyotir/core";
import { loadSettings } from "./settings";

export interface LeaderboardRow {
  rank: number;
  handle: string;
  xp: number;
  level?: number;
}

/** Returns true if stats were actually uploaded (false if opted out), so
 *  callers only cache the pushed signature on a real push. */
export async function pushStats(
  supabase: SupabaseClient,
  userId: string,
  stats: GamificationState
): Promise<boolean> {
  const s = loadSettings();
  if (!s.leaderboardOptIn) return false;
  const now = new Date().toISOString();

  // The display name is deliberately NOT uploaded — see the note in
  // apps/web/lib/leaderboard.ts. Onboarding promises it stays on-device,
  // and nothing ever reads user_stats.display_name back.
  const { error } = await supabase.from("user_stats").upsert(
    {
      user_id: userId,
      handle: s.handle,
      xp: stats.xp,
      level: levelForXp(stats.xp),
      current_streak: stats.currentStreak,
      longest_streak: stats.longestStreak,
      cards_graded: stats.cardsGraded,
      updated_at: now
    },
    { onConflict: "user_id" }
  );
  if (error) throw new Error(`leaderboard push: ${error.message}`);

  const examRows = Object.entries(stats.examXp ?? {})
    .filter(([, xp]) => xp > 0)
    .map(([exam_id, xp]) => ({ user_id: userId, exam_id, handle: s.handle, xp, updated_at: now }));
  if (examRows.length > 0) {
    const { error: err2 } = await supabase
      .from("user_exam_stats")
      .upsert(examRows, { onConflict: "user_id,exam_id" });
    if (err2) throw new Error(`exam leaderboard push: ${err2.message}`);
  }
  return true;
}

export async function fetchLeaderboard(
  supabase: SupabaseClient,
  examId?: string,
  n = 100
): Promise<LeaderboardRow[]> {
  const { data, error } = examId
    ? await supabase.rpc("leaderboard_by_exam", { exam: examId, n })
    : await supabase.rpc("leaderboard", { n });
  if (error) throw new Error(error.message);
  return (data ?? []) as LeaderboardRow[];
}

export async function fetchMyRank(
  supabase: SupabaseClient,
  examId?: string
): Promise<LeaderboardRow | null> {
  const { data, error } = examId
    ? await supabase.rpc("my_exam_rank", { exam: examId })
    : await supabase.rpc("my_rank");
  if (error) throw new Error(error.message);
  return ((data ?? []) as LeaderboardRow[])[0] ?? null;
}
