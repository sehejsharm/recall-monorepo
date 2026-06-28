import { useEffect, useState } from "react";
import { ScrollView, Pressable, Text, View } from "react-native";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import Markdown from "react-native-markdown-display";
import { topicCounts, type StudyMaterial } from "@jyotir/core";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";

const markdownStyles = {
  body: { color: "#FAFAFA", fontSize: 15, lineHeight: 23 },
  heading2: { color: "#FAFAFA", fontSize: 18, fontWeight: "700" as const, marginTop: 20, marginBottom: 8 },
  heading3: { color: "#FAFAFA", fontSize: 15, fontWeight: "700" as const, marginTop: 14, marginBottom: 6 },
  strong: { color: "#34D399", fontWeight: "700" as const },
  em: { color: "#FAFAFA", fontStyle: "italic" as const },
  paragraph: { marginTop: 0, marginBottom: 14 },
  bullet_list: { marginBottom: 14 },
  ordered_list: { marginBottom: 14 },
  list_item: { marginBottom: 5 },
  bullet_list_icon: { color: "#8B8B93" },
  table: { borderWidth: 1, borderColor: "#26262B", borderRadius: 10, marginBottom: 14 },
  thead: { backgroundColor: "#131316" },
  th: { padding: 8, color: "#FAFAFA", fontWeight: "700" as const },
  td: { padding: 8, borderColor: "#26262B", color: "#FAFAFA" },
  tr: { borderColor: "#26262B" },
  code_inline: {
    backgroundColor: "#131316",
    color: "#34D399",
    borderRadius: 4,
    paddingHorizontal: 4,
    fontFamily: "monospace"
  },
  fence: { backgroundColor: "#131316", borderColor: "#26262B", borderRadius: 10, padding: 10 },
  code_block: { backgroundColor: "#131316", borderColor: "#26262B", borderRadius: 10, padding: 10 },
  blockquote: {
    backgroundColor: "transparent",
    borderLeftWidth: 2,
    borderLeftColor: "#10B981",
    paddingLeft: 10,
    marginBottom: 14
  },
  hr: { backgroundColor: "#26262B", marginVertical: 14 }
};

/**
 * The micro-note reader: pure Markdown, ends in the giant sticky
 * "Drill This Topic Now (X Cards Due)" CTA that flips straight into the
 * drill engine — the queue is already in memory, so the switch is 0ms.
 */
export function StudyReader({
  material,
  onDrill
}: {
  material: StudyMaterial;
  onDrill: () => void;
}) {
  // Select the stable `progress` reference and derive counts in render —
  // never return a fresh object from a Zustand selector (infinite loop).
  const progress = useJyotir((s) => s.progress);
  const counts = topicCounts(repo.questionsByTopic(material.topicId), progress);
  const isRead = useJyotir((s) => Boolean(s.reads[material.id]));
  const markRead = useJyotir((s) => s.markRead);

  const [speaking, setSpeaking] = useState(false);
  useEffect(() => () => { void Speech.stop(); }, []);

  const toggleSpeak = () => {
    if (speaking) {
      void Speech.stop();
      setSpeaking(false);
      return;
    }
    const plain = material.content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/[#>*_`|~-]/g, " ")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
    setSpeaking(true);
    Speech.speak(plain, { onDone: () => setSpeaking(false), onStopped: () => setSpeaking(false) });
  };

  const pending = counts.due + counts.fresh;
  const ctaLabel =
    pending > 0
      ? `Drill This Topic Now (${pending} ${pending === 1 ? "Card" : "Cards"} Due)`
      : "Drill This Topic Now (All Caught Up)";

  const handleDrill = () => {
    void Speech.stop();
    if (!isRead) markRead(material.id);
    onDrill();
  };

  return (
    <View className="flex-1">
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-xs text-muted">
          {material.title} · {material.estimatedReadTime} min read
        </Text>
        <View className="flex-row items-center gap-4">
          <Pressable onPress={toggleSpeak} hitSlop={8} className="flex-row items-center gap-1">
            <Ionicons name={speaking ? "stop-circle" : "volume-medium"} size={15} color={speaking ? "#34D399" : "#8B8B93"} />
            <Text className={`text-xs ${speaking ? "text-correct" : "text-muted"}`}>{speaking ? "Stop" : "Listen"}</Text>
          </Pressable>
          {isRead ? (
            <Text className="text-xs font-semibold text-correct">read ✓</Text>
          ) : (
            <Pressable onPress={() => markRead(material.id)} hitSlop={8}>
              <Text className="text-xs text-muted">mark as read</Text>
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-28"
        showsVerticalScrollIndicator={false}
      >
        <Markdown style={markdownStyles}>{material.content}</Markdown>
      </ScrollView>

      {/* Sticky Read-to-Drill CTA */}
      <View className="absolute inset-x-0 bottom-0 pb-2 pt-3">
        <Pressable
          onPress={handleDrill}
          className="items-center rounded-2xl bg-correct py-4 active:scale-[0.98]"
          style={{
            shadowColor: "#10B981",
            shadowOpacity: 0.35,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 0 },
            elevation: 8
          }}
        >
          <Text className="text-base font-bold text-black">{ctaLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}
