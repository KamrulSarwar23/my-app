"use client";

import { SectionHeading } from "./About";
import Reveal from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
};

// Replace these with real quotes from clients/colleagues.
const testimonials: Testimonial[] = [
  {
    quote:
      "Kamrul shipped our e-commerce dashboard ahead of schedule and the code was rock solid. He thinks like an owner — flagging edge cases I hadn't even considered. Easiest hire I've made.",
    name: "Sarah Chen",
    role: "Product Lead, Boutique Retail",
    initial: "S",
  },
  {
    quote:
      "We needed a Laravel + Vue rewrite of a legacy portal. Kamrul carried the project from architecture to deployment — clean APIs, sensible migrations, zero drama. Would absolutely work with him again.",
    name: "Md. Rakib Hossain",
    role: "Engineering Manager, Iconic Solutions",
    initial: "R",
  },
  {
    quote:
      "Built our real-estate auction platform end-to-end with React and Next.js. Communication was crisp, the UI is fast, and the code is genuinely a pleasure to read. A rare combination.",
    name: "Anita Verma",
    role: "Founder, PropAuction",
    initial: "A",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-10 w-[700px] h-[420px] brand-glow blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Kind words"
            title="What people I've worked with say"
            description="A few quotes from clients and colleagues I've shipped projects with."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} direction={i % 2 === 0 ? "left" : "right"}>
              <figure className="lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-foreground/20 hover:shadow-2xl">
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full brand-gradient-tr opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                />
                {/* Top accent line */}
                <span className="absolute top-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Big quote mark */}
                <svg
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  className="relative -ml-1 -mt-1 brand-gradient-text"
                  aria-hidden="true"
                  style={{
                    fill: "url(#quote-grad)",
                  }}
                >
                  <defs>
                    <linearGradient id="quote-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--brand-from)" />
                      <stop offset="50%" stopColor="var(--brand-via)" />
                      <stop offset="100%" stopColor="var(--brand-to)" />
                    </linearGradient>
                  </defs>
                  <path d="M7.17 6A5 5 0 0 0 3 11v7h6v-7H6.17A3 3 0 0 1 9 8.17V6zm10 0A5 5 0 0 0 13 11v7h6v-7h-2.83A3 3 0 0 1 19 8.17V6z" />
                </svg>

                {/* 5-star row */}
                <div className="mt-2 flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="relative mt-3 text-sm sm:text-[15px] leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="relative mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full brand-gradient-tr text-white font-bold text-base shadow-md">
                    {t.initial}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">{t.name}</div>
                    <div className="text-xs text-muted truncate">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.39 4.84L20 7.66l-3.85 3.75.91 5.3L12 14.27 6.94 16.7l.91-5.3L4 7.66l5.61-.82L12 2z" />
    </svg>
  );
}
