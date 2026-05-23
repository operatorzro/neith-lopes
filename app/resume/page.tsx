import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Button from "@/components/Button";
import { identity, resume, education, credentials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume — Neith Lopes",
  description:
    "Neith Lopes — building at the intersection of markets, AI engineering and products. Selected work, experience, skills and education.",
};

export default function ResumePage() {
  return (
    <PageShell>
      <article className="w-full max-w-content px-6 md:px-10 lg:px-16 pb-20 flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-h1 text-heading">{identity.name}</h1>
              <p className="text-body-m text-body">{identity.role}</p>
            </div>
            <Button href={`mailto:${identity.email}`} external>
              {identity.email}
            </Button>
          </div>
          <p className="text-body-m text-body max-w-[680px]">{resume.summary}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-body-s text-body">
            <span>{identity.location}</span>
            <a href={identity.social[0].href} target="_blank" rel="noreferrer" className="hover:text-heading">
              LinkedIn
            </a>
          </div>
        </header>

        {/* Selected Work */}
        <section className="flex flex-col gap-6">
          <h2 className="text-[11px] tracking-[0.18em] uppercase text-body">
            Selected work
          </h2>
          <div className="flex flex-col gap-8">
            {resume.projects.map((e) => (
              <div key={e.role + e.org} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1.5 sm:gap-6">
                <span className="text-body-s text-body">{e.period}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-body-m text-heading">
                    {e.org} <span className="text-body">· {e.role}</span>
                  </h3>
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="text-body-s text-body marker:text-white/30">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="flex flex-col gap-6">
          <h2 className="text-[11px] tracking-[0.18em] uppercase text-body">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {resume.experience.map((e) => (
              <div key={e.role + e.org} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1.5 sm:gap-6">
                <span className="text-body-s text-body">{e.period}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-body-m text-heading">
                    {e.role} <span className="text-body">· {e.org}</span>
                  </h3>
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="text-body-s text-body marker:text-white/30">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="flex flex-col gap-6">
          <h2 className="text-[11px] tracking-[0.18em] uppercase text-body">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {education.map((e) => (
              <div key={e.school} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1.5 sm:gap-6">
                <span className="text-body-s text-body">{e.period}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-body-m text-heading">
                    {e.degree} <span className="text-body">· {e.school}</span>
                  </h3>
                  <p className="text-body-s text-body">{e.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-6">
          <h2 className="text-[11px] tracking-[0.18em] uppercase text-body">
            Skills
          </h2>
          <div className="flex flex-col gap-5">
            {resume.skillGroups.map((g) => (
              <div key={g.title} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1.5 sm:gap-6">
                <span className="text-body-s text-heading">{g.title}</span>
                <p className="text-body-s text-body">{g.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="flex flex-col gap-6">
          <h2 className="text-[11px] tracking-[0.18em] uppercase text-body">
            Credentials
          </h2>
          <ul className="flex flex-col gap-2">
            {credentials.map((c) => (
              <li key={c} className="text-body-s text-heading">
                {c}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}
