import { usePathname, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ITEMS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/leaderboard", label: "Ranks", icon: "podium" },
  { href: "/stats", label: "Stats", icon: "stats-chart" },
  { href: "/settings", label: "Settings", icon: "settings" }
] as const;

/**
 * Global tab bar. Rendered once in the root layout so it stays constant on
 * every screen — including the immersive drill and study screens. It sits as a
 * flex child beneath the navigator (not an absolute overlay), so screen content
 * is never hidden behind it.
 */
export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View className="border-t border-edge bg-surface">
      <SafeAreaView edges={["bottom"]}>
        <View className="flex-row">
          {ITEMS.map(({ href, label, icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Pressable
                key={href}
                onPress={() => router.replace(href)}
                className="flex-1 items-center gap-0.5 py-2.5"
              >
                <Ionicons name={icon as never} size={20} color={active ? "#10B981" : "#55555C"} />
                <Text className={`text-[10px] font-medium ${active ? "text-correct" : "text-faint"}`}>
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}
