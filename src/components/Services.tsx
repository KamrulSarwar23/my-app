"use client";

import Link from "next/link";
import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import { services } from "@/content/services";

export default function Services() {
  const t = useT();
  const items = t.services.items;

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((service, i) => {
            const translated = items[service.iconKey];
            return (
              <Reveal key={service.slug} delay={i * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="lift group relative block h-full rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className="absolute -top-12 -right-12 h-32 w-32 rounded-full brand-gradient-tr opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl brand-gradient-tr text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <ServiceIcon iconKey={service.iconKey} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold group-hover:text-accent transition-colors">
                    {translated.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {translated.description}
                  </p>

                  <div className="mt-5 h-px w-0 brand-gradient transition-all duration-500 group-hover:w-full" />
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-foreground/30 hover:bg-foreground/5 transition"
            >
              View all services
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
