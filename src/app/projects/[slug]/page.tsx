import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getProject, projects as allProjects } from "@/content/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 pb-20 relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition mb-6"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M11 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>

          {/* Hero banner */}
          <div className="relative h-56 sm:h-72 md:h-80 rounded-3xl overflow-hidden shadow-xl bg-foreground/5">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
            />

            <div className="absolute right-5 top-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-background/85 backdrop-blur-md text-2xl sm:text-3xl shadow-lg ring-1 ring-border">
              {project.icon}
            </div>
            <div className="absolute bottom-4 left-6 text-white/85 text-xs font-mono drop-shadow">
              /projects/{project.slug}
            </div>
          </div>

          <header className="mt-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-base text-muted leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/70 border border-border"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.repos.map((repo) => (
                <a
                  key={repo.href}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-foreground/30 hover:bg-foreground/5 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  {repo.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="12"
                    height="12"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17L17 7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </header>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-foreground/90">
              {project.longDescription}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">
              Key features
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4 text-sm leading-relaxed"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full brand-gradient-tr text-white">
                    <svg
                      viewBox="0 0 24 24"
                      width="11"
                      height="11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 rounded-2xl border border-border bg-card/60 p-6 sm:p-8 text-center">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Have a similar project in mind?
            </h2>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">
              I&apos;m available for new full-stack work — Laravel, React,
              Next.js, and AI integrations.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full brand-gradient px-5 py-2.5 text-sm font-semibold text-white"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-foreground/5 transition"
              >
                See more projects
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
