import { useEffect, type ReactNode } from "react";
import { AppState } from "react-native";
import type { SupabaseLike } from "@jyotir/core";
import { getSupabase } from "./supabase";
import { pushStats } from "./leaderboard";
import { useJyotirStore } from "./store-provider";

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
      try {
        await store.getState().syncNow(supabase as unknown as SupabaseLike, userId);
        await pushStats(supabase, userId, store.getState().stats);
      } catch (err) {
        console.error("[recall] sync failed:", err);
      } finally {
        inFlight = false;
      }
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
