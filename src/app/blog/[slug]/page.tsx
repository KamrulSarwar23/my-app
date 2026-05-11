import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getPost, posts as allPosts, type BlogNode } from "@/content/blog";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 pb-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-10 w-[min(800px,120vw)] h-[300px] brand-glow blur-3xl rounded-full opacity-60"
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition mb-6 sm:mb-8"
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
            Back to blog
          </Link>

          <header>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight break-words">
              {post.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed break-words">
              {post.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/70 border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-8 sm:mt-10 h-px brand-gradient opacity-40" />

          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-[15.5px] leading-[1.75] text-foreground/90 break-words">
            {post.body.map((node, i) => (
              <NodeRenderer key={i} node={node} />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
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
              Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function NodeRenderer({ node }: { node: BlogNode }) {
  switch (node.type) {
    case "p":
      return <p className="break-words">{node.text}</p>;
    case "h2":
      return (
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-10 sm:mt-12 mb-3 break-words">
          {node.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-base sm:text-lg font-semibold mt-6 sm:mt-8 mb-2 break-words">
          {node.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 marker:text-foreground/40 break-words">
          {node.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-5 sm:pl-6 space-y-2 marker:text-foreground/60 marker:font-semibold break-words">
          {node.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "code":
      return (
        <pre className="rounded-xl border border-border bg-foreground/[0.04] p-3 sm:p-4 overflow-x-auto text-[12px] sm:text-[13px] font-mono leading-relaxed max-w-full">
          <code>{node.code}</code>
        </pre>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-foreground/30 pl-4 sm:pl-5 italic text-foreground/80 break-words">
          {node.text}
        </blockquote>
      );
  }
}
