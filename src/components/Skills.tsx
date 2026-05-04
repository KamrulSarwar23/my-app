"use client";

import { SectionHeading } from "./About";
import { useT } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Skills() {
  const t = useT();

  const skillGroups = [
    {
      title: t.skills.groups.frontend,
      accent: "from-blue-500 to-cyan-500",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "Vue.js",
        "React.js",
        "Next.js",
        "Inertia.js",
        "ShadCn",
      ],
    },
    {
      title: t.skills.groups.backend,
      accent: "from-purple-500 to-pink-500",
      skills: ["PHP", "Laravel", "REST API Development"],
    },
    {
      title: t.skills.groups.database,
      accent: "from-emerald-500 to-teal-500",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: t.skills.groups.devops,
      accent: "from-sky-500 to-indigo-500",
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS RDS",
        "Docker",
        "CI/CD with GitHub Actions",
        "cPanel",
      ],
    },
    {
      title: t.skills.groups.tools,
      accent: "from-amber-500 to-orange-500",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "Axios",
        "AI Integration",
        "Third-Party API Integrations",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 bg-foreground/[0.02] dark:bg-foreground/[0.02] border-y border-border overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <div className="lift group relative h-full rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 hover:shadow-lg overflow-hidden">
                {/* Top accent bar that grows on hover */}
                <div
                  className={`absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r ${group.accent} transition-all duration-500 group-hover:w-full`}
                />

                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${group.accent}`}
                  />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <span
                      key={skill}
                      style={{ transitionDelay: `${j * 30}ms` }}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-foreground/5 text-foreground/80 border border-transparent hover:border-foreground/15 hover:bg-foreground/10 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
