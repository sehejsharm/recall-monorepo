import { useRouter } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  OPTION_KEYS,
  optionOrder,
  optionText,
  sampleQuestions,
  scoreMock,
  type OptionKey,
  type Question
} from "@jyotir/core";
import { repo } from "@/lib/content";

type Phase = "config" | "running" | "result";
const COUNTS = [10, 20, 30];

export default function MockScreen() {
  const router = useRouter();
  const exams = repo.exams();
  const [examId, setExamId] = useState(exams[0]?.id ?? "");
  const [count, setCount] = useState(10);
  const [phase, setPhase] = useState<Phase>("config");

  const [paper, setPaper] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [picks, setPicks] = useState<Record<string, OptionKey | null>>({});
  const [remaining, setRemaining] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const durationSec = count * 60; // 1 min/question

  const start = () => {
    const pool = repo.questionsByExam(examId);
    const qs = sampleQuestions(pool, count);
    setPaper(qs);
    setPicks({});
    setIdx(0);
    setRemaining(durationSec);
    setPhase("running");
  };

  // countdown
  useEffect(() => {
    if (phase !== "running") return;
    timer.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(timer.current!);
          setPhase("result");
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [phase]);

  const result = useMemo(
    () => (phase === "result" ? scoreMock(paper, picks) : null),
    [phase, paper, picks]
  );

  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  if (phase === "config") {
    return (
      <SafeAreaView className="flex-1 bg-oled">
        <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
          <Pressable onPress={() => router.replace("/")} hitSlop={12}>
            <Text className="text-xs text-muted">← Home</Text>
          </Pressable>
          <Text className="mb-1 mt-2 text-2xl font-bold tracking-tight text-ink">Mock test</Text>
          <Text className="mb-6 text-xs text-muted">Timed, scored, one minute per question. No spaced-repetition.</Text>

          <Text className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">Exam</Text>
          <View className="mb-6 gap-2">
            {exams.map((e) => (
              <Pressable
                key={e.id}
                onPress={() => setExamId(e.id)}
                className={`rounded-xl border px-4 py-3 ${
                  examId === e.id ? "border-correct bg-correct-dim/30" : "border-edge bg-surface"
                }`}
              >
                <Text className={`text-sm font-semibold ${examId === e.id ? "text-correct-bright" : "text-ink"}`}>
                  {e.name}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">Questions</Text>
          <View className="mb-8 flex-row gap-2">
            {COUNTS.map((c) => (
              <Pressable
                key={c}
                onPress={() => setCount(c)}
                className={`flex-1 items-center rounded-xl border py-3 ${
                  count === c ? "border-correct bg-correct-dim/30" : "border-edge bg-surface"
                }`}
              >
                <Text className={`text-base font-bold ${count === c ? "text-correct-bright" : "text-ink"}`}>{c}</Text>
                <Text className="text-[10px] text-faint">{c} min</Text>
              </Pressable>
            ))}
          </View>

          <Pressable onPress={start} className="items-center rounded-2xl bg-correct py-4 active:scale-[0.98]">
            <Text className="text-base font-bold text-black">Start mock test</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (phase === "running") {
    const q = paper[idx]!;
    const picked = picks[q.id] ?? null;
    const last = idx === paper.length - 1;
    return (
      <SafeAreaView className="flex-1 bg-oled">
        <View className="flex-1 px-5 pt-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-xs text-muted">
              Q{idx + 1} / {paper.length}
            </Text>
            <Text className={`text-sm font-bold ${remaining < 30 ? "text-wrong-bright" : "text-correct"}`}>
              {mmss(remaining)}
            </Text>
          </View>
          <View className="mt-2 h-1 w-full overflow-hidden rounded-full bg-raised">
            <View className="h-full rounded-full bg-correct" style={{ width: `${((idx + 1) / paper.length) * 100}%` }} />
          </View>

          <ScrollView className="mt-5 flex-1" showsVerticalScrollIndicator={false}>
            <Text className="text-lg font-semibold leading-snug text-ink">{q.text}</Text>
            <View className="mt-5 gap-2.5">
              {optionOrder(q.id).map((k, i) => {
                const on = picked === k;
                return (
                  <Pressable
                    key={k}
                    onPress={() => setPicks((p) => ({ ...p, [q.id]: k }))}
                    className={`flex-row items-center gap-3 rounded-xl border px-4 py-3.5 ${
                      on ? "border-correct bg-correct-dim/30" : "border-edge bg-surface"
                    }`}
                  >
                    <Text className={`text-sm font-bold ${on ? "text-correct" : "text-faint"}`}>
                      {OPTION_KEYS[i]}
                    </Text>
                    <Text className="flex-1 text-sm text-ink">{optionText(q, k)}</Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>

          <View className="flex-row gap-2.5 py-3">
            <Pressable
              onPress={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              className="flex-1 items-center rounded-xl border border-edge py-3.5"
              style={{ opacity: idx === 0 ? 0.4 : 1 }}
            >
              <Text className="font-semibold text-muted">Back</Text>
            </Pressable>
            <Pressable
              onPress={() => (last ? setPhase("result") : setIdx((i) => i + 1))}
              className="flex-1 items-center rounded-xl bg-ink py-3.5"
            >
              <Text className="font-bold text-black">{last ? "Submit" : "Next"}</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // result
  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Text className="text-2xl font-bold tracking-tight text-ink">Result</Text>
        <View className="my-5 items-center rounded-2xl border border-edge bg-surface py-7">
          <Text className="text-5xl font-bold text-correct">{result?.scorePct ?? 0}%</Text>
          <Text className="mt-2 text-sm text-muted">
            {result?.correct ?? 0} / {result?.total ?? 0} correct · {result?.answered ?? 0} answered
          </Text>
        </View>

        <Text className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">Review</Text>
        <View className="gap-2">
          {paper.map((q, i) => {
            const a = result?.answers[i];
            const ok = a?.correct;
            return (
              <View key={q.id} className={`rounded-xl border px-4 py-3 ${ok ? "border-correct/40 bg-correct-dim/20" : "border-wrong/40 bg-wrong-dim/20"}`}>
                <Text className="text-sm text-ink" numberOfLines={2}>
                  {i + 1}. {q.text}
                </Text>
                <Text className="mt-1.5 text-xs text-muted">
                  Correct: <Text className="font-semibold text-correct">{q.correctOption}</Text>
                  {a?.picked ? (
                    <Text className={ok ? "text-correct" : "text-wrong-bright"}>  ·  You: {a.picked}</Text>
                  ) : (
                    <Text className="text-faint">  ·  skipped</Text>
                  )}
                </Text>
                <Text className="mt-1 text-xs text-faint">{q.explanation}</Text>
              </View>
            );
          })}
        </View>

        <View className="mt-6 gap-2.5">
          <Pressable onPress={() => setPhase("config")} className="items-center rounded-xl bg-ink py-3.5">
            <Text className="font-bold text-black">New mock test</Text>
          </Pressable>
          <Pressable onPress={() => router.replace("/")} className="items-center rounded-xl border border-edge py-3.5">
            <Text className="font-semibold text-muted">Done</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
