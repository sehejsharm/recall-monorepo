import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import { StoreProvider } from "@/lib/store-provider";
import { SettingsProvider } from "@/lib/settings";
import { ThemeProvider } from "@/lib/theme";
import { SyncProvider } from "@/lib/sync-provider";
import { Splash } from "@/components/Splash";
import { Onboarding } from "@/components/Onboarding";
import { BottomNav } from "@/components/BottomNav";
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
            {/* Column layout: the navigator fills the space above a persistent
                tab bar, so the bar stays visible on every screen. */}
            <View className="flex-1 bg-oled">
              <View className="flex-1">
                <Stack
                  screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#000000" },
                    animation: "fade",
                    animationDuration: 150
                  }}
                />
              </View>
              <BottomNav />
            </View>
            <Onboarding />
            <Splash />
          </SyncProvider>
        </ThemeProvider>
      </StoreProvider>
    </SettingsProvider>
    </SafeAreaProvider>
  );
}
