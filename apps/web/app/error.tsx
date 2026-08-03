"use client";

import Link from "next/link";
import { useEffect } from "react";
import { captureException } from "@/lib/error-reporting";

/**
 * Route-level error boundary. Next.js renders this in place of any route
 * whose render throws, so a JS exception shows a calm, honest fallback
 * instead of a blank screen. Tone mirrors the 404 page.
 *
 * The reassurance is literally true: progress lives in localStorage and is
 * written synchronously on every graded card, so a render crash cannot lose it.
 */
export default function RouteError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    captureException(error, {
      scope: "boundary:route",
      ...(error.digest ? { extra: { digest: error.digest } } : {})
    });
  }, [error]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-2xl font-bold tracking-tight">Something broke</h1>
      <p className="mt-2 text-sm text-muted">
        Your progress is safe — it&apos;s stored on this device, not on this screen.
      </p>
      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-xl bg-correct px-5 py-3 text-sm font-bold text-black active:scale-[0.98]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-edge px-5 py-3 text-sm font-semibold text-muted hover:text-ink"
        >
          Go to home
        </Link>
      </div>
    </main>
  );
}
