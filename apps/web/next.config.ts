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
  }
};

export default nextConfig;
