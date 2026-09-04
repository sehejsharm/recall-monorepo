import type { Metadata } from "next";

// This page is client-rendered, so it can't export metadata itself. A sibling
// server layout supplies a unique <title> (the root only sets one shared
// default) and marks it noindex: a signed-in user's ranking is personal and
// carries no SEO value.
export const metadata: Metadata = {
  title: "Leaderboard",
  alternates: { canonical: "/leaderboard" },
  robots: { index: false, follow: false }
};

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
