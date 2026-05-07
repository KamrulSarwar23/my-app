"use client";

import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const EMAIL = "kamrulsarwar99@gmail.com";
const PHONE_DISPLAY = "+880 1646-669099";
const PHONE_TEL = "+8801646669099";

export default function Contact() {
  const t = useT();

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-10 w-[680px] h-[420px] brand-glow blur-3xl rounded-full"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
            align="center"
          />
        </Reveal>

        {/* Availability pill */}
        <Reveal delay={80}>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-slow" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-foreground">Available for new projects</span>
              <span className="text-muted">· Replies within 24h</span>
            </span>
          </div>
        </Reveal>

        {/* Contact method cards */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
          <Reveal direction="left" delay={120}>
            <ContactCard
              href={`mailto:${EMAIL}`}
              label="Email"
              value={EMAIL}
              cta="Send a message"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
            />
          </Reveal>

          <Reveal direction="right" delay={160}>
            <ContactCard
              href={`tel:${PHONE_TEL}`}
              label="Phone"
              value={PHONE_DISPLAY}
              cta="Give me a call"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
          </Reveal>
        </div>

        {/* Inline form */}
        <Reveal delay={220}>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>

        {/* Divider + socials */}
        <Reveal delay={280}>
          <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-muted">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
            <span>Or find me on</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <SocialLink
              href="https://github.com/KamrulSarwar23"
              label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/kamrul-hasan-5546561ba/" label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://x.com/KamrulHasan2399" label="X (Twitter)">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
              </svg>
            </SocialLink>
            <SocialLink href={`mailto:${EMAIL}`} label="Email">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="18"
                height="18"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </SocialLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  label,
  value,
  cta,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  cta: string;
  icon: React.ReactNode;
}) {
  const isEmail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isEmail ? undefined : undefined}
      className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full brand-gradient-tr opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
      />

      <div className="relative flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl brand-gradient-tr text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
            {label}
          </div>
          <div className="mt-1 text-base sm:text-lg font-semibold break-all">
            {value}
          </div>
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-between text-sm">
        <span className="font-medium text-muted transition-colors group-hover:text-foreground">
          {cta}
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 group-hover:border-transparent group-hover:brand-gradient-tr group-hover:text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </div>

      {/* Bottom accent that fills on hover */}
      <span className="absolute bottom-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full brand-gradient-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <span className="relative">{children}</span>
    </a>
  );
}
