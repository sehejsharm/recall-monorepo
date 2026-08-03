# Crash & error reporting — DECISION REQUIRED

**Status: no vendor wired in. `lib/error-reporting.ts` is a no-op today.**

The error boundaries (`app/error.tsx`, `app/global-error.tsx`) are live and
already call `captureException()`. Nothing leaves the device until you pick a
vendor, because adding one is a business + privacy decision:

- it introduces a **data processor** that must be named in `/privacy`;
- it changes the **Play Data-safety** answers (you'd declare "Crash logs" and
  "Diagnostics" as collected);
- most vendors have a **free tier with paid overage**, so it's a cost decision.

## Options

| Option | Cost | Notes |
|---|---|---|
| **Sentry** | Free 5k errors/mo, then paid | Best-in-class. Must set `sendDefaultPii: false`, disable Session Replay, enable IP anonymisation, and scrub `localStorage`. Adds ~30 kB gzipped. |
| **GlitchTip** | Free if self-hosted | Sentry-SDK-compatible, so the same adapter works. You run the server. |
| **Vercel/Cloud provider logs** | Included | Server errors only — misses client-side crashes, which is most of what this app does. Weakest option here. |
| **Stay no-op** | Free | Boundaries still show a friendly fallback; you simply get no telemetry. Zero privacy surface, zero new disclosures. |

## To activate (≈10 lines, one file)

1. `pnpm --filter @jyotir/web add @sentry/nextjs` (or the GlitchTip-compatible SDK).
2. In a client entry point:

```ts
import * as Sentry from "@sentry/nextjs";
import { setErrorReporter, releaseMetadata } from "@/lib/error-reporting";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  sendDefaultPii: false,        // no IP, no user identifiers
  replaysSessionSampleRate: 0,  // no session replay
  replaysOnErrorSampleRate: 0,
  release: releaseMetadata().release,
  // Belt and braces: strip anything that could carry user data.
  beforeSend(event) {
    delete event.user;
    delete event.request?.cookies;
    delete event.request?.headers;
    return event;
  }
});

setErrorReporter({
  captureException: (e, ctx) =>
    Sentry.captureException(e, { tags: { scope: ctx?.scope ?? "unknown" }, extra: ctx?.extra })
});
```

3. Set `NEXT_PUBLIC_SENTRY_DSN` in Vercel (never commit it).
4. **Update `/privacy`** — add the processor, what's collected (stack traces,
   app/OS version), and that it carries no PII.
5. **Update `store/data-safety-playstore.md`** — declare Crash logs +
   Diagnostics as collected, not shared, not linked to identity.
6. Consider wiring `setErrorReportingEnabled(false)` to a Settings opt-out.

## Guardrails the adapter must keep

- Stack traces + app/OS version only.
- Never send email, display name, leaderboard handle, answers, or progress.
- No session replay; no advertising/cross-app identifiers.
- Reporting failures are swallowed — the app must work fully offline with no
  backend and no account.
