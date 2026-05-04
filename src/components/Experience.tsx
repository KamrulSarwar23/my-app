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

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <Reveal direction="left">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 text-white">
                  <Briefcase />
                </span>
                {t.experience.workTitle}
              </h3>
              <ol className="relative border-l-2 border-border space-y-8 ml-2">
                {experience.map((item, i) => (
                  <Reveal key={item.role} delay={i * 100}>
                    <li className="relative pl-6">
                      <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-blue-500" />
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 ring-4 ring-background" />
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
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-orange-500 text-white">
                  <Cap />
                </span>
                {t.experience.educationTitle}
              </h3>
              <ol className="relative border-l-2 border-border space-y-8 ml-2">
                {education.map((item, i) => (
                  <Reveal key={item.degree} delay={i * 80}>
                    <li className="relative pl-6 group">
                      <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 ring-4 ring-background transition-transform group-hover:scale-125" />
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
