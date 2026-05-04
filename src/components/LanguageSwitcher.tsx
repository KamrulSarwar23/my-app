"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        title={t.language.en}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === "en"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("bn")}
        aria-pressed={locale === "bn"}
        title={t.language.bn}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === "bn"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        বাং
      </button>
    </div>
  );
}
