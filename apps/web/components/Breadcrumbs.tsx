import Link from "next/link";
import { jsonLdHtml } from "@/lib/jsonld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export interface Crumb {
  name: string;
  /** Absolute path beginning with "/". */
  href: string;
}

/**
 * Server-rendered breadcrumbs. Always emits BreadcrumbList JSON-LD (for rich
 * results); renders a visible trail when `visible` is true. Kept a server
 * component so the structured data is in the static HTML.
 */
export function Breadcrumbs({ items, visible = true }: { items: Crumb[]; visible?: boolean }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteUrl}${c.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      {visible && (
        <nav aria-label="Breadcrumb" className="text-xs text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            {items.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-faint">/</span>}
                {i < items.length - 1 ? (
                  <Link href={c.href} className="hover:text-ink">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-ink">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
