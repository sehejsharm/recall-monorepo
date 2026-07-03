import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useSettings } from "@/lib/settings";
import { scheduleDailyReminder } from "@/lib/notifications";

interface Slide {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  body: string;
}

const SLIDES: Slide[] = [
  { icon: "flash", title: "Welcome to Recall", body: "Master tough exams by active recall — short notes, then rapid-fire questions. No feeds, no fluff." },
  { icon: "albums", title: "The drill loop", body: "See a question, tap the answer you think is right, and the app grades it instantly. At the end you review every question and the correct answers." },
  { icon: "flame", title: "Spaced repetition + streaks", body: "We schedule each card with SM-2 so you review right before you forget. Drill daily to build your streak." },
  { icon: "trophy", title: "Earn XP and level up", body: "Every card earns XP, combos give bonuses, and achievements await. Climb from Novice to Legend." },
  { icon: "podium", title: "Compete on the ranks", body: "Sign in from Account (optional) to climb the anonymized leaderboards. Your real name stays private." }
];

/**
 * First-run flow. Step 0 is a MANDATORY name capture — the app cannot be used
 * without a name, and this step has no skip. After that comes the skippable
 * feature tour, ending in a soft notification opt-in. Signing in stays optional
 * (offered later in Account), so a broken/absent cloud backend never blocks entry.
 */
export function Onboarding() {
  const { settings, update } = useSettings();
  const [name, setName] = useState("");
  const [i, setI] = useState(0);
  const [busy, setBusy] = useState(false);

  // Nothing to do once the user is named and has seen (or skipped) the tour.
  if (settings.named && settings.onboarded) return null;

  // ── Mandatory name gate ────────────────────────────────────────────────
  if (!settings.named) {
    const trimmed = name.trim();
    const valid = trimmed.length >= 2;
    return (
      <View className="absolute inset-0 z-[60] bg-oled">
        <SafeAreaView className="flex-1 px-6">
          <View className="flex-1 items-center justify-center">
            <View className="h-20 w-20 items-center justify-center rounded-3xl bg-raised">
              <Ionicons name="person" size={40} color="#10B981" />
            </View>
            <Text className="mt-7 text-2xl font-bold tracking-tight text-ink">
              What should we call you?
            </Text>
            <Text className="mt-3 max-w-sm text-center text-[15px] leading-relaxed text-muted">
              Enter your name to get started. This stays on your device — your public
              leaderboard identity is always anonymized.
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Your name"
              placeholderTextColor="#55555C"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="done"
              maxLength={24}
              onSubmitEditing={() => valid && update({ displayName: trimmed, named: true })}
              className="mt-8 w-full rounded-2xl border border-edge bg-surface px-4 py-3.5 text-center text-base text-ink"
            />
          </View>
          <Pressable
            onPress={() => update({ displayName: trimmed, named: true })}
            disabled={!valid}
            className="mb-4 items-center rounded-2xl bg-correct py-4 active:scale-[0.98]"
            style={{ opacity: valid ? 1 : 0.4 }}
          >
            <Text className="text-base font-bold text-black">Continue</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    );
  }

  // ── Skippable feature tour ─────────────────────────────────────────────
  const PERMISSION_STEP = SLIDES.length;
  const onPermissionStep = i === PERMISSION_STEP;
  const stepCount = SLIDES.length + 1;
  const finish = () => update({ onboarded: true });

  const enableReminders = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const granted = await scheduleDailyReminder(settings.reminderMinutes);
      update({ reminderOn: granted, onboarded: true });
    } catch {
      finish();
    } finally {
      setBusy(false);
    }
  };

  const slide = onPermissionStep ? null : SLIDES[i]!;

  return (
    <View className="absolute inset-0 z-[60] bg-oled">
      <SafeAreaView className="flex-1 px-6">
        <Pressable onPress={finish} hitSlop={12} className="absolute right-5 top-4 z-10">
          <Text className="text-xs font-semibold text-faint">Skip</Text>
        </Pressable>

        <View className="flex-1 items-center justify-center">
          <View className="h-20 w-20 items-center justify-center rounded-3xl bg-raised">
            <Ionicons
              name={onPermissionStep ? "notifications" : slide!.icon}
              size={40}
              color="#10B981"
            />
          </View>
          <Text className="mt-7 text-2xl font-bold tracking-tight text-ink">
            {onPermissionStep ? "Never miss a day" : slide!.title}
          </Text>
          <Text className="mt-3 max-w-sm text-center text-[15px] leading-relaxed text-muted">
            {onPermissionStep
              ? "Allow notifications and we'll send one gentle daily nudge when your cards are due. No spam — just your streak. Change it anytime in Settings."
              : slide!.body}
          </Text>
        </View>

        <View className="mb-6 flex-row justify-center gap-1.5">
          {Array.from({ length: stepCount }).map((_, idx) => (
            <View
              key={idx}
              className={`h-1.5 rounded-full ${idx === i ? "w-5 bg-correct" : "w-1.5 bg-edge"}`}
            />
          ))}
        </View>

        {onPermissionStep ? (
          <>
            <Pressable
              onPress={enableReminders}
              disabled={busy}
              className="mb-3 items-center rounded-2xl bg-correct py-4 active:scale-[0.98]"
            >
              <Text className="text-base font-bold text-black">
                {busy ? "Enabling…" : "Enable daily reminder"}
              </Text>
            </Pressable>
            <Pressable onPress={finish} disabled={busy} className="mb-4 items-center py-2">
              <Text className="text-sm font-semibold text-muted">Maybe later</Text>
            </Pressable>
          </>
        ) : (
          <Pressable
            onPress={() => setI((n) => n + 1)}
            className="mb-4 items-center rounded-2xl bg-correct py-4 active:scale-[0.98]"
          >
            <Text className="text-base font-bold text-black">Next</Text>
          </Pressable>
        )}
      </SafeAreaView>
    </View>
  );
}
