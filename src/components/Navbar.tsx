"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import ColorPaletteSwitcher from "./ColorPaletteSwitcher";
import ActionMenu from "./ActionMenu";
import { useT } from "@/i18n/LanguageProvider";

const sectionIds = [
  "home",
  "about",
  "services",
  "ai-demo",
  "skills",
  "projects",
  "experience",
  "blog",
  "contact",
] as const;

export default function Navbar() {
  const t = useT();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  const links = [
    { href: sectionHref("home"), match: "#home", label: t.nav.home },
    { href: sectionHref("about"), match: "#about", label: t.nav.about },
    { href: sectionHref("services"), match: "#services", label: t.nav.services },
    { href: sectionHref("ai-demo"), match: "#ai-demo", label: "AI Demo" },
    { href: sectionHref("skills"), match: "#skills", label: t.nav.skills },
    { href: sectionHref("projects"), match: "#projects", label: t.nav.projects },
    { href: sectionHref("experience"), match: "#experience", label: t.nav.experience },
    { href: sectionHref("blog"), match: "#blog", label: t.nav.blog },
    { href: sectionHref("contact"), match: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActive(pathname?.startsWith("/blog") ? "#blog" : "");
      return;
    }
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3">
        <a
          href={sectionHref("home")}
          className="text-xl font-bold tracking-tight gradient-text shrink-0"
        >
          Kamrul.
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const isActive = active === link.match;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative inline-block whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full brand-gradient" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <ColorPaletteSwitcher />
          <ThemeToggle />
          <ActionMenu />
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <ColorPaletteSwitcher />
          <ThemeToggle />
          <button
            aria-label={t.nav.toggleMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-foreground/5 transition"
          >
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
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => {
              const isActive = active === link.match;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-foreground/5 text-foreground"
                        : "text-muted hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <ActionMenu variant="mobile" onAction={() => setOpen(false)} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
