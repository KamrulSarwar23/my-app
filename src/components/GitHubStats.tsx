"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";

const GH_USER = "KamrulSarwar23";

// Convert any CSS color string ("#06b6d4", "rgb(6,182,212)", " #06b6d4 ")
// to a URL-safe 6-digit hex (no leading #).
function toHex(input: string, fallback: string): string {
  const s = (input || "").trim();
  if (!s) return fallback;
  // #RRGGBB
  const hex = s.match(/^#([0-9a-f]{6})$/i);
  if (hex) return hex[1].toLowerCase();
  // #RGB
  const hex3 = s.match(/^#([0-9a-f]{3})$/i);
  if (hex3) {
    const [r, g, b] = hex3[1];
    return `${r}${r}${g}${g}${b}${b}`.toLowerCase();
  }
  // rgb()/rgba()
  const rgb = s.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (rgb) {
    const r = Number(rgb[1]).toString(16).padStart(2, "0");
    const g = Number(rgb[2]).toString(16).padStart(2, "0");
    const b = Number(rgb[3]).toString(16).padStart(2, "0");
    return `${r}${g}${b}`;
  }
  return fallback;
}

type Brand = { from: string; via: string; to: string };

function readBrand(): Brand {
  if (typeof window === "undefined") {
    return { from: "6366f1", via: "8b5cf6", to: "ec4899" };
  }
  const cs = getComputedStyle(document.documentElement);
  return {
    from: toHex(cs.getPropertyValue("--brand-from"), "6366f1"),
    via: toHex(cs.getPropertyValue("--brand-via"), "8b5cf6"),
    to: toHex(cs.getPropertyValue("--brand-to"), "ec4899"),
  };
}

export default function GitHubStats() {
  const [isDark, setIsDark] = useState(false);
  const [brand, setBrand] = useState<Brand>({
    from: "6366f1",
    via: "8b5cf6",
    to: "ec4899",
  });
  const [activityLoaded, setActivityLoaded] = useState(false);

  useEffect(() => {
    const sync = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
      setBrand(readBrand());
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-palette"],
    });
    return () => observer.disconnect();
  }, []);

  // Cache-bust the SVGs whenever theme or palette changes.
  const cacheKey = `${isDark ? "d" : "l"}-${brand.from}-${brand.to}`;
  const theme = isDark ? "github_dark" : "default";

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GH_USER}&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&theme=${theme}&v=${cacheKey}`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USER}&layout=compact&hide_border=true&theme=${theme}&v=${cacheKey}`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${GH_USER}&hide_border=true&theme=${theme}&v=${cacheKey}`;

  // Activity graph — fully palette-driven.
  const titleColor = isDark ? "ededed" : "111111";
  const textColor = isDark ? "9ca3af" : "6b7280";
  const graphUrl = useMemo(() => {
    const params = new URLSearchParams({
      username: GH_USER,
      hide_border: "true",
      hide_title: "true",
      bg_color: "00000000",
      color: textColor,
      title_color: titleColor,
      line: brand.via,
      point: brand.to,
      area: "true",
      area_color: brand.from,
      custom_title: " ",
      v: cacheKey,
    });
    return `https://github-readme-activity-graph.vercel.app/graph?${params.toString()}`;
  }, [brand, titleColor, textColor, cacheKey]);

  // Reset loaded flag whenever the URL changes
  useEffect(() => {
    setActivityLoaded(false);
  }, [graphUrl]);

  return (
    <section
      id="github"
      className="relative py-20 sm:py-28 bg-foreground/[0.02] border-y border-border overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-12 w-[800px] h-[400px] brand-glow blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Open source"
            title="My GitHub at a glance"
            description="Live activity, top languages, and a snapshot of what I've been shipping."
            align="center"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
            <a
              href={`https://github.com/${GH_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-foreground/30 hover:bg-foreground/5 transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>@{GH_USER}</span>
              <span className="text-muted">·</span>
              <span className="text-muted group-hover:text-foreground transition-colors">
                View profile
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="13"
                height="13"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 17L17 7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <Reveal direction="left" delay={120}>
            <StatsCard title="Profile stats">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={statsUrl}
                alt={`${GH_USER} GitHub stats`}
                loading="lazy"
                className="w-full h-auto"
              />
            </StatsCard>
          </Reveal>

          <Reveal delay={180}>
            <StatsCard title="Top languages">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={langsUrl}
                alt={`${GH_USER} top languages`}
                loading="lazy"
                className="w-full h-auto"
              />
            </StatsCard>
          </Reveal>

          <Reveal direction="right" delay={240}>
            <StatsCard title="Contribution streak">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={streakUrl}
                alt={`${GH_USER} streak`}
                loading="lazy"
                className="w-full h-auto"
              />
            </StatsCard>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="mt-5">
            <ActivityGraphCard
              url={graphUrl}
              brand={brand}
              loaded={activityLoaded}
              onLoad={() => setActivityLoaded(true)}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ActivityGraphCard({
  url,
  brand,
  loaded,
  onLoad,
}: {
  url: string;
  brand: Brand;
  loaded: boolean;
  onLoad: () => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl">
      {/* Animated gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 0% 0%, #${brand.from} 0%, transparent 45%), radial-gradient(circle at 100% 100%, #${brand.to} 0%, transparent 45%)`,
        }}
      />
      {/* Top brand accent bar */}
      <span className="absolute top-0 left-0 right-0 h-[3px] brand-gradient" />

      {/* Header */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 pt-5 pb-4 border-b border-border/70">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl brand-gradient-tr text-white shadow-md">
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
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="14 7 21 7 21 14" />
            </svg>
          </span>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted">
              Live data
            </div>
            <h3 className="text-base sm:text-lg font-semibold leading-tight">
              Contribution activity
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Period chip */}
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-muted">
            <svg
              viewBox="0 0 24 24"
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Last 31 days
          </span>

          {/* Pulsing live dot */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 backdrop-blur px-2.5 py-1 text-[11px] font-semibold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-slow" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="relative flex flex-wrap items-center gap-x-5 gap-y-2 px-5 sm:px-7 pt-4 text-[11px] font-medium text-muted">
        <Legend label="Area" swatch={`#${brand.from}`} variant="area" />
        <Legend label="Trend" swatch={`#${brand.via}`} variant="line" />
        <Legend label="Commits" swatch={`#${brand.to}`} variant="dot" />
        <span
          className="ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] font-bold"
          style={{
            background: `linear-gradient(90deg, #${brand.from}22, #${brand.to}22)`,
            color: "var(--foreground)",
          }}
        >
          <span
            className="inline-block h-1 w-3 rounded-full"
            style={{
              backgroundImage: `linear-gradient(90deg, #${brand.from}, #${brand.via}, #${brand.to})`,
            }}
          />
          Palette-tinted
        </span>
      </div>

      {/* Chart */}
      <div className="relative px-3 sm:px-5 pt-2 pb-5">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Skeleton shimmer */}
          {!loaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="h-full w-full bg-foreground/[0.03]">
                <div
                  className="h-full w-1/3 animate-[shimmer_1.6s_ease-in-out_infinite]"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, #${brand.via}33, transparent)`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Soft gradient under the chart */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-50"
            style={{
              backgroundImage: `linear-gradient(to top, #${brand.from}10, transparent)`,
            }}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={url}
            src={url}
            alt={`${GH_USER} contribution activity graph`}
            loading="lazy"
            onLoad={onLoad}
            className={`relative w-full h-auto transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

function Legend({
  label,
  swatch,
  variant,
}: {
  label: string;
  swatch: string;
  variant: "line" | "dot" | "area";
}) {
  return (
    <span className="inline-flex items-center gap-2">
      {variant === "line" && (
        <span
          className="inline-block h-[3px] w-5 rounded-full"
          style={{ background: swatch }}
        />
      )}
      {variant === "dot" && (
        <span
          className="inline-block h-2 w-2 rounded-full ring-2"
          style={{
            background: swatch,
            boxShadow: `0 0 0 3px ${swatch}33`,
          }}
        />
      )}
      {variant === "area" && (
        <span
          className="inline-block h-3 w-5 rounded-sm"
          style={{
            backgroundImage: `linear-gradient(180deg, ${swatch}, ${swatch}11)`,
          }}
        />
      )}
      <span className="text-foreground/80">{label}</span>
    </span>
  );
}

function StatsCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-5 hover:border-foreground/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full brand-gradient-tr opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
      />
      <span className="absolute top-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative flex items-center justify-between mb-3">
        <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-muted">
          {title}
        </h3>
        <span className="brand-gradient inline-block h-1.5 w-6 rounded-full" />
      </div>
      <div className="relative flex justify-center items-center min-h-[140px]">
        {children}
      </div>
    </div>
  );
}
