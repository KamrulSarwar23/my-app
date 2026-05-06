"use client";

import { useEffect, useRef, useState } from "react";

type Palette = {
  id: string;
  label: string;
  stops: [string, string, string];
};

const palettes: Palette[] = [
  { id: "default", label: "Aurora", stops: ["#6366f1", "#8b5cf6", "#ec4899"] },
  { id: "ocean",   label: "Ocean",  stops: ["#06b6d4", "#3b82f6", "#6366f1"] },
  { id: "sunset",  label: "Sunset", stops: ["#f59e0b", "#f43f5e", "#d946ef"] },
  { id: "forest",  label: "Forest", stops: ["#10b981", "#14b8a6", "#06b6d4"] },
  { id: "royal",   label: "Royal",  stops: ["#1d4ed8", "#4f46e5", "#7c3aed"] },
];

export default function ColorPaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("forest");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-palette");
    setActive(stored || "forest");
  }, []);

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

  const apply = (id: string) => {
    setActive(id);
    setOpen(false);
    const root = document.documentElement;
    if (id === "default") root.removeAttribute("data-palette");
    else root.setAttribute("data-palette", id);
    try {
      localStorage.setItem("palette", id);
    } catch {}
  };

  const current = palettes.find((p) => p.id === active) ?? palettes[0];
  const currentGradient = `linear-gradient(135deg, ${current.stops[0]}, ${current.stops[1]}, ${current.stops[2]})`;

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-label="Change color palette"
        title="Change color palette"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:border-foreground/30 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span
          className="block h-[18px] w-[18px] rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/15 transition-transform group-hover:rotate-45"
          style={{ backgroundImage: currentGradient }}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2.5 w-64 origin-top-right rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-2 z-50 animate-[palette-pop_180ms_cubic-bezier(0.2,0.8,0.2,1)]"
        >
          <div className="flex items-center justify-between px-2.5 pt-1.5 pb-2">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted">
              Theme color
            </span>
            <span
              className="h-1.5 w-6 rounded-full"
              style={{ backgroundImage: currentGradient }}
            />
          </div>

          <ul className="flex flex-col gap-0.5">
            {palettes.map((p) => {
              const isActive = p.id === active;
              const itemGradient = `linear-gradient(90deg, ${p.stops[0]}, ${p.stops[1]}, ${p.stops[2]})`;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={isActive}
                    onClick={() => apply(p.id)}
                    className={`group relative w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-sm transition-all ${
                      isActive
                        ? "bg-foreground/[0.06]"
                        : "hover:bg-foreground/[0.04]"
                    }`}
                  >
                    <span
                      className="relative h-7 w-7 rounded-lg shadow-md ring-1 ring-black/10 dark:ring-white/10 shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundImage: itemGradient }}
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <span className="text-sm font-semibold text-foreground leading-none">
                        {p.label}
                      </span>
                      <span
                        className="mt-1.5 h-1 w-full rounded-full opacity-70"
                        style={{ backgroundImage: itemGradient }}
                      />
                    </div>
                    <span
                      className={`shrink-0 flex h-5 w-5 items-center justify-center rounded-full transition-all ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-75 opacity-0"
                      }`}
                      style={{ backgroundImage: itemGradient }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="11"
                        height="11"
                        fill="none"
                        stroke="white"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
