import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useSettings } from "@/lib/settings";

interface Slide {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  body: string;
}

const SLIDES: Slide[] = [
  { icon: "flash", title: "Welcome to Recall", body: "Master tough exams by active recall — short notes, then rapid-fire questions. No feeds, no fluff." },
  { icon: "albums", title: "The drill loop", body: "See a question, decide in your head, tap to reveal, then mark Knew It or Got It Wrong. The next card is instant." },
  { icon: "flame", title: "Spaced repetition + streaks", body: "We schedule each card with SM-2 so you review right before you forget. Drill daily to build your streak." },
  { icon: "trophy", title: "Earn XP and level up", body: "Every card earns XP, combos give bonuses, and achievements await. Climb from Novice to Legend." },
  { icon: "podium", title: "Compete on the ranks", body: "Sign in to climb the anonymized global and per-exam leaderboards. Your real name stays private." }
];

/** First-run tour, shown once after the splash. */
export function Onboarding() {
  const { settings, update } = useSettings();
  const [i, setI] = useState(0);
  if (settings.onboarded) return null;

  const slide = SLIDES[i]!;
  const last = i === SLIDES.length - 1;
  const finish = () => update({ onboarded: true });

  return (
    <View className="absolute inset-0 z-[60] bg-oled">
      <SafeAreaView className="flex-1 px-6">
        <Pressable onPress={finish} hitSlop={12} className="absolute right-5 top-4 z-10">
          <Text className="text-xs font-semibold text-faint">Skip</Text>
        </Pressable>

        <View className="flex-1 items-center justify-center">
          <View className="h-20 w-20 items-center justify-center rounded-3xl bg-raised">
            <Ionicons name={slide.icon} size={40} color="#10B981" />
          </View>
          <Text className="mt-7 text-2xl font-bold tracking-tight text-ink">{slide.title}</Text>
          <Text className="mt-3 max-w-sm text-center text-[15px] leading-relaxed text-muted">
            {slide.body}
          </Text>
        </View>

        <View className="mb-6 flex-row justify-center gap-1.5">
          {SLIDES.map((_, idx) => (
            <View
              key={idx}
              className={`h-1.5 rounded-full ${idx === i ? "w-5 bg-correct" : "w-1.5 bg-edge"}`}
            />
          ))}
        </View>
        <Pressable
          onPress={() => (last ? finish() : setI((n) => n + 1))}
          className="mb-4 items-center rounded-2xl bg-correct py-4 active:scale-[0.98]"
        >
          <Text className="text-base font-bold text-black">{last ? "Start drilling" : "Next"}</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}
