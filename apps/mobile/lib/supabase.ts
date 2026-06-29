import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { kvAsyncStorage } from "./kv";

/**
 * Optional Supabase client. The app is fully functional offline/anonymous;
 * when EXPO_PUBLIC_SUPABASE_* are present, signed-in users get auth +
 * cross-device progress sync + leaderboards. The auth session is persisted
 * in our SQLite-backed kv store so it survives restarts.
 */
let cached: SupabaseClient | null | undefined;

// Client-safe project defaults (public URL + publishable key, protected by
// row-level security) so builds work without env wiring. EXPO_PUBLIC_* env
// vars, when present, take precedence.
const DEFAULT_URL = "https://uhssdbbgyrdmhljzneyv.supabase.co";
const DEFAULT_PUBLISHABLE_KEY = "sb_publishable_GY-_VWRSztykGe3p472FqQ_bFfBghyk";

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? DEFAULT_URL;
  const key =
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    DEFAULT_PUBLISHABLE_KEY;
  cached =
    url && key
      ? createClient(url, key, {
          auth: {
            storage: kvAsyncStorage,
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: false
          }
        })
      : null;
  return cached;
}

export const isSyncConfigured = (): boolean => getSupabase() !== null;
