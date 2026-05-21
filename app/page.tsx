import Nav from "@/components/Nav";
import Section from "@/components/Section";
import FeaturedWork from "@/components/FeaturedWork";
import ExperienceRow from "@/components/ExperienceRow";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import {
  identity,
  work,
  education,
  skills,
  credentials,
} from "@/lib/data";

export default function Home() {
  const featured = work.filter((w) => w.featured);
  const rest = work.filter((w) => !w.featured);

  return (
    <main className="w-full max-w-page mx-auto flex flex-col items-center">
      {/* Top: Nav + Hero */}
      <div className="w-full max-w-content px-16 pt-16 pb-8 flex flex-col gap-6">
        <Nav name={identity.name} />
        <div className="flex flex-col gap-4 pt-2">
          <Badge>{identity.location}</Badge>
          <div className="flex flex-col gap-1">
            <h1 className="text-h1 text-heading max-w-[680px]">
              {identity.name}
            </h1>
            <p className="text-h3 text-heading">{identity.role}</p>
            <p className="text-h3 text-body">{identity.tagline}</p>
          </div>
          <p className="text-body-m text-body max-w-[560px] pt-1">
            {identity.bio}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button href="#work">See work</Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      {/* About */}
      <Section title="About" id="about">
        <p className="text-body-m text-body max-w-[640px]">{identity.about}</p>
      </Section>

      {/* Work & Projects */}
      <Section title="Work & Projects" id="work">
        <div className="flex flex-col gap-4">
          {featured.map((w) => (
            <FeaturedWork
              key={w.name}
              name={w.name}
              role={w.role}
              period={w.period}
              summary={w.summary}
              tags={w.tags}
            />
          ))}
          <div className="flex flex-col pt-4">
            {rest.map((w) => (
              <ExperienceRow
                key={w.name}
                role={w.role}
                org={w.name}
                period={w.period}
                summary={w.summary}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" id="skills">
        <div className="grid grid-cols-3 gap-4">
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
              key={e.school}
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
        <ul className="flex flex-col">
          {credentials.map((c) => (
            <li
              key={c}
              className="py-3 border-b border-white/10 last:border-0 text-body-m text-heading"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section title="Contact" id="contact">
        <div className="bg-ui rounded-lg p-8 flex flex-col gap-4">
          <h3 className="text-h3 max-w-[600px]">
            I&rsquo;m open to conversations around finance, markets, AI
            workflows, product ideas and graduate opportunities from July 2026.
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
