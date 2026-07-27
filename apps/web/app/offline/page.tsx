export const metadata = {
  title: "Offline — Recall",
  robots: { index: false, follow: false }
};

/**
 * Offline fallback served by the service worker when a never-visited page is
 * requested with no network. Any page already visited online is served from
 * cache instead; and once the app shell is cached the SPA can client-render
 * most routes offline, so this is a rare last resort.
 */
export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-2xl font-bold tracking-tight">You&apos;re offline</h1>
      <p className="mt-2 text-sm text-muted">
        This page hasn&apos;t been opened yet, so it isn&apos;t cached. Anything you&apos;ve already
        visited — your notes, drills and progress — still works offline.
      </p>
      <a
        href="/"
        className="mt-6 rounded-xl bg-correct px-5 py-3 text-sm font-bold text-black active:scale-[0.98]"
      >
        Go to home
      </a>
    </main>
  );
}
