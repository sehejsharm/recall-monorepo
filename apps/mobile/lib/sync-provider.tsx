import { useEffect, type ReactNode } from "react";
import { AppState } from "react-native";
import { statsSignature, type SupabaseLike } from "@jyotir/core";
import { getSupabase } from "./supabase";
import { kv } from "./kv";
import { pushStats } from "./leaderboard";
import { useJyotirStore } from "./store-provider";

// Signature of the last stats we uploaded. Persisted so a cold app start —
// not just a foreground — skips re-pushing identical stats (which would bump
// user_stats.updated_at and demote the user on XP ties).
const LAST_PUSH_KEY = "recall.lastStatsPush.v1";

/**
 * Background progress sync. No-op when Supabase is unconfigured or signed
 * out, so the offline-first experience is never blocked on the network.
 * Syncs on sign-in and whenever the app returns to the foreground.
 */
export function SyncProvider({ children }: { children: ReactNode }) {
  const store = useJyotirStore();

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    let userId: string | null = null;
    let inFlight = false;

    const sync = async () => {
      if (!userId || inFlight) return;
      inFlight = true;
      // Progress sync and the leaderboard stats push are independent:
      // a failure in one must never silently starve the other (a failing
      // progress push used to keep signed-in users off the leaderboard).
      try {
        await store.getState().syncNow(supabase as unknown as SupabaseLike, userId);
      } catch (err) {
        console.error("[recall] progress sync failed:", err);
      }
      // Only push stats when they actually changed since our last upload —
      // never on a bare foreground. Keeps the leaderboard tie-break honest.
      try {
        const stats = store.getState().stats;
        const sig = statsSignature(stats);
        if (kv.get(LAST_PUSH_KEY) !== sig) {
          const pushed = await pushStats(supabase, userId, stats);
          if (pushed) kv.set(LAST_PUSH_KEY, sig);
        }
      } catch (err) {
        console.error("[recall] leaderboard stats push failed:", err);
      }
      inFlight = false;
    };

    void supabase.auth.getSession().then(({ data }) => {
      userId = data.session?.user.id ?? null;
      void sync();
    });
    const { data: authSub } = supabase.auth.onAuthStateChange((_e, session) => {
      userId = session?.user.id ?? null;
      void sync();
    });
    const appSub = AppState.addEventListener("change", (s) => {
      if (s === "active") void sync();
    });

    return () => {
      authSub.subscription.unsubscribe();
      appSub.remove();
    };
  }, [store]);

  return <>{children}</>;
}
