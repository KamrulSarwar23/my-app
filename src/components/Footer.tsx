"use client";

import { usePathname } from "next/navigation";
import { useT } from "@/i18n/LanguageProvider";

export default function Footer() {
  const t = useT();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  const quickLinks = [
    { href: sectionHref("home"), label: t.nav.home },
    { href: sectionHref("about"), label: t.nav.about },
    { href: sectionHref("services"), label: t.nav.services },
    { href: sectionHref("skills"), label: t.nav.skills },
    { href: sectionHref("projects"), label: t.nav.projects },
    { href: sectionHref("experience"), label: t.nav.experience },
    { href: "/blog", label: t.nav.blog },
    { href: sectionHref("contact"), label: t.nav.contact },
  ];

  const services = [
    { label: t.services.items.fullstack.title, href: sectionHref("services") },
    { label: t.services.items.ecommerce.title, href: sectionHref("services") },
    { label: t.services.items.ai.title, href: sectionHref("services") },
    { label: t.services.items.wordpress.title, href: sectionHref("services") },
    { label: t.services.items.api.title, href: sectionHref("services") },
    { label: t.services.items.ui.title, href: sectionHref("services") },
    { label: t.services.items.cloud.title, href: sectionHref("services") },
    { label: t.services.items.maintenance.title, href: sectionHref("services") },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/KamrulSarwar23",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kamrul-hasan-5546561ba/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/kamrulhasan.shuvo.792/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/KamrulHasan2399",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:kamrulsarwar99@gmail.com",
      icon: (
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
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] brand-glow blur-3xl" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-12 lg:col-span-4">
            <a href={sectionHref("home")} className="inline-block">
              <span className="text-2xl font-bold tracking-tight gradient-text">
                Kamrul.
              </span>
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Email pill */}
            <a
              href="mailto:kamrulsarwar99@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:border-foreground/30 hover:bg-foreground/5 transition"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              kamrulsarwar99@gmail.com
            </a>

            {/* Social row */}
            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.2em] font-medium text-muted mb-3">
                {t.footer.followMe}
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={s.label}
                    title={s.label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted hover:text-foreground hover:border-foreground/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <span className="inline-block w-0 h-px bg-foreground transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide">
              {t.footer.servicesHeading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <span className="inline-block w-0 h-px bg-foreground transition-all duration-300 group-hover:w-3" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide">
              {t.footer.getInTouch}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                  className="mt-0.5 shrink-0 text-accent"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{t.footer.location}</span>
              </li>
              <li>
                <a
                  href="tel:+8801646669099"
                  className="flex items-start gap-2 hover:text-foreground transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="14"
                    height="14"
                    className="mt-0.5 shrink-0 text-accent"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+880 1646-669099</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kamrulsarwar99@gmail.com"
                  className="flex items-start gap-2 hover:text-foreground transition-colors break-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="14"
                    height="14"
                    className="mt-0.5 shrink-0 text-accent"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>kamrulsarwar99@gmail.com</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/Kamrul_Hasan_Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground link-underline"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="14"
                    height="14"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {t.nav.downloadCv}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 text-center text-sm text-muted">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">Kamrul Hasan</span>.{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
