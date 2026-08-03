"use client";

import { useEffect } from "react";
import { captureException } from "@/lib/error-reporting";

/**
 * Last-resort boundary: catches errors thrown in the root layout itself,
 * where app/error.tsx can't help. It must render its own <html>/<body>,
 * and can't rely on app chrome or fonts having loaded — so the styling here
 * is intentionally inline and self-contained.
 */
export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    captureException(error, {
      scope: "boundary:global",
      ...(error.digest ? { extra: { digest: error.digest } } : {})
    });
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          background: "#000",
          color: "#FAFAFA",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "0 1.25rem"
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>Something broke</h1>
        <p style={{ color: "#8B8B93", fontSize: "0.875rem", margin: 0 }}>
          Your progress is safe — it&apos;s stored on this device.
        </p>
        <button
          onClick={reset}
          style={{
            marginTop: "0.75rem",
            background: "#10B981",
            color: "#000",
            border: 0,
            borderRadius: "0.75rem",
            padding: "0.75rem 1.25rem",
            fontWeight: 700,
            fontSize: "0.875rem",
            cursor: "pointer"
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
