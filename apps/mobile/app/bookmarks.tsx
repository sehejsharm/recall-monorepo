import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { repo } from "@/lib/content";
import { useJyotir, useJyotirStore } from "@/lib/store-provider";
import { DrillEngine } from "@/components/DrillEngine";
import { useState } from "react";

export default function BookmarksScreen() {
  const router = useRouter();
  const store = useJyotirStore();
  const bookmarks = useJyotir((s) => s.bookmarks);
  const ready = useJyotir((s) => s.ready);
  const [drilling, setDrilling] = useState(false);

  const ids = Object.keys(bookmarks);
  const questions = repo.allQuestions().filter((q) => bookmarks[q.id]);

  if (drilling) {
    return (
      <SafeAreaView className="flex-1 bg-oled">
        <View className="flex-1 px-5 pt-4">
          <Pressable onPress={() => setDrilling(false)} hitSlop={12}>
            <Text className="text-xs text-muted">← Bookmarks</Text>
          </Pressable>
          <Text className="mb-5 mt-2 text-xl font-bold tracking-tight text-ink">Bookmarked drill</Text>
          {/* BOOKMARK_SCOPE drill: DrillEngine starts it via startBookmarkedDrill */}
          <DrillEngine topicId="__bookmark__" bookmarkMode onExit={() => setDrilling(false)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-oled" edges={["top"]}>
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Pressable onPress={() => router.replace("/")} hitSlop={12}>
          <Text className="text-xs text-muted">← Home</Text>
        </Pressable>
        <Text className="mb-1 mt-2 text-2xl font-bold tracking-tight text-ink">Bookmarks</Text>
        <Text className="mb-5 text-xs text-muted">Questions you flagged for a focused review.</Text>

        {!ready || ids.length === 0 ? (
          <View className="mt-6 rounded-2xl border border-edge bg-surface px-5 py-6">
            <Text className="text-sm leading-relaxed text-muted">
              No bookmarks yet. Tap the flag on any card during a drill to save it here.
            </Text>
          </View>
        ) : (
          <>
            <Pressable
              onPress={() => {
                store.getState().startBookmarkedDrill();
                setDrilling(true);
              }}
              className="mb-5 flex-row items-center justify-between rounded-2xl bg-correct px-5 py-4 active:scale-[0.99]"
            >
              <Text className="text-base font-bold text-black">Drill {ids.length} bookmarked</Text>
              <Ionicons name="play" size={18} color="#000" />
            </Pressable>
            <View className="gap-2">
              {questions.map((q) => {
                const topic = repo.topicById(q.topicId);
                return (
                  <View key={q.id} className="rounded-xl border border-edge bg-surface px-4 py-3">
                    <Text className="text-sm text-ink" numberOfLines={2}>
                      {q.text}
                    </Text>
                    <View className="mt-2 flex-row items-center justify-between">
                      <Text className="text-[11px] text-faint">{topic?.name ?? ""}</Text>
                      <Pressable onPress={() => store.getState().toggleBookmark(q.id)} hitSlop={8}>
                        <Text className="text-[11px] font-semibold text-wrong">Remove</Text>
                      </Pressable>
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
