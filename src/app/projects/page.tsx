import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Kamrul Hasan — production apps, client work, and side projects spanning Laravel, React, Next.js, and AI integrations.",
};

export default function ProjectsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 pb-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-20 w-[min(800px,120vw)] h-[400px] brand-glow blur-3xl rounded-full"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Portfolio
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="gradient-text">All Projects</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
              A collection of production apps, client work, and side projects —
              spanning Laravel, React, Next.js, and AI integrations.
            </p>
          </header>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="lift group relative h-full flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-2xl hover:border-foreground/20 transition"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block h-44 overflow-hidden bg-foreground/5"
                  aria-label={`View ${project.title}`}
                >
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
                </Link>

                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  <h2 className="text-lg font-semibold leading-snug group-hover:text-accent transition-colors break-words">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
