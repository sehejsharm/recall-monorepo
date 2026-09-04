import type { Metadata } from "next";

// Client-rendered page — metadata comes from this server layout. Personal /
// utility screen: unique title for the browser tab, and noindex because it has
// no public content (robots.txt already disallows it; this is belt-and-braces
// for the meta tag, which Googlebot honours over robots.txt).
export const metadata: Metadata = {
  title: "Account",
  alternates: { canonical: "/account" },
  robots: { index: false, follow: false }
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return children;
}
