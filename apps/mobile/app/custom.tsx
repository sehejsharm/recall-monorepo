import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { repo } from "@/lib/content";
import { useJyotirStore } from "@/lib/store-provider";
import { DrillEngine } from "@/components/DrillEngine";

export default function CustomDrillScreen() {
  const router = useRouter();
  const store = useJyotirStore();
  const exams = repo.exams();
  const [examId, setExamId] = useState(exams[0]?.id ?? "");
  const [selected, setSelected] = useState<Record<string, true>>({});
  const [drilling, setDrilling] = useState(false);

  const subjects = repo.subjectsByExam(examId);
  const selectedIds = Object.keys(selected);

  const toggleTopic = (id: string) =>
    setSelected((s) => {
      const next = { ...s };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });

  const toggleSubject = (subjectId: string) => {
    const topics = repo.topicsBySubject(subjectId);
    const allOn = topics.every((t) => selected[t.id]);
    setSelected((s) => {
      const next = { ...s };
      for (const t of topics) {
        if (allOn) delete next[t.id];
        else next[t.id] = true;
      }
      return next;
    });
  };

  if (drilling) {
    return (
      <SafeAreaView className="flex-1 bg-oled">
        <View className="flex-1 px-5 pt-4">
          <Pressable onPress={() => setDrilling(false)} hitSlop={12}>
            <Text className="text-xs text-muted">← Build</Text>
          </Pressable>
          <Text className="mb-5 mt-2 text-xl font-bold tracking-tight text-ink">Custom drill</Text>
          <DrillEngine topicId="__custom__" customTopicIds={selectedIds} onExit={() => setDrilling(false)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8 pb-32">
        <Pressable onPress={() => router.replace("/")} hitSlop={12}>
          <Text className="text-xs text-muted">← Home</Text>
        </Pressable>
        <Text className="mb-1 mt-2 text-2xl font-bold tracking-tight text-ink">Custom drill</Text>
        <Text className="mb-5 text-xs text-muted">Pick the subjects and topics to drill.</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
          <View className="flex-row gap-2">
            {exams.map((e) => (
              <Pressable
                key={e.id}
                onPress={() => setExamId(e.id)}
                className={`rounded-full border px-4 py-1.5 ${
                  examId === e.id ? "border-correct bg-correct-dim/40" : "border-edge bg-surface"
                }`}
              >
                <Text className={`text-xs font-semibold ${examId === e.id ? "text-correct-bright" : "text-muted"}`}>
                  {e.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <View className="gap-3">
          {subjects.map((subject) => {
            const topics = repo.topicsBySubject(subject.id);
            const allOn = topics.length > 0 && topics.every((t) => selected[t.id]);
            return (
              <View key={subject.id} className="rounded-2xl border border-edge bg-surface p-3">
                <Pressable onPress={() => toggleSubject(subject.id)} className="flex-row items-center justify-between pb-2">
                  <Text className="text-sm font-bold text-ink">{subject.name}</Text>
                  <Text className={`text-xs font-semibold ${allOn ? "text-correct" : "text-faint"}`}>
                    {allOn ? "Clear" : "Select all"}
                  </Text>
                </Pressable>
                <View className="flex-row flex-wrap gap-1.5">
                  {topics.map((t) => {
                    const on = Boolean(selected[t.id]);
                    return (
                      <Pressable
                        key={t.id}
                        onPress={() => toggleTopic(t.id)}
                        className={`rounded-lg border px-2.5 py-1.5 ${
                          on ? "border-correct bg-correct-dim/40" : "border-edge"
                        }`}
                      >
                        <Text className={`text-xs ${on ? "text-correct-bright" : "text-muted"}`}>{t.name}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View className="absolute inset-x-0 bottom-0 border-t border-edge bg-surface px-5 pb-8 pt-3">
        <Pressable
          disabled={selectedIds.length === 0}
          onPress={() => {
            store.getState().startCustomDrill(selectedIds);
            setDrilling(true);
          }}
          className="flex-row items-center justify-center gap-2 rounded-2xl bg-correct py-4 active:scale-[0.98]"
          style={{ opacity: selectedIds.length === 0 ? 0.4 : 1 }}
        >
          <Ionicons name="play" size={18} color="#000" />
          <Text className="text-base font-bold text-black">
            Drill {selectedIds.length} topic{selectedIds.length === 1 ? "" : "s"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
