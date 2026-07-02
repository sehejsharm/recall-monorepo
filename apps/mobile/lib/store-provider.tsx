import * as Haptics from "expo-haptics";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode
} from "react";
import { useStore } from "zustand";
import { createJyotirStore, type JyotirState, type JyotirStore } from "@jyotir/core";
import { contentSource } from "./content";
import { SqliteStorageAdapter } from "./sqlite-storage";

const StoreContext = createContext<JyotirStore | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<JyotirStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = createJyotirStore({
      adapter: new SqliteStorageAdapter(),
      content: contentSource,
      // Haptic verdict when a tapped answer is graded (fire-and-forget):
      // a light tick for correct, a firmer bump for wrong.
      onGrade: (correct) => {
        void Haptics.impactAsync(
          correct ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium
        );
      }
    });
  }

  useEffect(() => {
    void storeRef.current?.getState().hydrate();
  }, []);

  return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
}

export function useJyotirStore(): JyotirStore {
  const store = useContext(StoreContext);
  if (!store) throw new Error("useJyotirStore must be used within StoreProvider");
  return store;
}

export function useJyotir<T>(selector: (state: JyotirState) => T): T {
  return useStore(useJyotirStore(), selector);
}
