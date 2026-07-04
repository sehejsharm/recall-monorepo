"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChartIcon, GearIcon, HomeIcon, UsersIcon } from "./icons";

const ITEMS = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/leaderboard", label: "Ranks", Icon: UsersIcon },
  { href: "/stats", label: "Stats", Icon: ChartIcon },
  { href: "/settings", label: "Settings", Icon: GearIcon }
] as const;

/**
 * Global tab bar — shown on every screen, including the immersive drill and
 * study screens (previously it hid there). Pages get bottom padding in the root
 * layout so content is never obscured by the fixed bar.
 */
export function BottomNav() {
  const pathname = usePathname();

  return (
    // The safe-area bottom padding keeps the tab row above the iOS home
    // indicator / Android gesture bar (viewport-fit=cover is set in the root
    // viewport config).
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-edge bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur">
      <div className="mx-auto flex max-w-xl">
        {ITEMS.map(({ href, label, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors ${
                active ? "text-correct" : "text-faint hover:text-muted"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
