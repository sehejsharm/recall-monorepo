"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { useSettings } from "@/lib/settings";
import { useJyotir, useJyotirStore } from "@/lib/store-provider";

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-edge/60 px-1 py-4 last:border-0">
      <div className="min-w-0">
        <div className="text-sm font-semibold">{label}</div>
        {hint && <div className="mt-0.5 text-xs text-muted">{hint}</div>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!on)}
      className={`h-6 w-11 rounded-full p-0.5 transition-colors ${on ? "bg-correct" : "bg-raised"}`}
      aria-pressed={on}
    >
      <span
        className={`block h-5 w-5 rounded-full bg-ink transition-transform ${on ? "translate-x-5" : ""}`}
      />
    </button>
  );
}

const GOAL_MIN = 5;
const GOAL_MAX = 500;
const NAME_MAX = 40;

export default function SettingsPage() {
  const [settings, update] = useSettings();
  const supabase = getSupabase();
  const store = useJyotirStore();
  const stats = useJyotir((s) => s.stats);
  const lastSync = useJyotir((s) => s.lastSync);
  const [confirmReset, setConfirmReset] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Honest sync status: report what the last attempt actually did, never a
  // static "available" while every sync silently fails in the background.
  const syncHint = !supabase
    ? "Local only on this device."
    : !userEmail
      ? "Sign in to back up your progress to the cloud."
      : lastSync === null
        ? "Cloud sync on — waiting for the first sync…"
        : lastSync.ok
          ? `Cloud sync on · last synced ${new Date(lastSync.at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })}.`
          : lastSync.failedRows > 0
            ? `Sync issue: ${lastSync.failedRows} record${lastSync.failedRows === 1 ? "" : "s"} couldn't reach the server — kept safely on this device, retrying automatically.`
            : "Sync is failing right now — your progress is safe on this device and will retry automatically.";
  const syncTrouble = Boolean(supabase && userEmail && lastSync && !lastSync.ok);

  // Drafts let the user type freely; values are validated and committed on
  // blur, with explicit feedback instead of silent clamping / empty saves.
  const [nameDraft, setNameDraft] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [goalDraft, setGoalDraft] = useState<string | null>(null);
  const [goalError, setGoalError] = useState<string | null>(null);
  // Transient "Saved ✓" confirmation so blur-autosave is never silent.
  const [savedField, setSavedField] = useState<"name" | "goal" | null>(null);
  const flashSaved = (field: "name" | "goal") => {
    setSavedField(field);
    setTimeout(() => setSavedField((f) => (f === field ? null : f)), 1800);
  };

  const commitName = () => {
    const clean = (nameDraft ?? settings.displayName).trim().slice(0, NAME_MAX);
    if (!clean) {
      setNameError("Name can't be empty — keeping your previous name.");
    } else {
      setNameError(null);
      if (clean !== settings.displayName) {
        update({ displayName: clean });
        flashSaved("name");
      }
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
      if (Math.round(parsed) !== settings.dailyGoal) {
        update({ dailyGoal: Math.round(parsed) });
        flashSaved("goal");
      }
    }
    setGoalDraft(null);
  };

  useEffect(() => {
    if (supabase) void supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? null));
  }, [supabase]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-12">
      <h1 className="mb-6 text-2xl font-bold tracking-tight">Settings</h1>

      <section className="mb-5">
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-faint">Profile</h2>
        <div className="rounded-2xl border border-edge bg-surface px-4">
          <Row label="Display name" hint="Private to you; never shown to others.">
            <input
              value={nameDraft ?? settings.displayName}
              maxLength={NAME_MAX}
              onChange={(e) => {
                setNameDraft(e.target.value);
                setNameError(null);
              }}
              onBlur={commitName}
              aria-invalid={!!nameError}
              className={`w-36 rounded-lg border bg-oled px-3 py-1.5 text-right text-sm outline-none focus:border-correct/50 ${
                nameError ? "border-wrong/60" : "border-edge"
              }`}
            />
          </Row>
          {nameError && (
            <p role="alert" className="px-1 pb-3 text-xs text-wrong-bright">
              {nameError}
            </p>
          )}
          {savedField === "name" && (
            <p role="status" className="px-1 pb-3 text-xs font-semibold text-correct">
              Saved ✓
            </p>
          )}
          <Row label="Leaderboard handle" hint="Your anonymized public identity.">
            <span className="text-sm font-semibold text-correct">{settings.handle}</span>
          </Row>
          <Row label="Daily goal" hint={`Cards per day (${GOAL_MIN}–${GOAL_MAX}).`}>
            <input
              type="number"
              inputMode="numeric"
              min={GOAL_MIN}
              max={GOAL_MAX}
              value={goalDraft ?? settings.dailyGoal}
              onChange={(e) => {
                setGoalDraft(e.target.value.replace(/[^0-9]/g, ""));
                setGoalError(null);
              }}
              onBlur={commitGoal}
              aria-invalid={!!goalError}
              className={`w-20 rounded-lg border bg-oled px-3 py-1.5 text-right text-sm outline-none focus:border-correct/50 ${
                goalError ? "border-wrong/60" : "border-edge"
              }`}
            />
          </Row>
          {goalError && (
            <p role="alert" className="px-1 pb-3 text-xs text-wrong-bright">
              {goalError}
            </p>
          )}
          {savedField === "goal" && (
            <p role="status" className="px-1 pb-3 text-xs font-semibold text-correct">
              Saved ✓
            </p>
          )}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-faint">Preferences</h2>
        <div className="rounded-2xl border border-edge bg-surface px-4">
          <Row label="Join global leaderboard" hint="Sync your XP to the anonymized ranks.">
            <Toggle on={settings.leaderboardOptIn} onChange={(v) => update({ leaderboardOptIn: v })} />
          </Row>
          <Row label="Reduce motion" hint="Calmer animations.">
            <Toggle on={settings.reduceMotion} onChange={(v) => update({ reduceMotion: v })} />
          </Row>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-faint">Account</h2>
        <div className="rounded-2xl border border-edge bg-surface px-4">
          <Row label="Status" hint={syncHint}>
            <Link
              href="/account"
              className={`text-sm font-semibold ${syncTrouble ? "text-wrong-bright" : "text-correct"}`}
            >
              {userEmail ?? "Sign in"}
            </Link>
          </Row>
          <Row label="XP" hint="Total earned.">
            <span className="text-sm font-bold tabular-nums">{stats.xp}</span>
          </Row>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-faint">Help & feedback</h2>
        <div className="flex flex-col gap-2.5">
          <Link href="/request-exam" className="rounded-2xl border border-edge bg-surface px-4 py-3.5 text-sm font-semibold hover:border-correct/40">
            Request more exams
          </Link>
          <Link href="/contact" className="rounded-2xl border border-edge bg-surface px-4 py-3.5 text-sm font-semibold hover:border-correct/40">
            Contact us
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-faint">Danger zone</h2>
        {confirmReset ? (
          <div className="rounded-2xl border border-wrong/40 bg-wrong-dim/20 p-4">
            <p className="text-sm">Erase all local progress, XP and streaks on this device?</p>
            <div className="mt-3 flex gap-2.5">
              <button
                onClick={() => {
                  store.getState().resetAll();
                  setConfirmReset(false);
                }}
                className="flex-1 rounded-xl bg-wrong py-2.5 text-sm font-bold text-ink"
              >
                Erase everything
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 rounded-xl border border-edge py-2.5 text-sm font-semibold text-muted"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setConfirmReset(true)}
            className="w-full rounded-2xl border border-wrong/30 bg-surface px-4 py-3.5 text-left text-sm font-semibold text-wrong-bright hover:bg-wrong-dim/20"
          >
            Reset all progress
          </button>
        )}
      </section>

      <p className="mt-8 text-center text-[11px] text-faint">Recall · v0.1</p>
    </main>
  );
}
