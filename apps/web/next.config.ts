import type { NextConfig } from "next";
import { readFileSync } from "node:fs";

// Single source of truth for the displayed app version: package.json. Read at
// build and inlined as NEXT_PUBLIC_APP_VERSION so Settings can show it without
// a second place to keep in step.
const { version } = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
) as { version: string };

const nextConfig: NextConfig = {
  transpilePackages: ["@jyotir/core", "@jyotir/content"],
  env: { NEXT_PUBLIC_APP_VERSION: version },
  // Digital Asset Links. Android's verifier fetches
  // /.well-known/assetlinks.json and rejects the association unless it is a
  // 200 with Content-Type: application/json and no redirect. Vercel already
  // infers the type from the .json extension, but that implicit default fails
  // invisibly — the only symptom is a URL bar in the shipped TWA — so pin it.
  // The short max-age matters because the fingerprint is a placeholder until
  // the signing key exists; a long cache would keep serving the placeholder to
  // the verifier after the real value ships. None of the redirects() below
  // match /.well-known/*, and there is no trailingSlash — a redirect here
  // would break verification.
  async headers() {
    return [
      {
        source: "/.well-known/assetlinks.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=300, must-revalidate" },
          { key: "X-Content-Type-Options", value: "nosniff" }
        ]
      }
    ];
  },
  // The marketing copy says "UPSC, JEE, NEET, CFA & FRM" but the routes are
  // versioned slugs (/jee-main, /cfa-1, …). Anyone typing or backlinking the
  // obvious short form must land somewhere useful, not a 404 — 308s preserve
  // link equity and default to the entry level of each program.
  async redirects() {
    return [
      { source: "/jee", destination: "/jee-main", permanent: true },
      { source: "/jee-advanced", destination: "/jee-adv", permanent: true },
      { source: "/cfa", destination: "/cfa-1", permanent: true },
      { source: "/frm", destination: "/frm-1", permanent: true },
      { source: "/ssc", destination: "/ssc-cgl", permanent: true }
    ];
  }
};

export default nextConfig;
