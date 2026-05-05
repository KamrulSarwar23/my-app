"use client";

import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Experience() {
  const t = useT();

  const experience = [
    {
      role: t.experience.work.role,
      company: t.experience.work.company,
      period: t.experience.work.period,
      description: t.experience.work.description,
      tech: ["Laravel", "Vue.js", "React.js", "Next.js"],
    },
  ];

  const education = t.experience.education;

  const certifications = [
    {
      name: "Laravel & Vue.js Web Development",
      issuer: "Ostad Ltd · Batch 2",
      year: "2023",
    },
    {
      name: "React.js & Next.js Course",
      issuer: "Learn With Sumit · Batch 3",
      year: "2024",
    },
    {
      name: "AWS Cloud Essentials",
      issuer: "Self-paced · AWS Skill Builder",
      year: "2024",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 bg-foreground/[0.02] dark:bg-foreground/[0.02] border-y border-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <Reveal direction="left">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg brand-gradient-tr text-white">
                  <Briefcase />
                </span>
                {t.experience.workTitle}
              </h3>
              <ol className="relative border-l-2 border-border space-y-8 ml-2">
                {experience.map((item, i) => (
                  <Reveal key={item.role} delay={i * 100}>
                    <li className="relative pl-6">
                      <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping-slow rounded-full"
                          style={{ background: "var(--brand-from)" }}
                        />
                        <span className="relative inline-flex h-4 w-4 rounded-full brand-gradient-tr ring-4 ring-background" />
                      </span>
                      <div className="text-xs uppercase tracking-wider text-muted font-medium">
                        {item.period}
                      </div>
                      <h4 className="mt-1 text-lg font-semibold">{item.role}</h4>
                      <div className="text-sm font-medium gradient-text inline-block">
                        {item.company}
                      </div>
                      <p className="mt-3 text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-0.5 rounded-md bg-foreground/5 hover:bg-foreground/10 hover:-translate-y-0.5 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg brand-gradient-tr text-white">
                  <Cap />
                </span>
                {t.experience.educationTitle}
              </h3>
              <ol className="relative border-l-2 border-border space-y-8 ml-2">
                {education.map((item, i) => (
                  <Reveal key={item.degree} delay={i * 80}>
                    <li className="relative pl-6 group">
                      <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full brand-gradient-tr ring-4 ring-background transition-transform group-hover:scale-125" />
                      <div className="text-xs uppercase tracking-wider text-muted font-medium">
                        {item.period}
                      </div>
                      <h4 className="mt-1 text-base font-semibold">
                        {item.degree}
                      </h4>
                      <div className="text-sm text-muted">{item.school}</div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg brand-gradient-tr text-white">
                  <Award />
                </span>
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <Reveal key={cert.name} delay={i * 80}>
                    <li className="group relative rounded-2xl border border-border bg-card p-4 hover:border-foreground/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                      <span className="absolute top-0 left-0 right-0 h-px brand-gradient origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl brand-gradient-tr text-white shadow-sm">
                          <Verified />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold leading-snug">
                            {cert.name}
                          </div>
                          <div className="mt-0.5 text-xs text-muted">
                            {cert.issuer}
                          </div>
                          <div className="mt-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-bold text-muted">
                            <span className="brand-gradient inline-block h-1 w-3 rounded-full" />
                            {cert.year}
                          </div>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Briefcase() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function Cap() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function Award() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function Verified() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.5 2.5L18 4l1 3.5 3 1.5-1.5 3 1.5 3-3 1.5L18 20l-3.5-.5L12 22l-2.5-2.5L6 20l-1-3.5L2 15l1.5-3L2 9l3-1.5L6 4l3.5.5z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
