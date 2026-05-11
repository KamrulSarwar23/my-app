import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceIcon from "@/components/ServiceIcon";
import { getService, services as allServices } from "@/content/services";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 pb-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-10 w-[min(800px,120vw)] h-[300px] brand-glow blur-3xl rounded-full opacity-60"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
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
            Back to services
          </Link>

          <header className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
            <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl brand-gradient-tr text-white shadow-lg">
              <ServiceIcon iconKey={service.iconKey} size={28} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Service
              </p>
              <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight break-words">
                {service.title}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed break-words">
                {service.shortDescription}
              </p>
            </div>
          </header>

          <div className="mt-8 sm:mt-10 h-px brand-gradient opacity-40" />

          <section className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[1.75] text-foreground/90 break-words">
              {service.longDescription}
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              What&apos;s included
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.features.map((f, i) => (
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
                  <span className="break-words">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              What you&apos;ll get
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-[15px] leading-relaxed">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 break-words">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full brand-gradient"
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Tools &amp; technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs sm:text-sm px-3 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-12 sm:mt-16 rounded-2xl border border-border bg-card/60 p-6 sm:p-8 text-center">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Need this for your project?
            </h2>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">
              Let&apos;s talk about your timeline, scope, and budget. I usually
              reply within a day.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full brand-gradient px-5 py-2.5 text-sm font-semibold text-white"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-foreground/5 transition"
              >
                See all services
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
