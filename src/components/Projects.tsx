"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import { projects } from "@/content/projects";

export default function Projects() {
  const t = useT();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projects.length;

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sl = track.scrollLeft;
        let nearest = 0;
        let nearestDist = Infinity;
        for (let i = 0; i < track.children.length; i++) {
          const child = track.children[i] as HTMLElement;
          const dist = Math.abs(child.offsetLeft - sl);
          if (dist < nearestDist) {
            nearest = i;
            nearestDist = dist;
          }
        }
        setIndex((curr) => (curr === nearest ? curr : nearest));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % total;
        scrollToIndex(next);
        return next;
      });
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, total, scrollToIndex]);

  const goPrev = () => scrollToIndex((index - 1 + total) % total);
  const goNext = () => scrollToIndex((index + 1) % total);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>

        <Reveal>
          <div
            className="relative mt-10 sm:mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div
              ref={trackRef}
              className="no-scrollbar flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
              role="region"
              aria-label="Projects"
              aria-roledescription="carousel"
            >
              {projects.map((project, i) => (
                <div
                  key={project.slug}
                  className="snap-start shrink-0 basis-[88%] sm:basis-[60%] md:basis-[47%] lg:basis-[32%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                >
                  <article className="lift group relative h-full flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-2xl hover:border-foreground/20">
                    <div className="relative h-44 overflow-hidden bg-foreground/5">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                      />

                      <div
                        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/85 backdrop-blur-md text-lg shadow-lg ring-1 ring-border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                        aria-hidden="true"
                      >
                        {project.icon}
                      </div>

                      <div className="absolute bottom-3 left-4 text-white/90 text-xs font-mono drop-shadow">
                        /project
                      </div>

                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors break-words">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed flex-1 break-words">
                        {project.shortDescription}
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

                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-border">
                        {project.repos.map((repo) => (
                          <a
                            key={repo.href}
                            href={repo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              fill="currentColor"
                            >
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            {repo.label}
                          </a>
                        ))}

                        <Link
                          href={`/projects/${project.slug}`}
                          className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
                        >
                          Details
                          <svg
                            viewBox="0 0 24 24"
                            width="13"
                            height="13"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-hover:translate-x-0.5"
                          >
                            <path d="M5 12h14" />
                            <path d="M13 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Select project"
              >
                {projects.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToIndex(i)}
                      role="tab"
                      aria-selected={active}
                      aria-label={`Go to project ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active
                          ? "w-6 brand-gradient"
                          : "w-2 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-foreground/30 hover:bg-foreground/5 transition"
            >
              View all projects
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
