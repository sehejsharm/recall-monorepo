"use client";

import { useEffect, useState } from "react";

/**
 * Test-only hatch that throws during render so e2e can prove the route's
 * error boundary (app/error.tsx) actually catches a failure on that route,
 * rather than us assuming Next wired it up.
 *
 * Safety:
 *   - inert unless NEXT_PUBLIC_E2E_ERROR_HOOK === "1", which is set ONLY for
 *     the e2e build. Production builds never set it, so the throw is
 *     unreachable (and the branch is constant-folded away);
 *   - additionally requires an explicit ?__boom=1 in the URL;
 *   - reads location in an effect, never during render, so it can't cause an
 *     SSR/client hydration mismatch — and deliberately avoids
 *     useSearchParams(), which would opt the page out of static prerendering.
 *
 * The throw happens on the state-update re-render, which React error
 * boundaries catch exactly like a first-render throw.
 */
export function ErrorTrigger({ route }: { route: string }) {
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_E2E_ERROR_HOOK !== "1") return;
    if (new URLSearchParams(window.location.search).has("__boom")) setBoom(true);
  }, []);

  if (boom) throw new Error(`E2E deliberate error on ${route}`);
  return null;
}
