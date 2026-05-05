"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if filled, silently succeed (skip submit)
    if ((data.get("_website") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!FORMSPREE_ID) {
      setStatus("error");
      setErrorMsg(
        "Form is not configured yet. Set NEXT_PUBLIC_FORMSPREE_ID in .env.local."
      );
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const msg =
          (json && (json.error || json.errors?.[0]?.message)) ||
          "Something went wrong. Please try again.";
        setStatus("error");
        setErrorMsg(msg);
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full brand-glow blur-3xl"
      />

      <div className="relative">
        <h3 className="text-lg sm:text-xl font-semibold">Send a direct message</h3>
        <p className="mt-1 text-sm text-muted">
          I&apos;ll get back to you within 24 hours.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field
            label="Your name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            autoComplete="name"
            disabled={isSubmitting}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            disabled={isSubmitting}
          />
        </div>

        <div className="mt-4">
          <Field
            label="Subject"
            name="subject"
            type="text"
            placeholder="Project inquiry"
            autoComplete="off"
            disabled={isSubmitting}
          />
        </div>

        <div className="mt-4">
          <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            disabled={isSubmitting}
            placeholder="Tell me about your project, timeline, and what you'd like to build…"
            className="w-full rounded-xl border border-border bg-background/60 backdrop-blur px-4 py-3 text-sm leading-relaxed outline-none focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 transition resize-y disabled:opacity-60"
          />
        </div>

        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label>
            Don&apos;t fill this out:
            <input type="text" name="_website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="mt-5 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          <div aria-live="polite" className="text-sm min-h-[1.25rem]">
            {status === "success" && (
              <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckIcon /> Message sent — thanks! I&apos;ll be in touch.
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-medium">
                <AlertIcon /> {errorMsg}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="shine relative inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white brand-shadow transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Spinner /> Sending…
              </>
            ) : (
              <>
                <SendIcon /> Send message
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  autoComplete,
  disabled,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-1.5">
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        disabled={disabled}
        className="w-full rounded-xl border border-border bg-background/60 backdrop-blur px-4 py-2.5 text-sm outline-none focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 transition disabled:opacity-60"
      />
    </div>
  );
}

function SendIcon() {
  return (
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
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      className="animate-spin"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AlertIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="13" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
