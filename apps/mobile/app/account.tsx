import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { SupabaseLike } from "@jyotir/core";
import { getSupabase } from "@/lib/supabase";
import { useJyotirStore } from "@/lib/store-provider";

type Mode = "login" | "signup";

export default function AccountScreen() {
  const router = useRouter();
  const supabase = getSupabase();
  const store = useJyotirStore();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    void supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) =>
      setUserEmail(session?.user.email ?? null)
    );
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  const Header = () => (
    <Pressable onPress={() => router.back()} hitSlop={12}>
      <Text className="text-xs text-muted">← Back</Text>
    </Pressable>
  );

  if (!supabase) {
    return (
      <SafeAreaView className="flex-1 bg-oled">
        <View className="flex-1 px-5 pt-4">
          <Header />
          <Text className="mb-8 mt-3 text-2xl font-bold tracking-tight text-ink">Account</Text>
          <View className="rounded-2xl border border-edge bg-surface px-5 py-6">
            <Text className="text-sm font-semibold text-ink">Cloud sync isn't configured</Text>
            <Text className="mt-2 text-sm leading-relaxed text-muted">
              Your progress is saved on this device. To enable accounts, cross-device sync and
              leaderboards, add your Supabase keys (EXPO_PUBLIC_SUPABASE_URL / _ANON_KEY).
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (userEmail) {
    return (
      <SafeAreaView className="flex-1 bg-oled">
        <View className="flex-1 px-5 pt-4">
          <Header />
          <Text className="mb-8 mt-3 text-2xl font-bold tracking-tight text-ink">Account</Text>
          <View className="rounded-2xl border border-edge bg-surface px-5 py-6">
            <Text className="text-xs text-muted">Signed in as</Text>
            <Text className="mt-1 font-semibold text-ink">{userEmail}</Text>
            <Text className="mt-2 text-xs text-correct">Progress and ranks sync across your devices.</Text>
          </View>
          <View className="mt-3 gap-2.5">
            <Pressable
              onPress={async () => {
                setNotice("Syncing…");
                try {
                  const { data } = await supabase.auth.getUser();
                  if (data.user) {
                    const r = await store.getState().syncNow(supabase as unknown as SupabaseLike, data.user.id);
                    setNotice(`Synced · pushed ${r.pushedProgress}, pulled ${r.pulledProgress}`);
                  }
                } catch (e) {
                  setNotice(`Sync failed: ${(e as Error).message}`);
                }
              }}
              className="items-center rounded-xl bg-ink py-3.5 active:scale-[0.98]"
            >
              <Text className="font-bold text-black">Sync now</Text>
            </Pressable>
            <Pressable
              onPress={() => void supabase.auth.signOut()}
              className="items-center rounded-xl border border-edge py-3.5"
            >
              <Text className="font-semibold text-muted">Sign out</Text>
            </Pressable>
          </View>
          {notice ? <Text className="mt-3 text-center text-xs text-muted">{notice}</Text> : null}
        </View>
      </SafeAreaView>
    );
  }

  const submit = async () => {
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "signup") {
        const { data, error: err } = await supabase.auth.signUp({ email, password });
        if (err) throw err;
        if (!data.session) setNotice(`Almost there — check ${email} to confirm your account.`);
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="pt-4 pb-12">
        <Header />
        <Text className="mb-8 mt-3 text-2xl font-bold tracking-tight text-ink">Account</Text>

        <View className="mb-5 flex-row rounded-xl border border-edge bg-surface p-1">
          {(["login", "signup"] as Mode[]).map((m) => (
            <Pressable
              key={m}
              onPress={() => setMode(m)}
              className={`flex-1 items-center rounded-lg py-2 ${mode === m ? "bg-raised" : ""}`}
            >
              <Text className={`text-sm font-semibold ${mode === m ? "text-ink" : "text-muted"}`}>
                {m === "login" ? "Log in" : "Sign up"}
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="gap-2.5">
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="#55555C"
            autoCapitalize="none"
            keyboardType="email-address"
            className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-ink"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password (6+ characters)"
            placeholderTextColor="#55555C"
            secureTextEntry
            className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-ink"
          />
          <Pressable
            onPress={submit}
            disabled={busy}
            className="mt-1 items-center rounded-xl bg-correct py-3.5 active:scale-[0.98]"
            style={{ opacity: busy ? 0.6 : 1 }}
          >
            <Text className="font-bold text-black">
              {busy ? "…" : mode === "signup" ? "Create account" : "Log in"}
            </Text>
          </Pressable>
        </View>

        {notice ? (
          <Text className="mt-4 rounded-xl border border-correct/40 bg-correct-dim/30 px-4 py-3 text-sm text-correct-bright">
            {notice}
          </Text>
        ) : null}
        {error ? <Text className="mt-4 text-sm text-wrong-bright">{error}</Text> : null}
      </ScrollView>
    </SafeAreaView>
  );
}
