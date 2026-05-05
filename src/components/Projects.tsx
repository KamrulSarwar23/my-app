"use client";

import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Projects() {
  const t = useT();
  const items = t.projects.items;

  const projects = [
    {
      key: "ecommerce",
      title: items.ecommerce.title,
      description: items.ecommerce.description,
      stack: ["Laravel", "React", "MySQL", "REST API"],
      links: [
        { label: t.projects.backend, href: "https://github.com/KamrulSarwar23" },
        { label: t.projects.frontend, href: "https://github.com/KamrulSarwar23" },
      ],
      accent: "from-blue-500 to-cyan-500",
      icon: "🛍️",
    },
    {
      key: "construction",
      title: items.construction.title,
      description: items.construction.description,
      stack: ["Laravel", "React", "Tailwind CSS"],
      links: [
        { label: t.projects.backend, href: "https://github.com/KamrulSarwar23" },
        { label: t.projects.frontend, href: "https://github.com/KamrulSarwar23" },
      ],
      accent: "from-amber-500 to-orange-500",
      icon: "🏗️",
    },
    {
      key: "auction",
      title: items.auction.title,
      description: items.auction.description,
      stack: ["Laravel", "Inertia.js", "Vue.js"],
      links: [
        { label: t.projects.liveLink, href: "https://github.com/KamrulSarwar23" },
      ],
      accent: "from-emerald-500 to-teal-500",
      icon: "🏠",
    },
    {
      key: "multivendor",
      title: items.multivendor.title,
      description: items.multivendor.description,
      stack: ["Laravel", "Blade", "MySQL"],
      links: [
        { label: t.projects.sourceCode, href: "https://github.com/KamrulSarwar23" },
      ],
      accent: "from-purple-500 to-pink-500",
      icon: "🛒",
    },
    {
      key: "jobs",
      title: items.jobs.title,
      description: items.jobs.description,
      stack: ["Laravel", "Bootstrap", "MySQL"],
      links: [
        { label: t.projects.sourceCode, href: "https://github.com/KamrulSarwar23" },
      ],
      accent: "from-rose-500 to-red-500",
      icon: "💼",
    },
    {
      key: "library",
      title: items.library.title,
      description: items.library.description,
      stack: ["Laravel", "MySQL", "Bootstrap"],
      links: [
        { label: t.projects.sourceCode, href: "https://github.com/KamrulSarwar23" },
      ],
      accent: "from-indigo-500 to-violet-500",
      icon: "📚",
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.key} delay={i * 80}>
              <article className="lift group relative h-full flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-2xl hover:border-foreground/20">
                <div className="relative h-36 brand-gradient-tr overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-25 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Floating emoji icon */}
                  <div
                    className="absolute right-4 top-4 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6"
                    aria-hidden="true"
                  >
                    {project.icon}
                  </div>

                  <div className="absolute bottom-3 left-4 text-white/90 text-xs font-mono">
                    /project
                  </div>

                  {/* Shine sweep on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/70 border border-transparent group-hover:border-foreground/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 pt-4 border-t border-border">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition"
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path d="M7 17L17 7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
