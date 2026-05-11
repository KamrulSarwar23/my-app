import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development services by Kamrul Hasan — Laravel, React, Next.js, Vue, e-commerce, APIs, cloud deployment, and AI integration.",
};

export default function ServicesIndexPage() {
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
              What I do
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="gradient-text">All Services</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
              From idea to deployment — full-stack web development, e-commerce,
              APIs, cloud, and AI integrations.
            </p>
          </header>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="lift group relative flex flex-col h-full rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-foreground/20 hover:shadow-2xl transition overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full brand-gradient-tr opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500"
                />

                <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl brand-gradient-tr text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <ServiceIcon iconKey={service.iconKey} />
                </div>

                <h2 className="mt-5 text-lg font-semibold group-hover:text-accent transition-colors break-words">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1 break-words">
                  {service.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5 min-w-0">
                    {service.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/80 group-hover:text-accent transition-colors">
                    Learn more
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

                <div className="absolute bottom-0 left-0 right-0 h-px w-0 brand-gradient transition-all duration-500 group-hover:w-full" />
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
