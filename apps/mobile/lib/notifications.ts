import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

/**
 * A single daily "cards are waiting" reminder. We cancel-and-reschedule on
 * every settings change so there's only ever one pending trigger.
 */
const REMINDER_ID = "recall-daily-reminder";

export async function ensureNotificationPermission(): Promise<boolean> {
  const { status } = await Notifications.getPermissionsAsync();
  if (status === "granted") return true;
  const req = await Notifications.requestPermissionsAsync();
  return req.status === "granted";
}

export async function scheduleDailyReminder(minutesPastMidnight: number): Promise<boolean> {
  const ok = await ensureNotificationPermission();
  if (!ok) return false;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("reminders", {
      name: "Daily reminders",
      importance: Notifications.AndroidImportance.DEFAULT
    });
  }

  await cancelDailyReminder();
  await Notifications.scheduleNotificationAsync({
    identifier: REMINDER_ID,
    content: {
      title: "Time to drill",
      body: "Clear today's due cards and keep your streak alive.",
      ...(Platform.OS === "android" ? { channelId: "reminders" } : {})
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: Math.floor(minutesPastMidnight / 60),
      minute: minutesPastMidnight % 60
    }
  });
  return true;
}

export async function cancelDailyReminder(): Promise<void> {
  try {
    await Notifications.cancelScheduledNotificationAsync(REMINDER_ID);
  } catch {
    // no pending reminder — fine
  }
}
