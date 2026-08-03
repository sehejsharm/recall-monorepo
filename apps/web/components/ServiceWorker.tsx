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
      navigator.serviceWorker
        .register("/sw.js")
        .then(async () => {
          // A newly-installed worker doesn't control the page that registered
          // it, so this page's HTML and hashed chunks never reached its fetch
          // handler. Hand it the exact list of same-origin resources we just
          // loaded so the app is genuinely offline-capable after ONE visit
          // rather than two.
          const reg = await navigator.serviceWorker.ready;
          const target = reg.active;
          if (!target) return;
          const urls = performance
            .getEntriesByType("resource")
            .map((e) => e.name)
            .filter((n) => n.startsWith(self.location.origin));
          target.postMessage({
            type: "WARM_CACHE",
            page: window.location.pathname,
            urls: [window.location.href, ...urls]
          });
        })
        .catch(() => {
          /* offline support unavailable — app still works online */
        });
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
  }, []);

  return null;
}
