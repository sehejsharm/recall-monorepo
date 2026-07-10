import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import type { Subject, Topic } from "@jyotir/core";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";
import { DrillEngine } from "@/components/DrillEngine";
import { StudyReader } from "@/components/StudyReader";

const { width: SCREEN_W } = Dimensions.get("window");

/**
 * Topic screen as a horizontally swipeable deck: each card is one topic, and
 * the user swipes left/right (Tinder-style) to move between topics in the
 * subject. Drilling is never mandatory — a card can be read and skipped. Only
 * the active card mounts the drill engine, keeping the single in-memory drill
 * session safe.
 */
export default function TopicScreen() {
  const {
    exam: examSlug,
    subject: subjectSlug,
    topic: topicSlug,
    tab: tabParam,
    n: nParam
  } = useLocalSearchParams<{ exam: string; subject: string; topic: string; tab?: string; n?: string }>();
  const router = useRouter();

  // Deep-link (onboarding taste session): ?tab=drill&n=5 opens straight into
  // a capped drill on the requested topic.
  const forceDrill = tabParam === "drill";
  const nParsed = Number(nParam);
  const drillLimit = Number.isFinite(nParsed) && nParsed > 0 ? nParsed : undefined;

  const exam = repo.examBySlug(examSlug ?? "");
  const subject = exam ? repo.subjectBySlug(exam.id, subjectSlug ?? "") : undefined;
  const topics = subject ? repo.topicsBySubject(subject.id) : [];
  const startIndex = Math.max(
    0,
    topics.findIndex((t) => t.slug === topicSlug)
  );

  const listRef = useRef<FlatList<Topic>>(null);
  const [active, setActive] = useState(startIndex);

  const examHome = useCallback(() => {
    if (exam && subject) router.replace(`/${exam.slug}/${subject.slug}`);
    else router.back();
  }, [exam, subject, router]);

  const goToIndex = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= topics.length) return;
      listRef.current?.scrollToIndex({ index: idx, animated: true });
      setActive(idx);
    },
    [topics.length]
  );

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const idx = Math.round(e.nativeEvent.contentOffset.x / SCREEN_W);
    if (idx !== active) setActive(idx);
  };

  if (!exam || !subject || topics.length === 0) return null;
  const current = topics[active] ?? topics[startIndex]!;

  return (
    <SafeAreaView className="flex-1 bg-oled" edges={["top", "left", "right"]}>
      <View className="px-5 pt-4">
        <Pressable onPress={examHome} hitSlop={12} className="flex-row items-center gap-1">
          <Ionicons name="chevron-back" size={14} color="#8B8B93" />
          <Text className="text-xs text-muted">{subject.name}</Text>
        </Pressable>
        <View className="mt-2 flex-row items-center justify-between">
          <Text className="flex-1 text-xl font-bold tracking-tight text-ink" numberOfLines={1}>
            {current.name}
          </Text>
          <Text className="ml-3 text-xs font-medium text-faint">
            {active + 1} / {topics.length}
          </Text>
        </View>
        {/* Carousel dots: the visual cue that this deck swipes. */}
        <View className="mt-2 flex-row items-center justify-center gap-1">
          {topics.map((t, i) => (
            <Pressable key={t.id} onPress={() => goToIndex(i)} hitSlop={6} className="py-1.5">
              <View
                className={`rounded-full ${
                  i === active ? "h-1.5 w-4 bg-correct" : "h-1.5 w-1.5 bg-raised"
                }`}
              />
            </Pressable>
          ))}
        </View>
        <Text className="text-center text-[11px] text-muted">← swipe to change topic →</Text>
      </View>

      <FlatList
        ref={listRef}
        data={topics}
        keyExtractor={(t) => t.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={startIndex}
        getItemLayout={(_, index) => ({ length: SCREEN_W, offset: SCREEN_W * index, index })}
        onMomentumScrollEnd={onMomentumEnd}
        windowSize={3}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        className="flex-1"
        renderItem={({ item, index }) => (
          <TopicCard
            exam={exam}
            subject={subject}
            topic={item}
            isActive={index === active}
            hasNext={index + 1 < topics.length}
            onNextTopic={() => goToIndex(index + 1)}
            onExamHome={examHome}
            forceDrill={index === startIndex && forceDrill}
            drillLimit={index === startIndex ? drillLimit : undefined}
          />
        )}
      />
    </SafeAreaView>
  );
}

