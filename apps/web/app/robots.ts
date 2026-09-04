import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const origin = siteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Personal/utility routes carry no SEO value.
      disallow: ["/account", "/stats", "/review", "/settings", "/leaderboard"]
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin
  };
}
