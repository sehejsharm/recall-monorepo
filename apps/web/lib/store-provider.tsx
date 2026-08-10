"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode
} from "react";
import { useStore } from "zustand";
import { createJyotirStore, type JyotirState, type JyotirStore } from "@jyotir/core";
import { runStorageMigrations } from "./storage-migration";
import { WebStorageAdapter } from "./web-storage";

const StoreContext = createContext<JyotirStore | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<JyotirStore | null>(null);
  if (!storeRef.current) {
    // Move any legacy `jyotir.*` keys before the adapter reads storage.
    runStorageMigrations();
    storeRef.current = createJyotirStore({
      adapter: new WebStorageAdapter(),
      // Deferred, not static. StoreProvider is mounted in the root layout, so
      // a static import put the entire ~5.7 MB question corpus (1.66 MB gzip,
      // ~88% of all client JS) into the shell chunk that /privacy, /terms and
      // every other non-study route had to download and parse before painting.
      // hydrate() awaits this, so `ready` still means "content + storage are
      // both available" and no consumer needs to know it became async.
      loadContent: () => import("./content").then((m) => m.contentSource)
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
