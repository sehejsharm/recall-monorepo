/* Recall service worker — genuine offline support.
 *
 * The whole question bank and every micro-note ship INSIDE the JS bundle
 * (@jyotir/content is imported into the client code), so caching the app
 * shell + Next.js static assets is all that's needed for the app to run
 * fully offline once it has been opened online at least once.
 *
 * Strategy (Workbox-style, hand-rolled to avoid a build-time plugin):
 *   - /_next/static/* and other hashed/immutable assets  -> cache-first
 *   - navigations (HTML documents)                       -> network-first,
 *       fall back to cache, then to the cached app-shell ("/")
 *   - Supabase / cross-origin APIs                        -> network-only
 *       (never cache auth or user data)
 */
const VERSION = "recall-v1";
const SHELL_CACHE = `${VERSION}-shell`;
const ASSET_CACHE = `${VERSION}-assets`;
const OFFLINE_URLS = ["/", "/offline", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(OFFLINE_URLS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

function isImmutableAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icon") ||
    url.pathname === "/favicon-32.png" ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".woff2")
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Only handle our own origin. Supabase and any other API stay network-only
  // so user data and auth tokens are never cached.
  if (url.origin !== self.location.origin) return;

  // Immutable hashed assets: cache-first (fast, offline-safe).
  if (isImmutableAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ||
          fetch(request).then((res) => {
            const copy = res.clone();
            caches.open(ASSET_CACHE).then((c) => c.put(request, copy));
            return res;
          })
      )
    );
    return;
  }

  // Navigations: network-first, fall back to cache, then the app shell.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() =>
          caches
            .match(request)
            .then((hit) => hit || caches.match("/offline") || caches.match("/"))
        )
    );
  }
});
