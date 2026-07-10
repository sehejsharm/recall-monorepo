import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { repo } from "@/lib/content";
import { getSupabase } from "@/lib/supabase";
import { fetchLeaderboard, fetchMyRank, type LeaderboardRow } from "@/lib/leaderboard";

export default function LeaderboardScreen() {
  const supabase = getSupabase();
  const exams = repo.exams();
  const [examId, setExamId] = useState<string | undefined>(undefined);
  const [rows, setRows] = useState<LeaderboardRow[] | null>(null);
  const [mine, setMine] = useState<LeaderboardRow | null>(null);
  const [boardSize, setBoardSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    let alive = true;
    setRows(null);
    setError(null);
    (async () => {
      try {
        const [list, rank] = await Promise.all([
          fetchLeaderboard(supabase, examId),
          fetchMyRank(supabase, examId).catch(() => null)
        ]);
        // Cohort size: a board under the fetch cap IS the whole cohort;
        // the global board past the cap has an exact-count RPC.
        let size: number | null = list.length < 100 ? list.length : null;
        if (size === null && !examId) {
          const { data: n } = await supabase.rpc("leaderboard_size");
          if (typeof n === "number") size = n;
        }
        if (alive) {
          setRows(list);
          setMine(rank);
          setBoardSize(size);
        }
      } catch (e) {
        if (alive) setError((e as Error).message);
      }
    })();
    return () => {
      alive = false;
    };
  }, [supabase, examId]);

  const percentileAhead =
    mine && boardSize !== null && boardSize >= 5 && mine.rank <= boardSize
      ? Math.round(((boardSize - mine.rank) / boardSize) * 100)
      : null;

  return (
    <SafeAreaView className="flex-1 bg-oled" edges={["top"]}>
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Text className="text-2xl font-bold tracking-tight text-ink">Ranks</Text>
        <Text className="mb-5 mt-0.5 text-xs text-muted">Anonymized global standings.</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
          <View className="flex-row gap-2">
            <Chip label="Overall" active={!examId} onPress={() => setExamId(undefined)} />
            {exams.map((e) => (
              <Chip key={e.id} label={e.name} active={examId === e.id} onPress={() => setExamId(e.id)} />
            ))}
          </View>
        </ScrollView>

        {!supabase ? (
          <Empty text="Cloud ranks aren't configured. Sign-in and leaderboards activate once Supabase keys are added." />
        ) : error ? (
          <Empty text={error} />
        ) : rows === null ? (
          <ActivityIndicator color="#10B981" className="mt-10" />
        ) : rows.length === 0 ? (
          <Empty text="No ranked aspirants yet. Be the first — drill some cards and sign in." />
        ) : (
          <View className="gap-1.5">
            {mine && <RankRow row={mine} highlight />}
            {percentileAhead !== null && (
              <Text className="mb-1 px-1 text-xs text-correct-bright">
                You&apos;re ahead of {percentileAhead}% of aspirants.
              </Text>
            )}
            {rows.map((r) => (
              <RankRow key={`${r.rank}-${r.handle}`} row={r} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-full border px-4 py-1.5 ${
        active ? "border-correct bg-correct-dim/40" : "border-edge bg-surface"
      }`}
    >
      <Text className={`text-xs font-semibold ${active ? "text-correct-bright" : "text-muted"}`}>
        {label}
      </Text>
    </Pressable>
  );
}

function RankRow({ row, highlight }: { row: LeaderboardRow; highlight?: boolean }) {
  return (
    <View
      className={`flex-row items-center justify-between rounded-xl border px-4 py-3 ${
        highlight ? "border-correct/50 bg-correct-dim/30" : "border-edge bg-surface"
      }`}
    >
      <View className="flex-row items-center gap-3">
        <Text className="w-7 text-sm font-bold text-faint">{row.rank}</Text>
        <Text className="text-sm font-semibold text-ink">
          {row.handle}
          {highlight ? "  (you)" : ""}
        </Text>
      </View>
      <Text className="text-sm font-bold text-correct">{row.xp} XP</Text>
    </View>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <View className="mt-6 rounded-2xl border border-edge bg-surface px-5 py-6">
      <Text className="text-sm leading-relaxed text-muted">{text}</Text>
    </View>
  );
}
