import { useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";
import { useJyotir } from "@/lib/store-provider";

/** Branded launch screen shown until local data hydrates, then fades out. */
export function Splash() {
  const ready = useJyotir((s) => s.ready);
  const [minElapsed, setMinElapsed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [opacity] = useState(() => new Animated.Value(1));

  useEffect(() => {
    const t = setTimeout(() => setMinElapsed(true), 750);
    return () => clearTimeout(t);
  }, []);

  const done = ready && minElapsed;
  useEffect(() => {
    if (!done) return;
    Animated.timing(opacity, { toValue: 0, duration: 300, useNativeDriver: true }).start(() =>
      setHidden(true)
    );
  }, [done, opacity]);

  if (hidden) return null;

  return (
    <Animated.View
      pointerEvents={done ? "none" : "auto"}
      style={{ opacity }}
      className="absolute inset-0 z-50 items-center justify-center bg-oled"
    >
      <View className="h-20 w-20 items-center justify-center rounded-3xl bg-correct">
        <Text className="text-4xl font-bold text-black">R</Text>
      </View>
      <Text className="mt-5 text-2xl font-bold tracking-tight text-ink">Recall</Text>
      <Text className="mt-1 text-xs text-muted">Drill. Read. Repeat.</Text>
    </Animated.View>
  );
}
