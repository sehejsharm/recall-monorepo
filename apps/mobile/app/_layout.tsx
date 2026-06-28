import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import { StoreProvider } from "@/lib/store-provider";
import { SettingsProvider } from "@/lib/settings";
import { ThemeProvider } from "@/lib/theme";
import { SyncProvider } from "@/lib/sync-provider";
import { Splash } from "@/components/Splash";
import { Onboarding } from "@/components/Onboarding";
import "../global.css";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

export default function RootLayout() {
  return (
    <SafeAreaProvider>
    <SettingsProvider>
      <StoreProvider>
        <ThemeProvider>
          <SyncProvider>
            <StatusBar style="light" />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "#000000" },
                animation: "fade",
                animationDuration: 150
              }}
            />
            <Onboarding />
            <Splash />
          </SyncProvider>
        </ThemeProvider>
      </StoreProvider>
    </SettingsProvider>
    </SafeAreaProvider>
  );
}
