import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { listPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on full-stack web development, AI integration, modern programming workflows, and what I'm learning shipping production apps.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = listPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-20 w-[800px] h-[400px] brand-glow blur-3xl rounded-full"
        />

        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <header className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Writing
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="mt-4 text-base text-muted max-w-2xl mx-auto leading-relaxed">
              Notes on full-stack development, AI integration, and what I&apos;m
              learning shipping production apps.
            </p>
          </header>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="lift group relative flex flex-col h-full rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 hover:shadow-2xl transition overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-center gap-2 text-xs text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between gap-2 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
