"use client";

import Image from "next/image";
import { useT } from "@/i18n/LanguageProvider";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const t = useT();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/30 dark:bg-blue-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-500/30 dark:bg-purple-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob delay-2000" />
        <div className="absolute -bottom-10 left-40 w-72 h-72 bg-pink-500/30 dark:bg-pink-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-12 items-center">
        <div className="animate-fade-in-up min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-green-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {t.hero.available}
          </span>

          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] break-words">
            {t.hero.greeting}{" "}
            <span className="gradient-text">{t.hero.name}</span>
            <br />
            <span className="text-muted text-2xl sm:text-4xl lg:text-5xl">
              {t.hero.role}
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-muted leading-relaxed">
            {t.hero.description}
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
            <a
              href="#projects"
              className="shine group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-95 transition shadow-lg shadow-foreground/10 animate-glow-pulse"
            >
              {t.hero.viewProjects}
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
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="/Kamrul_Hasan_Resume.pdf"
              download
              className="shine inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-foreground/5 hover:border-foreground/30 transition"
            >
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
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.hero.downloadCv}
            </a>
            <a
              href="https://github.com/KamrulSarwar23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-foreground/5 hover:border-foreground/30 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
              {t.hero.github}
            </a>
          </div>

          <div className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-6 md:gap-8">
            <Stat
              value={t.hero.stats.years.value}
              label={t.hero.stats.years.label}
            />
            <div className="h-10 w-px bg-border" />
            <Stat
              value={t.hero.stats.projects.value}
              label={t.hero.stats.projects.label}
            />
            <div className="h-10 w-px bg-border" />
            <Stat
              value={t.hero.stats.stack.value}
              label={t.hero.stats.stack.label}
            />
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative animate-float">
            {/* Soft animated gradient halo */}
            <div
              className="absolute -inset-6 sm:-inset-8 rounded-[3rem] brand-gradient-soft blur-3xl opacity-80 animate-gradient-shift -z-10"
              aria-hidden="true"
            />

            {/* Decorative dotted backdrop */}
            <div
              className="absolute -right-6 -bottom-6 w-32 h-32 rounded-2xl bg-dots opacity-60 -z-10"
              aria-hidden="true"
            />

            {/* Photo frame: portrait 4:5 with refined gradient border */}
            <div className="relative w-44 sm:w-52 lg:w-60 aspect-[4/5] rounded-[2rem] p-[2px] brand-gradient-br brand-shadow">
              <div className="relative h-full w-full rounded-[1.9rem] bg-card overflow-hidden">
                <Image
                  src="/Kamrul_Hasan.jpg"
                  alt={t.hero.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 11rem, (max-width: 1024px) 13rem, 15rem"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Bottom gradient overlay for depth */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
                  aria-hidden="true"
                />

                {/* GitHub handle plate inside photo */}
                <a
                  href="https://github.com/KamrulSarwar23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 text-white"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="12"
                    height="12"
                    className="shrink-0"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                  <span className="text-xs font-semibold tracking-tight truncate">
                    KamrulSarwar23
                  </span>
                </a>
              </div>
            </div>

            {/* Floating "Projects" stat card — top right */}
            <div
              className="absolute -top-4 -right-3 sm:-top-5 sm:-right-6 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-2.5 sm:p-3 shadow-xl shadow-foreground/5 animate-bounce-soft"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl brand-gradient-tr text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="16"
                    height="16"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold leading-none">
                    15+
                  </div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">
                    Projects
                  </div>
                </div>
              </div>
            </div>

            {/* Floating "Years" stat card — bottom left */}
            <div
              className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-6 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-2.5 sm:p-3 shadow-xl shadow-foreground/5 animate-bounce-soft"
              style={{ animationDelay: "1.4s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl brand-gradient-tr text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="16"
                    height="16"
                  >
                    <path d="M12 2l2.39 4.84L20 7.66l-3.85 3.75.91 5.3L12 14.27 6.94 16.7l.91-5.3L4 7.66l5.61-.82L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold leading-none">
                    3+ yrs
                  </div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">
                    Full Stack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold">
        <AnimatedCounter value={value} />
      </div>
      <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
    </div>
  );
}

const techs = [
  "Laravel",
  "PHP",
  "Vue.js",
  "React.js",
  "Next.js",
  "Inertia.js",
  "Tailwind CSS",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
  "GitHub Actions",
  "REST API",
  "ShadCN",
];

function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <div className="relative mt-20 overflow-hidden border-y border-border bg-card/50 backdrop-blur">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent"
        aria-hidden="true"
      />
      <div className="flex w-max animate-marquee py-4">
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="mx-6 flex items-center gap-2 text-sm text-muted whitespace-nowrap hover:text-foreground transition-colors"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full brand-gradient" />
            <span className="font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
