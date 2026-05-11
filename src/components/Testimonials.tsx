"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
};

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
  {
    quote:
      "Hired Kamrul to add AI features to our support tool. He didn't just bolt on an LLM — he thought through prompt design, evals, cost limits, and graceful fallbacks. Production-grade from day one.",
    name: "Daniel Park",
    role: "CTO, HelpdeskHQ",
    initial: "D",
  },
  {
    quote:
      "We brought Kamrul in for a Next.js + Tailwind redesign. Lighthouse scores went from average to excellent, and the team picked up his patterns easily. Clean, well-named code that documents itself.",
    name: "Priya Sharma",
    role: "Senior Designer, LunaLabs",
    initial: "P",
  },
  {
    quote:
      "Took our MVP from messy prototype to a polished multi-tenant SaaS in six weeks. Stripe billing, role-based access, admin panel — all done right. Saved us months of trial and error.",
    name: "Marcus Holloway",
    role: "Founder, FleetSync",
    initial: "M",
  },
  {
    quote:
      "Migrated our WooCommerce store to a custom Laravel + Next.js stack. Page speed doubled, the admin team loves the new dashboard, and our SEO rankings held steady through the cutover.",
    name: "Lena Müller",
    role: "Operations Manager, Brückenholz GmbH",
    initial: "L",
  },
  {
    quote:
      "Built our restaurant management system on time and on budget. Clean code, thoughtful UX, and always ready to fix small issues after launch. Reliable, easy to work with — a real partner.",
    name: "Tanvir Ahmed",
    role: "Owner, Bistro Dhaka",
    initial: "T",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  }, []);

  // Sync active index from scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sl = track.scrollLeft;
        let nearest = 0;
        let nearestDist = Infinity;
        for (let i = 0; i < track.children.length; i++) {
          const child = track.children[i] as HTMLElement;
          const dist = Math.abs(child.offsetLeft - sl);
          if (dist < nearestDist) {
            nearest = i;
            nearestDist = dist;
          }
        }
        setIndex((curr) => (curr === nearest ? curr : nearest));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Autoplay (respects prefers-reduced-motion)
  useEffect(() => {
    if (paused) return;
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % total;
        scrollToIndex(next);
        return next;
      });
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, total, scrollToIndex]);

  const goPrev = () => scrollToIndex((index - 1 + total) % total);
  const goNext = () => scrollToIndex((index + 1) % total);

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-10 w-[min(700px,120vw)] h-[420px] brand-glow blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Kind words"
            title="What people I've worked with say"
            description="A few quotes from clients and colleagues I've shipped projects with."
            align="center"
          />
        </Reveal>

        <Reveal>
          <div
            className="relative mt-10 sm:mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="no-scrollbar flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
              role="region"
              aria-label="Testimonials"
              aria-roledescription="carousel"
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="snap-start shrink-0 basis-[88%] sm:basis-[60%] md:basis-[47%] lg:basis-[32%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                >
                  <figure className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 transition hover:border-foreground/20 hover:shadow-2xl">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full brand-gradient-tr opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                    />
                    <span className="absolute top-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                    <svg
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      className="relative -ml-1 -mt-1"
                      aria-hidden="true"
                      style={{ fill: `url(#quote-grad-${i})` }}
                    >
                      <defs>
                        <linearGradient
                          id={`quote-grad-${i}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="var(--brand-from)" />
                          <stop offset="50%" stopColor="var(--brand-via)" />
                          <stop offset="100%" stopColor="var(--brand-to)" />
                        </linearGradient>
                      </defs>
                      <path d="M7.17 6A5 5 0 0 0 3 11v7h6v-7H6.17A3 3 0 0 1 9 8.17V6zm10 0A5 5 0 0 0 13 11v7h6v-7h-2.83A3 3 0 0 1 19 8.17V6z" />
                    </svg>

                    <div className="mt-2 flex items-center gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} />
                      ))}
                    </div>

                    <blockquote className="relative mt-3 text-sm sm:text-[15px] leading-relaxed text-foreground/90 flex-1 break-words">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <figcaption className="relative mt-6 flex items-center gap-3 pt-5 border-t border-border">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full brand-gradient-tr text-white font-bold text-base shadow-md">
                        {t.initial}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold truncate">
                          {t.name}
                        </div>
                        <div className="text-xs text-muted truncate">
                          {t.role}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Select testimonial"
              >
                {testimonials.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToIndex(i)}
                      role="tab"
                      aria-selected={active}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active
                          ? "w-6 brand-gradient"
                          : "w-2 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.39 4.84L20 7.66l-3.85 3.75.91 5.3L12 14.27 6.94 16.7l.91-5.3L4 7.66l5.61-.82L12 2z" />
    </svg>
  );
}
