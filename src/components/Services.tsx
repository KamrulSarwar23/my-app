"use client";

import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Services() {
  const t = useT();
  const items = t.services.items;

  const services = [
    {
      key: "fullstack",
      title: items.fullstack.title,
      description: items.fullstack.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      accent: "from-blue-500 to-cyan-500",
    },
    {
      key: "ecommerce",
      title: items.ecommerce.title,
      description: items.ecommerce.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
        </svg>
      ),
      accent: "from-purple-500 to-pink-500",
    },
    {
      key: "api",
      title: items.api.title,
      description: items.api.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      accent: "from-emerald-500 to-teal-500",
    },
    {
      key: "ui",
      title: items.ui.title,
      description: items.ui.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      accent: "from-amber-500 to-orange-500",
    },
    {
      key: "cloud",
      title: items.cloud.title,
      description: items.cloud.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      accent: "from-sky-500 to-indigo-500",
    },
    {
      key: "maintenance",
      title: items.maintenance.title,
      description: items.maintenance.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      accent: "from-rose-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.key} delay={i * 80}>
              <div className="lift group relative h-full rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 hover:shadow-xl overflow-hidden">
                {/* Soft glow that follows hover */}
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full brand-gradient-tr opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <div
                  className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl brand-gradient-tr text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                >
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom indicator on hover */}
                <div className="mt-5 h-px w-0 brand-gradient transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
