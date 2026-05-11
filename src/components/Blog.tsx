"use client";

import Link from "next/link";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";
import { listPosts } from "@/content/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const posts = listPosts().slice(0, 3);

  return (
    <section id="blog" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-10 w-[min(800px,120vw)] h-[400px] brand-glow blur-3xl rounded-full opacity-60"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Writing"
            title="Latest from the blog"
            description="Notes on full-stack development, AI integration, and what I'm learning shipping production apps."
          />
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="lift group relative flex flex-col h-full rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-foreground/20 hover:shadow-2xl transition overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-accent transition-colors break-words">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-muted leading-relaxed flex-1 break-words">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5 min-w-0">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/80 group-hover:text-accent transition-colors">
                    Read
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
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
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-foreground/30 hover:bg-foreground/5 transition"
            >
              View all blogs
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
