import { createContext, createElement, useContext, useState, type ReactNode } from "react";
import { kv } from "./kv";

export type ThemeChoice = "dark" | "light" | "system";

export interface Settings {
  displayName: string;
  /** Anonymized public identity shown on the leaderboard. */
  handle: string;
  dailyGoal: number;
  leaderboardOptIn: boolean;
  onboarded: boolean;
  theme: ThemeChoice;
  /** Daily reminder notification enabled. */
  reminderOn: boolean;
  /** Reminder time, minutes past midnight (local). Default 20:00. */
  reminderMinutes: number;
}

const KEY = "recall.settings.v1";

function randomHandle(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `Aspirant-${s}`;
}

export function defaultSettings(): Settings {
  return {
    displayName: "Aspirant",
    handle: randomHandle(),
    dailyGoal: 20,
    leaderboardOptIn: true,
    onboarded: false,
    theme: "dark",
    reminderOn: false,
    reminderMinutes: 20 * 60
  };
}

export function loadSettings(): Settings {
  try {
    const raw = kv.get(KEY);
    if (!raw) {
      const d = defaultSettings();
      kv.set(KEY, JSON.stringify(d));
      return d;
    }
    return { ...defaultSettings(), ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    return defaultSettings();
  }
}

export function saveSettings(s: Settings): void {
  kv.set(KEY, JSON.stringify(s));
}

interface Ctx {
  settings: Settings;
  update: (patch: Partial<Settings>) => void;
}
const SettingsContext = createContext<Ctx | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(loadSettings);
  const update = (patch: Partial<Settings>) =>
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      saveSettings(next);
      return next;
    });
  return createElement(SettingsContext.Provider, { value: { settings, update } }, children);
}

export function useSettings(): Ctx {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
