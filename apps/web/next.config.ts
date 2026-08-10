import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@jyotir/core", "@jyotir/content"],
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
  },
  // Digital Asset Links. Android's verifier fetches
  // https://<host>/.well-known/assetlinks.json and REJECTS the association
  // unless the response is (a) HTTPS, (b) a 200 with no redirect, and (c)
  // Content-Type: application/json. Vercel already infers application/json
  // from the .json extension, but that is an implicit default we would only
  // discover was wrong by seeing a URL bar in the shipped TWA — so pin it.
  //
  // The short max-age matters too: the fingerprint in that file is a
  // placeholder until the owner's signing key exists, and a long-lived cache
  // entry would keep serving the placeholder to Android's verifier long after
  // the real value is deployed.
  //
  // NOTE: none of the redirects above match /.well-known/*, and there is no
  // trailingSlash rewrite — a redirect here would silently break verification.
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
  }
};

export default nextConfig;
