import Nav from "@/components/Nav";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceRow from "@/components/ExperienceRow";
import Footer from "@/components/Footer";
import Crossfade from "@/components/Crossfade";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import {
  identity,
  experience,
  projects,
  education,
  skills,
  credentials,
  cycles,
} from "@/lib/data";

export default function Home() {
  return (
    <main className="w-full max-w-page mx-auto flex flex-col items-center">
      {/* Top: Nav + Hero */}
      <div className="w-full max-w-content px-16 pt-16 pb-8 flex flex-col gap-6">
        <Nav name={identity.name} />
        <div className="flex flex-col gap-3 pt-2">
          <Badge>{identity.location}</Badge>
          <h1 className="text-h1 text-heading text-balance max-w-[680px]">
            {identity.name} —{" "}
            <span className="text-body">
              <Crossfade words={cycles} />
            </span>
            .
          </h1>
          <p className="text-body-m text-body max-w-[560px]">
            {identity.role}. {identity.bio}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button href="#contact">Get in touch</Button>
            <Button href="#experience" variant="ghost">
              See experience
            </Button>
          </div>
        </div>
      </div>

      {/* Experience */}
      <Section title="Experience" id="experience">
        <div className="flex flex-col">
          {experience.map((e) => (
            <ExperienceRow key={e.role + e.org} {...e} />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects" id="projects">
        <div className="flex flex-col gap-6">
          <ProjectCard
            {...projects[0]}
            ticker={[
              "FX",
              "equities",
              "commodities",
              "rates",
              "gold",
              "macro",
              "signals",
              "review",
            ]}
          />
          <ProjectCard {...projects[1]} />
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" id="skills">
        <div className="grid grid-cols-2 gap-4">
          {skills.map((group) => (
            <div
              key={group.title}
              className="bg-ui rounded-lg p-5 flex flex-col gap-3"
            >
              <h3 className="text-body-m text-heading">{group.title}</h3>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-body-s text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" id="education">
        <div className="flex flex-col">
          {education.map((e) => (
            <ExperienceRow
              key={e.school + e.degree}
              role={e.degree}
              org={e.school}
              period={e.period}
              summary={e.summary}
            />
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <Section title="Credentials" id="credentials">
        <ul className="flex flex-wrap gap-2">
          {credentials.map((c) => (
            <li
              key={c}
              className="hairline rounded-full px-3 py-1.5 text-body-s text-body"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section title="Contact" id="contact">
        <div className="bg-ui rounded-lg p-8 flex flex-col gap-4">
          <h3 className="text-h3 max-w-[560px]">
            Open to graduate roles in international finance operations,
            financial analysis and trade-finance teams. Available July 2026.
          </h3>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href={`mailto:${identity.email}`} external>
              {identity.email}
            </Button>
            <Button href={identity.social[0].href} variant="ghost" external>
              LinkedIn
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
