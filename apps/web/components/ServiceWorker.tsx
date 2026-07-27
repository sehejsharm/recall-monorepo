"use client";

import { useEffect } from "react";

/**
 * Registers the offline service worker (public/sw.js) after load, in
 * production only. Dev is skipped so HMR isn't cached. Registration failures
 * are swallowed — the app is fully functional without the SW; offline is an
 * enhancement, never a dependency.
 */
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* offline support unavailable — app still works online */
      });
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
  }, []);

  return null;
}
