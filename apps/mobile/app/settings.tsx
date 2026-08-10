import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Linking, Pressable, ScrollView, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { repo } from "@/lib/content";
import { DELETE_ACCOUNT_URL, PRIVACY_URL, TERMS_URL } from "@/lib/site-config";
import { getSupabase } from "@/lib/supabase";
import { useSettings, type ThemeChoice } from "@/lib/settings";
import { useJyotir, useJyotirStore } from "@/lib/store-provider";
import { cancelDailyReminder, scheduleDailyReminder } from "@/lib/notifications";

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
/** Opens a legal page in the system browser. Failing to open a link must
 *  never crash Settings, so the rejection is swallowed deliberately. */
function LinkRow({ label, url }: { label: string; url: string }) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`${label} (opens in your browser)`}
      onPress={() => void Linking.openURL(url).catch(() => {})}
      className="flex-row items-center justify-between gap-4 border-b border-edge/60 py-4"
    >
      <Text className="text-sm font-semibold text-ink">{label}</Text>
      <Text className="text-sm text-faint">↗</Text>
    </Pressable>
  );
}

const fmtTime = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
};

const GOAL_MIN = 5;
const GOAL_MAX = 500;

export default function SettingsScreen() {
  const router = useRouter();
  const { settings, update } = useSettings();
  const supabase = getSupabase();
  const store = useJyotirStore();
  const stats = useJyotir((s) => s.stats);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  // Drafts let the user type freely; values are validated and committed when
  // editing ends, with explicit feedback instead of silent clamping.
  const [nameDraft, setNameDraft] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [goalDraft, setGoalDraft] = useState<string | null>(null);
  const [goalError, setGoalError] = useState<string | null>(null);
  const [dateDraft, setDateDraft] = useState<string | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);

  const commitDate = () => {
    const raw = (dateDraft ?? settings.examDate ?? "").trim();
    if (!raw) {
      setDateError(null);
      update({ examDate: null });
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(raw) || Number.isNaN(Date.parse(raw))) {
      setDateError("Use YYYY-MM-DD (e.g. 2027-05-24).");
    } else {
      setDateError(null);
      update({ examDate: raw });
    }
    setDateDraft(null);
  };

  const commitName = () => {
    const clean = (nameDraft ?? settings.displayName).trim();
    if (!clean) {
      setNameError("Name can't be empty — keeping your previous name.");
    } else {
      setNameError(null);
      update({ displayName: clean });
    }
    setNameDraft(null);
  };

  const commitGoal = () => {
    const parsed = Number(goalDraft ?? settings.dailyGoal);
    if (!Number.isFinite(parsed) || goalDraft === "") {
      setGoalError(`Enter a number between ${GOAL_MIN} and ${GOAL_MAX}.`);
    } else if (parsed < GOAL_MIN || parsed > GOAL_MAX) {
      const clamped = Math.min(GOAL_MAX, Math.max(GOAL_MIN, Math.round(parsed)));
      setGoalError(`Goal must be ${GOAL_MIN}–${GOAL_MAX} cards/day — set to ${clamped}.`);
      update({ dailyGoal: clamped });
    } else {
      setGoalError(null);
      update({ dailyGoal: Math.round(parsed) });
    }
    setGoalDraft(null);
  };

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
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
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
              value={nameDraft ?? settings.displayName}
              onChangeText={(t) => {
                setNameDraft(t);
                setNameError(null);
              }}
              onBlur={commitName}
              className={`w-36 rounded-lg border bg-oled px-3 py-1.5 text-right text-sm text-ink ${
                nameError ? "border-wrong/60" : "border-edge"
              }`}
              placeholderTextColor="#55555C"
            />
          </Row>
          {nameError ? <Text className="pb-3 text-xs text-wrong-bright">{nameError}</Text> : null}
          <Row label="Leaderboard handle" hint="Your anonymized public identity.">
            <Text className="text-sm font-semibold text-correct">{settings.handle}</Text>
          </Row>
          <Row label="Daily goal" hint={`Cards per day (${GOAL_MIN}–${GOAL_MAX}).`}>
            <TextInput
              value={goalDraft ?? String(settings.dailyGoal)}
              onChangeText={(t) => {
                setGoalDraft(t.replace(/[^0-9]/g, ""));
                setGoalError(null);
              }}
              onBlur={commitGoal}
              keyboardType="number-pad"
              className={`w-20 rounded-lg border bg-oled px-3 py-1.5 text-right text-sm text-ink ${
                goalError ? "border-wrong/60" : "border-edge"
              }`}
            />
          </Row>
          {goalError ? <Text className="pb-3 text-xs text-wrong-bright">{goalError}</Text> : null}
        </Section>

        <Section title="Your exam">
          <Text className="pb-2 pt-3 text-xs text-muted">
            Featured on your home screen with a countdown.
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-3">
            <View className="flex-row gap-2">
              <Pressable
                onPress={() => update({ primaryExamId: null })}
                className={`rounded-full border px-3.5 py-1.5 ${
                  !settings.primaryExamId ? "border-correct bg-correct-dim/40" : "border-edge bg-oled"
                }`}
              >
                <Text className={`text-xs font-semibold ${!settings.primaryExamId ? "text-correct-bright" : "text-muted"}`}>
                  None
                </Text>
              </Pressable>
              {repo.exams().map((e) => (
                <Pressable
                  key={e.id}
                  onPress={() => update({ primaryExamId: e.id })}
                  className={`rounded-full border px-3.5 py-1.5 ${
                    settings.primaryExamId === e.id ? "border-correct bg-correct-dim/40" : "border-edge bg-oled"
                  }`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      settings.primaryExamId === e.id ? "text-correct-bright" : "text-muted"
                    }`}
                  >
                    {e.name}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
          <Row label="Exam date" hint="Powers your home-screen countdown.">
            <TextInput
              value={dateDraft ?? settings.examDate ?? ""}
              onChangeText={(t) => {
                setDateDraft(t);
                setDateError(null);
              }}
              onBlur={commitDate}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#55555C"
              className={`w-36 rounded-lg border bg-oled px-3 py-1.5 text-right text-sm text-ink ${
                dateError ? "border-wrong/60" : "border-edge"
              }`}
            />
          </Row>
          {dateError ? <Text className="pb-3 text-xs text-wrong-bright">{dateError}</Text> : null}
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

        {/* Play and the App Store both require the privacy policy to be
            reachable from inside the app, not only from the store listing. */}
        <Section title="Legal">
          <LinkRow label="Privacy policy" url={PRIVACY_URL} />
          <LinkRow label="Terms of use" url={TERMS_URL} />
          <LinkRow label="Delete your account" url={DELETE_ACCOUNT_URL} />
        </Section>

        <Text className="mt-2 text-center text-[11px] text-faint">
          Not affiliated with, endorsed by, or sponsored by CFA Institute, GARP, UPSC, or any exam
          body. CFA® and FRM® are trademarks of their respective owners.
        </Text>
        <Text className="mt-2 text-center text-[11px] text-faint">Recall · Drill. Read. Repeat.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
