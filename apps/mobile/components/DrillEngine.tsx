import { useEffect } from "react";
import { Pressable, ScrollView, Text, Vibration, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  achievementById,
  OPTION_KEYS,
  optionText,
  scheduleExplanation,
  type AnsweredCard,
  type OptionKey
} from "@jyotir/core";
import { useJyotir, useJyotirStore } from "@/lib/store-provider";

/**
 * The drill loop, mobile edition — auto-graded multiple choice:
 *   tap an option  -> the app grades it (right/wrong is derived, not self-reported)
 *   the correct answer + explanation are revealed
 *   tap Next       -> the next question (or the review screen at the end)
 * The queue is fully in memory; every transition is a synchronous store update.
 */
export function DrillEngine({
  topicId,
  onStudy,
  reviewMode = false,
  bookmarkMode = false,
  customTopicIds,
  limit,
  onExit,
  onNextTopic,
  onExamHome
}: {
  topicId: string;
  onStudy?: () => void;
  /** Cross-exam review: due-only queue, no study tab. */
  reviewMode?: boolean;
  /** Drill only the user's bookmarked questions. */
  bookmarkMode?: boolean;
  /** Custom drill across an explicit set of topics. */
  customTopicIds?: string[];
  /** Cap the session length (e.g. the 5-card onboarding taste session). */
  limit?: number;
  /** Secondary action on the completion screen (e.g. back to home). */
  onExit?: () => void;
  /** Completion action: advance to the next topic card. */
  onNextTopic?: () => void;
  /** Completion action: return to the exam's topic list. */
  onExamHome?: () => void;
}) {
  const store = useJyotirStore();
  const drill = useJyotir((s) => s.drill);
  const ready = useJyotir((s) => s.ready);
  const progress = useJyotir((s) => s.progress);
  const newlyUnlocked = useJyotir((s) => s.newlyUnlocked);
  const bookmarks = useJyotir((s) => s.bookmarks);

  const begin = () => {
    const st = store.getState();
    st.clearNewlyUnlocked();
    if (reviewMode) st.startReview();
    else if (bookmarkMode) st.startBookmarkedDrill();
    else if (customTopicIds) st.startCustomDrill(customTopicIds);
    else st.startDrill(topicId, limit);
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

  if (!ready || drill.topicId !== topicId) return <View className="flex-1" />;

  const card = drill.queue[drill.index];

  // ── Review screen: every answered question, with the verdict + correct answer.
  if (drill.phase === "complete" || !card) {
    const { knew, wrong } = drill.stats;
    const total = knew + wrong;
    const caughtUp = reviewMode && total === 0;
    return (
      <View className="flex-1">
        <ScrollView contentContainerClassName="pb-4" showsVerticalScrollIndicator={false}>
          <View className="items-center py-2">
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
                  <Text className="font-semibold text-correct">{knew} correct</Text>
                  {" · "}
                  <Text className="font-semibold text-wrong-bright">{wrong} wrong</Text>
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
            <View className="mt-4 rounded-2xl border border-correct/40 bg-correct-dim/30 p-3">
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

          {drill.answers.length > 0 && (
            <>
              <Text className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wider text-faint">
                Review
              </Text>
              <View className="gap-2.5">
                {drill.answers.map((a, i) => (
                  <ReviewRow key={`${a.question.id}-${i}`} answer={a} index={i} />
                ))}
              </View>
            </>
          )}
        </ScrollView>

        <View className="gap-2.5 pt-3">
          {onNextTopic && (
            <Pressable
              onPress={() => leave(onNextTopic)}
              className="flex-row items-center justify-center gap-1.5 rounded-xl bg-correct py-3.5 active:scale-[0.98]"
            >
              <Text className="font-bold text-black">Next topic</Text>
              <Ionicons name="arrow-forward" size={16} color="#000000" />
            </Pressable>
          )}
          {!caughtUp && (
            <Pressable
              onPress={start}
              className="items-center rounded-xl bg-ink py-3.5 active:scale-[0.98]"
            >
              <Text className="font-bold text-black">
                {reviewMode ? "Review Again" : "Drill this topic again"}
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
          {onExamHome && (
            <Pressable
              onPress={() => leave(onExamHome)}
              className="items-center rounded-xl border border-edge py-3.5"
            >
              <Text className="font-semibold text-muted">Back to exam home</Text>
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
  const answered = drill.phase === "answered";
  const selected = drill.selected;
  const progressPct = (drill.index / drill.queue.length) * 100;
  const isLast = drill.index + 1 >= drill.queue.length;

  return (
    <View className="flex-1">
      <View className="mb-5 flex-row items-center gap-3">
        <Text className="text-xs font-semibold text-muted">
          Q {drill.index + 1} / {drill.queue.length}
        </Text>
        <View className="h-1.5 flex-1 overflow-hidden rounded-full bg-raised">
          <View className="h-full rounded-full bg-correct" style={{ width: `${progressPct}%` }} />
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

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Text className="text-lg font-semibold leading-7 text-ink">{question.text}</Text>

        <View className="mt-6 gap-2.5">
          {OPTION_KEYS.map((key) => {
            const isCorrect = answered && key === question.correctOption;
            const isWrongPick = answered && key === selected && key !== question.correctOption;
            const dimmed = answered && !isCorrect && !isWrongPick;
            return (
              <Pressable
                key={key}
                disabled={answered}
                onPress={() => {
                  // Haptic grade feedback: short pulse right, double buzz wrong.
                  if (key === question.correctOption) Vibration.vibrate(30);
                  else Vibration.vibrate([0, 80, 40, 80]);
                  store.getState().answer(key);
                }}
                className={`flex-row items-baseline gap-3 rounded-xl border px-4 py-3.5 active:scale-[0.97] active:bg-raised ${
                  isCorrect
                    ? "border-correct bg-correct-dim/60"
                    : isWrongPick
                      ? "border-wrong bg-wrong-dim/50"
                      : dimmed
                        ? "border-edge/50"
                        : "border-edge bg-surface"
                }`}
              >
                <Text
                  className={`text-xs font-bold ${
                    isCorrect ? "text-correct" : isWrongPick ? "text-wrong-bright" : "text-faint"
                  }`}
                >
                  {key}
                </Text>
                <Text
                  className={`flex-1 text-[15px] ${
                    isCorrect
                      ? "font-semibold text-correct-bright"
                      : isWrongPick
                        ? "font-semibold text-wrong-bright"
                        : dimmed
                          ? "text-faint"
                          : "text-ink"
                  }`}
                >
                  {optionText(question, key)}
                </Text>
                {isCorrect && <Ionicons name="checkmark" size={16} color="#34D399" />}
                {isWrongPick && <Ionicons name="close" size={16} color="#F87171" />}
              </Pressable>
            );
          })}
        </View>

        {answered ? (
          <View className="mt-5 gap-2.5">
            {/* Lead with WHY the user's wrong pick is wrong (when authored) —
                the highest-value feedback moment — then the correct answer. */}
            {selected &&
              selected !== question.correctOption &&
              question.distractors?.[selected] && (
                <View className="border-l-2 border-wrong pl-3">
                  <Text className="text-sm leading-5 text-wrong-bright">
                    Why not {selected}: {question.distractors[selected]}
                  </Text>
                </View>
              )}
            <View className="border-l-2 border-correct pl-3">
              <Text className="text-sm leading-5 text-muted">{question.explanation}</Text>
            </View>
            {/* Scheduling transparency: why this card comes back when it does. */}
            {progress[question.id] && (
              <Text className="pl-3 text-xs leading-4 text-faint">
                {scheduleExplanation(progress[question.id]!, selected === question.correctOption)}
              </Text>
            )}
          </View>
        ) : (
          <Text className="mt-6 text-center text-xs text-faint">tap the answer you think is correct</Text>
        )}
      </ScrollView>

      {answered && (
        <Pressable
          onPress={() => store.getState().next()}
          className="mt-4 items-center rounded-xl bg-ink py-4 active:scale-[0.98]"
        >
          <Text className="font-bold text-black">{isLast ? "See results" : "Next question"}</Text>
        </Pressable>
      )}

      <Text className="mb-2 mt-3 text-center text-[11px] text-faint">
        {drill.index + 1} / {drill.queue.length}
        {card.reason === "new" ? " · new card" : ""}
        {card.reason === "early" ? " · ahead of schedule" : ""}
      </Text>
    </View>
  );
}

/** One row on the review screen: the question, the user's pick and the answer. */
function ReviewRow({ answer, index }: { answer: AnsweredCard; index: number }) {
  const { question, selected, correct, wasCorrect } = answer;
  const label = (key: OptionKey) => `${key}. ${optionText(question, key)}`;
  return (
    <View
      className={`rounded-2xl border px-4 py-3 ${
        wasCorrect ? "border-correct/40 bg-correct-dim/15" : "border-wrong/40 bg-wrong-dim/15"
      }`}
    >
      <View className="flex-row items-start gap-2">
        <Ionicons
          name={wasCorrect ? "checkmark-circle" : "close-circle"}
          size={18}
          color={wasCorrect ? "#34D399" : "#F87171"}
        />
        <Text className="flex-1 text-sm font-semibold leading-5 text-ink">
          {index + 1}. {question.text}
        </Text>
      </View>
      <View className="mt-2 pl-6">
        <Text className={`text-xs ${wasCorrect ? "text-correct-bright" : "text-wrong-bright"}`}>
          Your answer: {label(selected)}
        </Text>
        {!wasCorrect && (
          <Text className="mt-0.5 text-xs text-correct-bright">Correct: {label(correct)}</Text>
        )}
        {!wasCorrect && question.distractors?.[selected] && (
          <Text className="mt-1 text-[11px] leading-4 text-wrong-bright">
            Why not {selected}: {question.distractors[selected]}
          </Text>
        )}
        <Text className="mt-1.5 text-[11px] leading-4 text-muted">{question.explanation}</Text>
      </View>
    </View>
  );
}
