import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ACHIEVEMENTS, isStreakActive, levelProgress, RANKS } from "@jyotir/core";
import { useJyotir } from "@/lib/store-provider";
import { BottomNav } from "@/components/BottomNav";

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <View className="flex-1 rounded-2xl border border-edge bg-surface px-3 py-3">
      <Text className={`text-xl font-bold ${accent ? "text-correct" : "text-ink"}`}>{value}</Text>
      <Text className="mt-0.5 text-[10px] uppercase tracking-wider text-faint">{label}</Text>
    </View>
  );
}

export default function StatsScreen() {
  const router = useRouter();
  const ready = useJyotir((s) => s.ready);
  const stats = useJyotir((s) => s.stats);
  const mastered = useJyotir((s) => (s.ready ? s.masteredCount() : 0));

  const lp = levelProgress(stats.xp);
  const unlocked = new Set(stats.achievements);
  const nextRank = RANKS[Math.min(lp.level, RANKS.length - 1)];

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8 pb-28">
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text className="text-xs text-muted">← Home</Text>
        </Pressable>
        <Text className="mb-6 mt-3 text-2xl font-bold tracking-tight text-ink">Your Progress</Text>

        {!ready ? (
          <View className="h-40 rounded-2xl border border-edge bg-surface" />
        ) : (
          <>
            <View className="mb-4 rounded-2xl border border-edge bg-surface p-5">
              <View className="flex-row items-end justify-between">
                <View>
                  <Text className="text-xs uppercase tracking-wider text-faint">Level {lp.level}</Text>
                  <Text className="text-3xl font-bold text-ink">{lp.rank}</Text>
                </View>
                <View className="flex-row items-center gap-1.5">
                  <Text className="text-xl font-bold text-correct">{stats.currentStreak}</Text>
                  <Text className="text-xs text-muted">day{stats.currentStreak === 1 ? "" : "s"}</Text>
                </View>
              </View>
              <View className="mt-4 h-2 w-full overflow-hidden rounded-full bg-raised">
                <View className="h-full rounded-full bg-correct" style={{ width: `${lp.pct}%` }} />
              </View>
              <View className="mt-1.5 flex-row justify-between">
                <Text className="text-[11px] text-faint">{stats.xp} XP total</Text>
                <Text className="text-[11px] text-faint">
                  {lp.toNext} XP to {nextRank}
                </Text>
              </View>
            </View>

            <View className="mb-2.5 flex-row gap-2.5">
              <Stat label="Drilled" value={stats.cardsGraded} />
              <Stat label="Mastered" value={mastered} accent />
              <Stat label="Best combo" value={stats.bestCombo} />
            </View>
            <View className="mb-6 flex-row gap-2.5">
              <Stat label="Current streak" value={stats.currentStreak} />
              <Stat label="Longest" value={stats.longestStreak} />
              <Stat label="Status" value={isStreakActive(stats) ? "Alive" : "Resting"} />
            </View>

            <Text className="mb-3 text-sm font-semibold text-ink">
              Achievements{" "}
              <Text className="text-faint">
                {unlocked.size}/{ACHIEVEMENTS.length}
              </Text>
            </Text>
            <View className="gap-2">
              {ACHIEVEMENTS.map((a) => {
                const got = unlocked.has(a.id);
                return (
                  <View
                    key={a.id}
                    className={`flex-row items-center justify-between rounded-xl border px-4 py-3 ${
                      got ? "border-correct/40 bg-correct-dim/30" : "border-edge bg-surface opacity-60"
                    }`}
                  >
                    <View className="flex-1 pr-2">
                      <Text className={`text-sm font-semibold ${got ? "text-correct-bright" : "text-muted"}`}>
                        {a.name}
                      </Text>
                      <Text className="text-xs text-faint">{a.description}</Text>
                    </View>
                    <Text className={`text-xs font-bold ${got ? "text-correct" : "text-faint"}`}>
                      {got ? "Unlocked" : "Locked"}
                    </Text>
                  </View>
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
