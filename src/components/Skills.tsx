"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import { TECH_ICONS, TechIcon } from "./TechIcons";

type GroupId = "frontend" | "backend" | "database" | "devops" | "tools";

type Tech = { iconKey: keyof typeof TECH_ICONS; label: string };

export default function Skills() {
  const t = useT();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const groups: {
    id: GroupId;
    title: string;
    icon: React.ReactNode;
    items: Tech[];
  }[] = [
    {
      id: "frontend",
      title: t.skills.groups.frontend,
      icon: <FrontendIcon />,
      items: [
        { iconKey: "html", label: "HTML" },
        { iconKey: "css", label: "CSS" },
        { iconKey: "scss", label: "SCSS" },
        { iconKey: "bootstrap", label: "Bootstrap" },
        { iconKey: "tailwind", label: "Tailwind" },
        { iconKey: "javascript", label: "JavaScript" },
        { iconKey: "vue", label: "Vue.js" },
        { iconKey: "react", label: "React" },
        { iconKey: "next", label: "Next.js" },
        { iconKey: "inertia", label: "Inertia" },
        { iconKey: "shadcn", label: "shadcn/ui" },
      ],
    },
    {
      id: "backend",
      title: t.skills.groups.backend,
      icon: <BackendIcon />,
      items: [
        { iconKey: "php", label: "PHP" },
        { iconKey: "laravel", label: "Laravel" },
        { iconKey: "api", label: "REST API" },
      ],
    },
    {
      id: "database",
      title: t.skills.groups.database,
      icon: <DatabaseIcon />,
      items: [
        { iconKey: "mysql", label: "MySQL" },
        { iconKey: "mongodb", label: "MongoDB" },
      ],
    },
    {
      id: "devops",
      title: t.skills.groups.devops,
      icon: <CloudIcon />,
      items: [
        { iconKey: "aws", label: "AWS EC2" },
        { iconKey: "aws", label: "AWS S3" },
        { iconKey: "aws", label: "AWS RDS" },
        { iconKey: "docker", label: "Docker" },
        { iconKey: "githubactions", label: "GitHub Actions" },
        { iconKey: "cpanel", label: "cPanel" },
      ],
    },
    {
      id: "tools",
      title: t.skills.groups.tools,
      icon: <ToolsIcon />,
      items: [
        { iconKey: "git", label: "Git" },
        { iconKey: "github", label: "GitHub" },
        { iconKey: "vscode", label: "VS Code" },
        { iconKey: "postman", label: "Postman" },
        { iconKey: "axios", label: "Axios" },
        { iconKey: "ai", label: "AI Integration" },
        { iconKey: "plug", label: "3rd-Party APIs" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 bg-foreground/[0.02] dark:bg-foreground/[0.02] border-y border-border overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-20 w-[800px] h-[400px] brand-glow blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {groups.map((group, gi) => {
            const isWide = group.id === "frontend";
            return (
              <Reveal
                key={group.id}
                delay={gi * 80}
                direction={gi % 2 === 0 ? "left" : "right"}
                className={isWide ? "lg:col-span-12" : "lg:col-span-6"}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:border-foreground/20 hover:-translate-y-1 hover:shadow-2xl">
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full brand-gradient-tr opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  />
                  {/* Top accent bar */}
                  <span className="absolute top-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Header */}
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl brand-gradient-tr text-white shadow-md">
                        {group.icon}
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted">
                          Stack
                        </div>
                        <h3 className="text-lg font-semibold leading-tight">
                          {group.title}
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-muted">
                      <span className="brand-gradient inline-block h-1.5 w-1.5 rounded-full" />
                      {group.items.length} tools
                    </span>
                  </div>

                  {/* Tile grid */}
                  <div
                    className={`relative mt-6 grid gap-2.5 sm:gap-3 ${
                      isWide
                        ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11"
                        : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
                    }`}
                  >
                    {group.items.map((item, i) => {
                      const def = TECH_ICONS[item.iconKey];
                      return (
                        <div
                          key={`${item.iconKey}-${i}`}
                          style={{ transitionDelay: `${i * 25}ms` }}
                          className="tech-tile group/tile relative flex flex-col items-center justify-center gap-2 aspect-square rounded-2xl border border-border bg-background/60 backdrop-blur p-2 hover:-translate-y-1.5 hover:border-foreground/25 hover:shadow-lg transition-all duration-300"
                        >
                          <span className="relative flex items-center justify-center transition-transform duration-300 group-hover/tile:scale-110">
                            <TechIcon def={def} isDark={isDark} size={26} />
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-foreground/80 text-center leading-tight line-clamp-2">
                            {item.label}
                          </span>
                          {/* Per-tile tinted glow on hover */}
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300"
                            style={{
                              background: `radial-gradient(circle at 50% 0%, ${
                                isDark && def.colorDark
                                  ? def.colorDark
                                  : def.color
                              }22, transparent 70%)`,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FrontendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M2 9h20" />
      <path d="M8 22h8" />
      <path d="M12 18v4" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="6" rx="1.5" />
      <rect x="2" y="15" width="20" height="6" rx="1.5" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" />
      <circle cx="6" cy="18" r="0.5" fill="currentColor" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78 6 6 0 0 0-11.6 2.78A4 4 0 0 0 6 19h11.5z" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
