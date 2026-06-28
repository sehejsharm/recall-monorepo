import { useEffect, type ReactNode } from "react";
import { colorScheme } from "nativewind";
import { useSettings } from "./settings";

/**
 * Drives NativeWind's color scheme from the user's saved preference.
 * The semantic color tokens (oled/surface/ink/...) are defined as CSS
 * variables in global.css with light + dark values, so flipping the scheme
 * re-themes every existing screen without touching component classes.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const { settings } = useSettings();
  useEffect(() => {
    colorScheme.set(settings.theme);
  }, [settings.theme]);
  return <>{children}</>;
}
