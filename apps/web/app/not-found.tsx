import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70dvh] w-full max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-5xl font-bold tracking-tight">404</p>
      <p className="mt-3 text-sm text-muted">This page doesn&apos;t exist — but your streak still does.</p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-correct px-6 py-3 text-sm font-bold text-black active:scale-[0.98]"
      >
        Go Home →
      </Link>
    </main>
  );
}
