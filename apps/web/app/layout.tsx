import type { Metadata, Viewport } from "next";
import { StoreProvider } from "@/lib/store-provider";
import { SyncProvider } from "@/lib/sync-provider";
import { Splash } from "@/components/Splash";
import { Onboarding } from "@/components/Onboarding";
import { BottomNav } from "@/components/BottomNav";
import { Analytics } from "@/components/Analytics";
import { jsonLdHtml } from "@/lib/jsonld";
import { siteUrl as resolveSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = resolveSiteUrl();

const description =
  "Frictionless MCQ drilling and 2-minute micro-notes for UPSC, JEE, NEET, SSC CGL, GATE, CFA (Level I–III) and FRM (Part I–II). Spaced repetition, gamified, fully offline.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Recall — Active-recall exam prep for UPSC, JEE, NEET, CFA & FRM",
    template: "%s · Recall"
  },
  description,
  applicationName: "Recall",
  // Google Search Console domain-ownership verification.
  verification: {
    google: "S1I61byaqYgYzZGLxvDWkU6sYgbaRPAS5s6jRlujQqs"
  },
  keywords: [
    "exam preparation",
    "active recall",
    "spaced repetition",
    "MCQ practice",
    "UPSC",
    "JEE",
    "NEET",
    "SSC CGL",
    "GATE",
    "CFA",
    "FRM",
    "mock test",
    "free study material"
  ],
  authors: [{ name: "Recall" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Recall",
    url: siteUrl,
    title: "Recall — Active-recall exam prep for UPSC, JEE, NEET, CFA & FRM",
    description,
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Recall — Active-recall exam prep",
    description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  },
  appleWebApp: {
    capable: true,
    title: "Recall",
    statusBarStyle: "black-translucent"
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Recall",
    url: siteUrl,
    description,
    applicationCategory: "EducationApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-oled font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
        />
        <Analytics />
        <StoreProvider>
          <SyncProvider>
            <Splash />
            <Onboarding />
            {/* Bottom padding = tab bar height + notch-phone safe area, so page
                content is never obscured by the fixed global tab bar. */}
            <div className="pb-[calc(4rem+env(safe-area-inset-bottom))]">{children}</div>
            <BottomNav />
          </SyncProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
