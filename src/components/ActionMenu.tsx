"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/LanguageProvider";

type Props = {
  variant?: "desktop" | "mobile";
  onAction?: () => void;
};

export default function ActionMenu({ variant = "desktop", onAction }: Props) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleClick = () => {
    setOpen(false);
    onAction?.();
  };

  const isMobile = variant === "mobile";

  return (
    <div
      ref={wrapRef}
      className={`relative ${isMobile ? "w-full" : ""}`}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`group relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full brand-gradient-tr text-sm font-semibold text-white shadow-md shadow-black/10 hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition ${
          isMobile ? "w-full justify-center px-4 py-2.5" : "px-4 py-2"
        }`}
      >
        <span>{t.nav.hireMe}</span>
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 mt-2.5 w-72 origin-top rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-2 animate-[palette-pop_180ms_cubic-bezier(0.2,0.8,0.2,1)] ${
            isMobile ? "left-0 right-0 mx-auto w-full" : "right-0"
          }`}
        >
          <div className="flex items-center justify-between px-2.5 pt-1.5 pb-2">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted">
              Let&apos;s connect
            </span>
            <span
              className="h-1.5 w-6 rounded-full brand-gradient-tr"
              aria-hidden="true"
            />
          </div>

          <ul className="flex flex-col gap-0.5">
            <li>
              <a
                href="mailto:kamrulsarwar99@gmail.com"
                role="menuitem"
                onClick={handleClick}
                className="group/item relative w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl transition-all hover:bg-foreground/[0.05]"
              >
                <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl brand-gradient-tr text-white shadow-md transition-transform group-hover/item:scale-105 group-hover/item:rotate-3">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div className="flex-1 flex flex-col items-start min-w-0">
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    {t.nav.hireMe}
                  </span>
                  <span className="mt-0.5 text-[11px] text-muted truncate w-full text-left">
                    kamrulsarwar99@gmail.com
                  </span>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-muted transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-foreground"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="/Kamrul_Hasan_Resume.pdf"
                download
                role="menuitem"
                onClick={handleClick}
                className="group/item relative w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl transition-all hover:bg-foreground/[0.05]"
              >
                <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-transform group-hover/item:scale-105 group-hover/item:-rotate-3">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                <div className="flex-1 flex flex-col items-start min-w-0">
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    {t.nav.downloadCv}
                  </span>
                  <span className="mt-0.5 text-[11px] text-muted truncate w-full text-left">
                    Kamrul_Hasan_Resume.pdf
                  </span>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted">
                  PDF
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-1 mx-2.5 my-1 h-px bg-border" />

          <div className="px-2.5 py-1.5 flex items-center justify-between gap-2">
            <span className="text-[10px] text-muted">
              Usually replies within a day
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Available
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
