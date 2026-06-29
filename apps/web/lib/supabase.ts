import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Memoised Supabase client. The app is fully functional offline/anonymous;
 * when NEXT_PUBLIC_SUPABASE_* are present, signed-in users get auth and
 * cross-device progress sync. Returns null (cached) when unconfigured, so
 * every caller can cheaply branch on "is cloud sync available".
 */
let cached: SupabaseClient | null | undefined;

// Project defaults so the deployed app has working auth/leaderboards without
// requiring Vercel env vars. These are the PUBLIC URL + publishable key
// (client-safe by design, protected by row-level security). Vercel env vars,
// if set, take precedence so you can point a fork at a different project.
const DEFAULT_URL = "https://uhssdbbgyrdmhljzneyv.supabase.co";
const DEFAULT_PUBLISHABLE_KEY = "sb_publishable_GY-_VWRSztykGe3p472FqQ_bFfBghyk";

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? DEFAULT_URL;
  // Accept either the legacy anon key or the new publishable key name.
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    DEFAULT_PUBLISHABLE_KEY;
  cached = url && key ? createClient(url, key) : null;
  return cached;
}

export const isSyncConfigured = (): boolean => getSupabase() !== null;
