import { useEffect, useMemo, useRef } from "react";
import { Animated, PanResponder, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { achievementById, OPTION_KEYS, optionText } from "@jyotir/core";
import { useJyotir, useJyotirStore } from "@/lib/store-provider";

/**
 * The drill loop, mobile edition:
 *   tap anywhere -> reveal (selection haptic)
 *   swipe right / "Knew It"   -> q=4 (light impact)
 *   swipe left  / "Got It Wrong" -> q=2 (medium impact)
 * The queue is fully in memory; advancing is a synchronous store update.
 */
export function DrillEngine({
  topicId,
  onStudy,
  reviewMode = false,
  bookmarkMode = false,
  customTopicIds,
  onExit
}: {
  topicId: string;
  onStudy?: () => void;
  /** Cross-exam review: due-only queue, no study tab. */
  reviewMode?: boolean;
  /** Drill only the user's bookmarked questions. */
  bookmarkMode?: boolean;
  /** Custom drill across an explicit set of topics. */
  customTopicIds?: string[];
  /** Secondary action on the completion screen (e.g. back to home). */
  onExit?: () => void;
}) {
  const store = useJyotirStore();
  const drill = useJyotir((s) => s.drill);
  const ready = useJyotir((s) => s.ready);
  const newlyUnlocked = useJyotir((s) => s.newlyUnlocked);
  const bookmarks = useJyotir((s) => s.bookmarks);

  const begin = () => {
    const st = store.getState();
    st.clearNewlyUnlocked();
    if (reviewMode) st.startReview();
    else if (bookmarkMode) st.startBookmarkedDrill();
    else if (customTopicIds) st.startCustomDrill(customTopicIds);
    else st.startDrill(topicId);
  };
  const start = begin;
  const leave = (fn?: () => void) => {
    store.getState().clearNewlyUnlocked();
    fn?.();
  };

  useEffect(() => {
    if (ready) begin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, topicId, reviewMode, bookmarkMode, store]);

  const pan = useRef(new Animated.Value(0)).current;
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_evt, g) =>
          store.getState().drill.phase === "revealed" &&
          Math.abs(g.dx) > 12 &&
          Math.abs(g.dx) > Math.abs(g.dy) * 1.5,
        onPanResponderMove: (_evt, g) => pan.setValue(g.dx),
        onPanResponderRelease: (_evt, g) => {
          if (Math.abs(g.dx) > 72) {
            store.getState().grade(g.dx > 0);
            pan.setValue(0);
          } else {
            Animated.spring(pan, { toValue: 0, useNativeDriver: true }).start();
          }
        },
        onPanResponderTerminate: () => {
          Animated.spring(pan, { toValue: 0, useNativeDriver: true }).start();
        }
      }),
    [pan, store]
  );

  if (!ready || drill.topicId !== topicId) return <View className="flex-1" />;

  const card = drill.queue[drill.index];

  if (drill.phase === "complete" || !card) {
    const { knew, wrong } = drill.stats;
    const total = knew + wrong;
    const caughtUp = reviewMode && total === 0;
    return (
      <View className="flex-1 items-center justify-center gap-6">
        <View className="items-center">
          {caughtUp ? (
            <>
              <Text className="text-5xl font-bold text-correct">✓</Text>
              <Text className="mt-3 text-base font-semibold text-ink">All caught up</Text>
              <Text className="mt-1 text-center text-sm text-muted">
                No cards due across your exams.
              </Text>
            </>
          ) : (
            <>
              <Text className="text-5xl font-bold text-ink">
                {total > 0 ? Math.round((knew / total) * 100) : 100}%
              </Text>
              <Text className="mt-2 text-sm text-muted">
                <Text className="font-semibold text-correct">{knew} knew</Text>
                {" · "}
                <Text className="font-semibold text-wrong-bright">{wrong} missed</Text>
              </Text>
              {drill.sessionXp > 0 && (
                <View className="mt-4 rounded-full bg-correct-dim/50 px-3 py-1">
                  <Text className="text-sm font-bold text-correct-bright">+{drill.sessionXp} XP</Text>
                </View>
              )}
            </>
          )}
        </View>

        {newlyUnlocked.length > 0 && (
          <View className="w-full max-w-xs rounded-2xl border border-correct/40 bg-correct-dim/30 p-3">
            <Text className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-correct">
              Achievement unlocked
            </Text>
            {newlyUnlocked.map((id) => {
              const a = achievementById(id);
              return a ? (
                <Text key={id} className="text-center text-sm">
                  <Text className="font-bold text-correct-bright">{a.name}</Text>
                  <Text className="text-muted"> — {a.description}</Text>
                </Text>
              ) : null;
            })}
          </View>
        )}

        <View className="w-full max-w-xs gap-2.5">
          {!caughtUp && (
            <Pressable
              onPress={start}
              className="items-center rounded-xl bg-ink py-3.5 active:scale-[0.98]"
            >
              <Text className="font-bold text-black">
                {reviewMode ? "Review Again" : "Drill Again"}
              </Text>
            </Pressable>
          )}
          {onStudy && (
            <Pressable
              onPress={() => leave(onStudy)}
              className="items-center rounded-xl border border-edge py-3.5"
            >
              <Text className="font-semibold text-muted">Back to the notes</Text>
            </Pressable>
          )}
          {onExit && (
            <Pressable
              onPress={() => leave(onExit)}
              className="items-center rounded-xl border border-edge py-3.5"
            >
              <Text className="font-semibold text-muted">Done</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  }

  const { question } = card;
  const revealed = drill.phase === "revealed";
  const progressPct = (drill.index / drill.queue.length) * 100;

  return (
    <View className="flex-1">
      <View className="mb-5 flex-row items-center gap-3">
        <View className="h-0.5 flex-1 overflow-hidden rounded-full bg-raised">
          <View className="h-full bg-correct" style={{ width: `${progressPct}%` }} />
        </View>
        {drill.combo >= 2 && (
          <View className="rounded-full bg-correct-dim/60 px-2 py-0.5">
            <Text className="text-[11px] font-bold text-correct-bright">{drill.combo}x</Text>
          </View>
        )}
        <Pressable onPress={() => store.getState().toggleBookmark(question.id)} hitSlop={10}>
          <Ionicons
            name={bookmarks[question.id] ? "bookmark" : "bookmark-outline"}
            size={18}
            color={bookmarks[question.id] ? "#34D399" : "#55555C"}
          />
        </Pressable>
      </View>

      <Animated.View
        className="flex-1"
        style={{
          transform: [
            { translateX: Animated.multiply(pan, 0.35) },
            {
              rotate: pan.interpolate({
                inputRange: [-300, 300],
                outputRange: ["-4deg", "4deg"]
              })
            }
          ]
        }}
        {...panResponder.panHandlers}
      >
        <Pressable
          className="flex-1"
          disabled={revealed}
          onPress={() => store.getState().reveal()}
        >
          <Text className="text-lg font-semibold leading-7 text-ink">
            {question.text}
          </Text>

          <View className="mt-6 gap-2">
            {OPTION_KEYS.map((key) => {
              const isCorrect = revealed && key === question.correctOption;
              const dimmed = revealed && !isCorrect;
              return (
                <View
                  key={key}
                  className={`flex-row items-baseline gap-3 rounded-xl border px-4 py-3 ${
                    isCorrect
                      ? "border-correct bg-correct-dim/60"
                      : dimmed
                        ? "border-edge/50"
                        : "border-edge bg-surface"
                  }`}
                >
                  <Text
                    className={`text-xs font-bold ${isCorrect ? "text-correct" : "text-faint"}`}
                  >
                    {key}
                  </Text>
                  <Text
                    className={`flex-1 text-[15px] ${
                      isCorrect
                        ? "font-semibold text-correct-bright"
                        : dimmed
                          ? "text-faint"
                          : "text-ink"
                    }`}
                  >
                    {optionText(question, key)}
                  </Text>
                </View>
              );
            })}
          </View>

          {revealed ? (
            <View className="mt-5 border-l-2 border-correct pl-3">
              <Text className="text-sm leading-5 text-muted">{question.explanation}</Text>
            </View>
          ) : (
            <Text className="mt-6 text-center text-xs text-faint">
              decide mentally, then tap anywhere to reveal
            </Text>
          )}
        </Pressable>
      </Animated.View>

      <View className="mt-6 flex-row gap-3">
        <Pressable
          onPress={() => store.getState().grade(false)}
          disabled={!revealed}
          className={`flex-1 items-center rounded-xl border border-wrong/50 bg-wrong-dim/40 py-4 ${
            revealed ? "" : "opacity-0"
          }`}
        >
          <Text className="font-bold text-wrong-bright">✕ Got It Wrong</Text>
        </Pressable>
        <Pressable
          onPress={() => store.getState().grade(true)}
          disabled={!revealed}
          className={`flex-1 items-center rounded-xl border border-correct/50 bg-correct-dim/40 py-4 ${
            revealed ? "" : "opacity-0"
          }`}
        >
          <Text className="font-bold text-correct-bright">✓ Knew It</Text>
        </Pressable>
      </View>

      <Text className="mb-2 mt-3 text-center text-[11px] text-faint">
        {drill.index + 1} / {drill.queue.length}
        {card.reason === "new" ? " · new card" : ""}
        {card.reason === "early" ? " · ahead of schedule" : ""}
      </Text>
    </View>
  );
}
