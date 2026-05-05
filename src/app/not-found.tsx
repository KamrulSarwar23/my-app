import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] brand-glow blur-3xl rounded-full"
      />

      <div className="text-center max-w-xl">
        {/* Big 404 with brand gradient */}
        <div className="relative inline-block">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full brand-gradient-soft blur-3xl opacity-70"
          />
          <h1 className="relative text-[6rem] sm:text-[9rem] font-black leading-none tracking-tighter gradient-text animate-gradient-shift">
            404
          </h1>
        </div>

        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          <span className="brand-gradient inline-block h-1.5 w-1.5 rounded-full" />
          Page not found
        </div>

        <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight">
          This page took a wrong turn
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
          The link you followed might be broken, or the page may have moved.
          Let&apos;s get you back to something useful.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="shine inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white brand-shadow transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12l9-9 9 9" />
              <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
            </svg>
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-foreground/5 hover:border-foreground/30 transition"
          >
            Get in touch
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12">
          <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-muted mb-3">
            Or jump to
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: "/#about", label: "About" },
              { href: "/#projects", label: "Projects" },
              { href: "/#skills", label: "Skills" },
              { href: "/#experience", label: "Experience" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted hover:text-foreground hover:border-foreground/25 transition"
              >
                <span className="brand-gradient inline-block h-1 w-1 rounded-full" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
