/**
 * Vendor-neutral crash/error reporting seam.
 *
 * ⚠️ DELIBERATELY A NO-OP RIGHT NOW. Choosing a crash-reporting vendor is a
 * business + privacy decision (it adds a data processor that must be named in
 * the privacy policy and the Play Data-safety form), so no vendor is wired in
 * without an explicit decision. See docs/error-reporting.md for the options
 * and the ~10-line change needed to activate one.
 *
 * Design constraints any adapter must honour:
 *   - crash stack traces + app/OS version ONLY;
 *   - no PII: never send email, display name, leaderboard handle, answers,
 *     progress, or any localStorage contents;
 *   - no session replay, no cross-app/advertising identifiers;
 *   - IP anonymisation on;
 *   - opt-out respected (see `setErrorReportingEnabled`);
 *   - failures are swallowed — reporting must never break the app, and the
 *     app must remain fully functional offline with no backend.
 */

export interface ErrorContext {
  /** Where it happened, e.g. "route:/stats" or "boundary:global". */
  scope?: string;
  /** Extra non-identifying breadcrumbs. Never put user data here. */
  extra?: Record<string, string | number | boolean>;
}

export interface ErrorReporter {
  captureException(error: unknown, context?: ErrorContext): void;
}

/** No-op reporter — the shipped default. */
const noopReporter: ErrorReporter = {
  captureException: () => {}
};

let reporter: ErrorReporter = noopReporter;
let enabled = true;

/**
 * Install a reporter (called once from a client entry point once a vendor is
 * chosen). Keeping this as the only injection point means swapping or
 * removing a vendor never touches call sites.
 */
export function setErrorReporter(next: ErrorReporter | null): void {
  reporter = next ?? noopReporter;
}

/** User-facing opt-out; wire to a Settings toggle when a vendor is enabled. */
export function setErrorReportingEnabled(value: boolean): void {
  enabled = value;
}

/**
 * Report a caught error. Safe to call anywhere: never throws, no-ops when
 * disabled or when no vendor is installed.
 */
export function captureException(error: unknown, context?: ErrorContext): void {
  // Always leave a local trace so failures are debuggable with no vendor.
  if (process.env.NODE_ENV !== "production") console.error("[recall]", context?.scope ?? "", error);
  if (!enabled) return;
  try {
    reporter.captureException(error, context);
  } catch {
    /* reporting must never break the app */
  }
}

/** App/OS version metadata an adapter may attach. Contains no PII. */
export function releaseMetadata(): Record<string, string> {
  return {
    release: process.env.NEXT_PUBLIC_APP_VERSION ?? "dev",
    userAgent: typeof navigator === "undefined" ? "server" : navigator.userAgent
  };
}
