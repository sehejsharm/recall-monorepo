import { Link, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { groupExams } from "@jyotir/core";
import { repo } from "@/lib/content";
import { useSettings } from "@/lib/settings";
import { useJyotir } from "@/lib/store-provider";
import { ProfileStrip } from "@/components/ProfileStrip";
import { Ionicons } from "@expo/vector-icons";

export default function ExamPickerScreen() {
  const router = useRouter();
  const ready = useJyotir((s) => s.ready);
  const due = useJyotir((s) => (s.ready ? s.dueTotal() : 0));

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Text className="text-3xl font-bold tracking-tight text-ink">Recall</Text>
        <Text className="mb-5 mt-1 text-sm text-muted">
          Drill. Read. Repeat. Nothing else.
        </Text>

        <ProfileStrip />

        <ExamCountdown />

        {/* Cross-exam daily review entry */}
        {ready && due > 0 ? (
          <Pressable
            onPress={() => router.push("/review")}
            className="mb-6 flex-row items-center justify-between rounded-2xl bg-correct px-5 py-4 active:scale-[0.99]"
            style={{
              shadowColor: "#10B981",
              shadowOpacity: 0.3,
              shadowRadius: 14,
              shadowOffset: { width: 0, height: 0 },
              elevation: 6
            }}
          >
            <View>
              <Text className="text-base font-bold text-black">Start Daily Review</Text>
              <Text className="text-xs font-medium text-black/70">across all your exams</Text>
            </View>
            <View className="rounded-full bg-black/15 px-3 py-1">
              <Text className="text-sm font-bold text-black">{due} due</Text>
            </View>
          </Pressable>
        ) : ready ? (
          <View className="mb-6 flex-row items-center justify-between rounded-2xl border border-edge bg-surface px-5 py-4">
            <Text className="text-sm font-semibold text-muted">No reviews due</Text>
            <Text className="text-sm font-semibold text-correct">all caught up ✓</Text>
          </View>
        ) : (
          <View className="mb-6 h-[68px] rounded-2xl border border-edge bg-surface" />
        )}

        <View className="mb-6 flex-row gap-2.5">
          <QuickAction icon="timer-outline" label="Mock test" href="/mock" />
          <QuickAction icon="construct-outline" label="Custom" href="/custom" />
          <QuickAction icon="bookmark-outline" label="Saved" href="/bookmarks" />
        </View>

        <Text className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
          Exams
        </Text>
        <View className="gap-2.5">
          {groupExams(repo.exams()).map((group) =>
            group.levels.length === 1 ? (
              <Link key={group.id} href={`/${group.levels[0]!.slug}`} asChild>
                <Pressable className="rounded-2xl border border-edge bg-surface px-5 py-4 active:bg-raised">
                  <Text className="text-lg font-semibold text-ink">{group.levels[0]!.name}</Text>
                  <Text className="mt-0.5 text-xs text-muted">{group.levels[0]!.tagline}</Text>
                </Pressable>
              </Link>
            ) : (
              <View key={group.id} className="rounded-2xl border border-edge bg-surface px-5 py-4">
                <Text className="text-lg font-semibold text-ink">{group.name}</Text>
                <Text className="mt-0.5 text-xs text-muted">{group.tagline}</Text>
                <View className="mt-3 flex-row flex-wrap gap-2">
                  {group.levels.map((level) => (
                    <Link key={level.id} href={`/${level.slug}`} asChild>
                      <Pressable className="rounded-full border border-edge bg-raised px-3.5 py-1.5 active:border-correct/40">
                        <Text className="text-xs font-semibold text-muted">
                          {level.levelLabel ?? level.name}
                        </Text>
                      </Pressable>
                    </Link>
                  ))}
                </View>
              </View>
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/** Home urgency strip: "GATE in 47 days" + one-tap continue into that exam. */
function ExamCountdown() {
  const router = useRouter();
  const { settings } = useSettings();
  if (!settings.primaryExamId) return null;
  const exam = repo.exams().find((e) => e.id === settings.primaryExamId);
  if (!exam) return null;

  let days: number | null = null;
  if (settings.examDate) {
    const target = new Date(`${settings.examDate}T00:00:00`);
    days = Math.ceil((target.getTime() - Date.now()) / 86_400_000);
  }

  return (
    <Pressable
      onPress={() => router.push(`/${exam.slug}` as never)}
      className="mb-3 flex-row items-center justify-between rounded-2xl border border-edge bg-surface px-5 py-3.5 active:bg-raised"
    >
      <View className="flex-1 pr-3">
        <Text className="text-sm font-bold text-ink" numberOfLines={1}>
          {days !== null && days >= 0
            ? days === 0
              ? `${exam.name} is today — you've got this.`
              : `${exam.name} in ${days} day${days === 1 ? "" : "s"}`
            : `Continue ${exam.name}`}
        </Text>
        <Text className="mt-0.5 text-xs text-muted">
          {days !== null && days > 0
            ? "Every card you clear today compounds."
            : "Pick up where you left off."}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#55555C" />
    </Pressable>
  );
}

function QuickAction({ icon, label, href }: { icon: keyof typeof Ionicons.glyphMap; label: string; href: string }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(href as never)}
      className="flex-1 items-center gap-1.5 rounded-2xl border border-edge bg-surface py-3.5 active:bg-raised"
    >
      <Ionicons name={icon} size={20} color="#34D399" />
      <Text className="text-xs font-semibold text-muted">{label}</Text>
    </Pressable>
  );
}
