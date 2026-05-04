"use client";

import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  const t = useT();
  const info = t.about.info;

  const rows = [
    {
      key: "location",
      label: info.location.label,
      value: info.location.value,
      icon: <IconMapPin />,
      accent: "from-blue-500 to-cyan-500",
    },
    {
      key: "experience",
      label: info.experience.label,
      value: info.experience.value,
      icon: <IconBriefcase />,
      accent: "from-purple-500 to-pink-500",
    },
    {
      key: "education",
      label: info.education.label,
      value: info.education.value,
      icon: <IconCap />,
      accent: "from-amber-500 to-orange-500",
    },
    {
      key: "languages",
      label: info.languages.label,
      value: info.languages.value,
      icon: <IconGlobe />,
      accent: "from-emerald-500 to-teal-500",
    },
    {
      key: "email",
      label: info.email.label,
      value: info.email.value,
      href: `mailto:${info.email.value}`,
      icon: <IconMail />,
      accent: "from-rose-500 to-red-500",
    },
    {
      key: "phone",
      label: info.phone.label,
      value: info.phone.value,
      href: "tel:+8801646669099",
      icon: <IconPhone />,
      accent: "from-sky-500 to-indigo-500",
    },
  ];

  const highlights = [
    {
      value: t.about.stats.years.value,
      label: t.about.stats.years.label,
      icon: <IconBriefcase />,
    },
    {
      value: t.about.stats.projects.value,
      label: t.about.stats.projects.label,
      icon: <IconRocket />,
    },
    {
      value: t.about.stats.clients.value,
      label: t.about.stats.clients.label,
      icon: <IconUsers />,
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* LEFT: paragraphs + highlight stats */}
          <Reveal direction="left">
            <div className="space-y-6">
              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                <p>
                  {t.about.p1Prefix}{" "}
                  <span className="text-foreground font-medium">
                    {t.about.p1Highlight}
                  </span>{" "}
                  {t.about.p1Suffix}
                </p>
                <p>
                  {t.about.p2Prefix}{" "}
                  <span className="text-foreground font-medium">
                    {t.about.p2HighlightA}
                  </span>
                  ,{" "}
                  <span className="text-foreground font-medium">
                    {t.about.p2HighlightB}
                  </span>
                  ,{" "}
                  <span className="text-foreground font-medium">
                    {t.about.p2HighlightC}
                  </span>{" "}
                  {t.about.p2Suffix}
                </p>
                <p>
                  {t.about.p3Prefix}{" "}
                  <span className="text-foreground font-medium">
                    {t.about.p3Highlight}
                  </span>{" "}
                  {t.about.p3Suffix}
                </p>
              </div>

              {/* Highlight stat strip */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                {highlights.map((h, i) => (
                  <Reveal key={h.label} delay={i * 80}>
                    <div className="lift group h-full rounded-2xl border border-border bg-card p-3 sm:p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-md transition-transform group-hover:scale-110">
                        {h.icon}
                      </div>
                      <div className="mt-2.5 text-xl sm:text-2xl font-bold leading-none">
                        <AnimatedCounter value={h.value} />
                      </div>
                      <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-muted">
                        {h.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT: quick info card */}
          <Reveal direction="right">
            <div className="relative rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-sm overflow-hidden">
              {/* Soft inner glow */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-muted">
                  {t.about.quickInfo}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping-slow" />
                  Online
                </span>
              </div>

              <ul className="relative mt-3 divide-y divide-border">
                {rows.map((row, i) => (
                  <Reveal key={row.key} delay={i * 60}>
                    <InfoRow {...row} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
  icon,
  accent,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  accent: string;
}) {
  const isLink = !!href;
  const isEmail = href?.startsWith("mailto:");

  const inner = (
    <div className="group flex items-center gap-3 sm:gap-4 py-3 -mx-2 px-2 rounded-xl hover:bg-foreground/[0.04] transition-colors">
      <div
        className={`shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${accent} text-white shadow-sm transition-transform group-hover:scale-110`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] sm:text-xs uppercase tracking-wider text-muted font-medium">
          {label}
        </div>
        <div
          className={`mt-0.5 text-sm sm:text-base font-medium ${
            isEmail ? "break-all" : "truncate"
          }`}
        >
          {value}
        </div>
      </div>
      {isLink && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-muted transition-all group-hover:text-foreground group-hover:translate-x-0.5"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </div>
  );

  return (
    <li>
      {isLink ? (
        <a href={href} className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

/* ---------- Icons ---------- */
function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
function IconCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconRocket() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M5 13l-2 7 7-2M14 7l3 3M9 11l4-4 5-2 1 1-2 5-4 4-4-4z" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted text-sm sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
