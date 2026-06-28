import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSupabase } from "@/lib/supabase";
import { useSettings, type ThemeChoice } from "@/lib/settings";
import { useJyotir, useJyotirStore } from "@/lib/store-provider";
import { cancelDailyReminder, scheduleDailyReminder } from "@/lib/notifications";
import { BottomNav } from "@/components/BottomNav";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="mb-5">
      <Text className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-faint">{title}</Text>
      <View className="rounded-2xl border border-edge bg-surface px-4">{children}</View>
    </View>
  );
}
function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <View className="flex-row items-center justify-between gap-4 border-b border-edge/60 py-4">
      <View className="min-w-0 flex-1">
        <Text className="text-sm font-semibold text-ink">{label}</Text>
        {hint ? <Text className="mt-0.5 text-xs text-muted">{hint}</Text> : null}
      </View>
      <View className="shrink-0">{children}</View>
    </View>
  );
}

const fmtTime = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
};

export default function SettingsScreen() {
  const router = useRouter();
  const { settings, update } = useSettings();
  const supabase = getSupabase();
  const store = useJyotirStore();
  const stats = useJyotir((s) => s.stats);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (supabase) void supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? null));
  }, [supabase]);

  const themes: ThemeChoice[] = ["dark", "light", "system"];

  const onReminderToggle = async (on: boolean) => {
    update({ reminderOn: on });
    if (on) {
      const ok = await scheduleDailyReminder(settings.reminderMinutes);
      if (!ok) update({ reminderOn: false });
    } else {
      await cancelDailyReminder();
    }
  };

  const bumpReminderTime = async () => {
    // cycle through common reminder hours: 8,12,18,20,21
    const slots = [8 * 60, 12 * 60, 18 * 60, 20 * 60, 21 * 60];
    const idx = slots.indexOf(settings.reminderMinutes);
    const next = slots[(idx + 1) % slots.length]!;
    update({ reminderMinutes: next });
    if (settings.reminderOn) await scheduleDailyReminder(next);
  };

  return (
    <SafeAreaView className="flex-1 bg-oled" edges={["top"]}>
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8 pb-28">
        <Text className="mb-6 text-2xl font-bold tracking-tight text-ink">Settings</Text>

        <Section title="Account">
          <Pressable onPress={() => router.push("/account")} className="flex-row items-center justify-between py-4">
            <View>
              <Text className="text-sm font-semibold text-ink">{userEmail ? "Signed in" : "Sign in / sync"}</Text>
              <Text className="mt-0.5 text-xs text-muted">
                {userEmail ?? "Back up progress + climb the ranks across devices."}
              </Text>
            </View>
            <Text className="text-muted">›</Text>
          </Pressable>
        </Section>

        <Section title="Profile">
          <Row label="Display name" hint="Private to you.">
            <TextInput
              value={settings.displayName}
              onChangeText={(t) => update({ displayName: t })}
              className="w-36 rounded-lg border border-edge bg-oled px-3 py-1.5 text-right text-sm text-ink"
              placeholderTextColor="#55555C"
            />
          </Row>
          <Row label="Leaderboard handle" hint="Your anonymized public identity.">
            <Text className="text-sm font-semibold text-correct">{settings.handle}</Text>
          </Row>
          <Row label="Daily goal" hint="Cards per day.">
            <TextInput
              value={String(settings.dailyGoal)}
              onChangeText={(t) => update({ dailyGoal: Math.max(5, Number(t.replace(/[^0-9]/g, "")) || 5) })}
              keyboardType="number-pad"
              className="w-20 rounded-lg border border-edge bg-oled px-3 py-1.5 text-right text-sm text-ink"
            />
          </Row>
        </Section>

        <Section title="Reminders">
          <Row label="Daily reminder" hint="A nudge to clear your due cards.">
            <Switch
              value={settings.reminderOn}
              onValueChange={onReminderToggle}
              trackColor={{ true: "#10B981", false: "#26262B" }}
              thumbColor="#FAFAFA"
            />
          </Row>
          <Pressable onPress={bumpReminderTime} className="flex-row items-center justify-between py-4" disabled={!settings.reminderOn}>
            <Text className={`text-sm font-semibold ${settings.reminderOn ? "text-ink" : "text-faint"}`}>Reminder time</Text>
            <Text className={`text-sm font-semibold ${settings.reminderOn ? "text-correct" : "text-faint"}`}>
              {fmtTime(settings.reminderMinutes)}
            </Text>
          </Pressable>
        </Section>

        <Section title="Preferences">
          <Row label="Theme" hint="Appearance of the app.">
            <View className="flex-row rounded-lg border border-edge bg-oled p-0.5">
              {themes.map((t) => (
                <Pressable
                  key={t}
                  onPress={() => update({ theme: t })}
                  className={`rounded-md px-2.5 py-1 ${settings.theme === t ? "bg-raised" : ""}`}
                >
                  <Text className={`text-xs font-semibold capitalize ${settings.theme === t ? "text-ink" : "text-muted"}`}>
                    {t}
                  </Text>
                </Pressable>
              ))}
            </View>
          </Row>
          <Row label="Join global leaderboard" hint="Sync your XP to the anonymized ranks.">
            <Switch
              value={settings.leaderboardOptIn}
              onValueChange={(v) => update({ leaderboardOptIn: v })}
              trackColor={{ true: "#10B981", false: "#26262B" }}
              thumbColor="#FAFAFA"
            />
          </Row>
        </Section>

        <Section title="Data">
          <Pressable
            onPress={() => {
              if (!confirmReset) {
                setConfirmReset(true);
                return;
              }
              store.getState().resetAll();
              setConfirmReset(false);
            }}
            className="py-4"
          >
            <Text className={`text-sm font-semibold ${confirmReset ? "text-wrong-bright" : "text-wrong"}`}>
              {confirmReset ? "Tap again to erase all progress" : "Reset all progress"}
            </Text>
            <Text className="mt-0.5 text-xs text-muted">
              {stats.cardsGraded} cards drilled · {stats.xp} XP. This can't be undone.
            </Text>
          </Pressable>
        </Section>

        <Text className="mt-2 text-center text-[11px] text-faint">Recall · Drill. Read. Repeat.</Text>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