type Tab = "study" | "drill";

/** One swipeable topic card: study notes ⇄ drill, scoped to a single topic. */
function TopicCard({
  exam,
  subject,
  topic,
  isActive,
  hasNext,
  onNextTopic,
  onExamHome,
  forceDrill = false,
  drillLimit
}: {
  exam: { slug: string };
  subject: Subject;
  topic: Topic;
  isActive: boolean;
  hasNext: boolean;
  onNextTopic: () => void;
  onExamHome: () => void;
  /** Open directly on the drill tab (onboarding taste-session deep link). */
  forceDrill?: boolean;
  /** Cap the drill length (taste session = 5). */
  drillLimit?: number;
}) {
  const material = repo.materialByTopic(topic.id);
  const exitDrill = useJyotir((s) => s.exitDrill);
  const [tab, setTab] = useState<Tab>(forceDrill || !material ? "drill" : "study");

  // When a card scrolls out of focus, drop any drill in progress and reset to
  // the notes so the single global drill session only ever belongs to the
  // active card.
  useEffect(() => {
    if (!isActive) {
      exitDrill();
      setTab(material ? "study" : "drill");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const switchTab = (next: Tab) => {
    if (next === tab) return;
    if (next === "study") exitDrill();
    setTab(next);
  };

  return (
    <View style={{ width: SCREEN_W }} className="flex-1 px-5 pt-3">
      <View className="mb-4 flex-row items-center gap-2">
        <View className="flex-1 flex-row rounded-xl border border-edge bg-surface p-1">
          <Pressable
            onPress={() => switchTab("drill")}
            className={`min-h-[44px] flex-1 items-center justify-center rounded-lg py-2 ${tab === "drill" ? "bg-raised" : ""}`}
          >
            <Text className={`text-sm font-semibold ${tab === "drill" ? "text-ink" : "text-muted"}`}>
              Drill Engine
            </Text>
          </Pressable>
          <Pressable
            onPress={() => material && switchTab("study")}
            disabled={!material}
            className={`min-h-[44px] flex-1 items-center justify-center rounded-lg py-2 ${tab === "study" ? "bg-raised" : ""} ${
              material ? "" : "opacity-30"
            }`}
          >
            <Text className={`text-sm font-semibold ${tab === "study" ? "text-ink" : "text-muted"}`}>
              Study Material
            </Text>
          </Pressable>
        </View>
        {hasNext && (
          <Pressable
            onPress={onNextTopic}
            hitSlop={8}
            className="min-h-[44px] flex-row items-center gap-1 rounded-lg border border-edge px-3 active:bg-raised"
          >
            <Text className="text-xs font-semibold text-muted">Skip</Text>
            <Ionicons name="arrow-forward" size={13} color="#8B8B93" />
          </Pressable>
        )}
      </View>

      {/* Only the active card runs a drill (protects the single drill session). */}
      {tab === "drill" && isActive ? (
        <DrillEngine
          topicId={topic.id}
          limit={drillLimit}
          onStudy={material ? () => switchTab("study") : undefined}
          onNextTopic={hasNext ? onNextTopic : undefined}
          onExamHome={onExamHome}
        />
      ) : material ? (
        <StudyReader material={material} onDrill={() => switchTab("drill")} />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-sm text-muted">Swipe back to drill this topic.</Text>
        </View>
      )}
    </View>
  );
}
