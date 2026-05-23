import Link from "next/link";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import FeaturedWork from "@/components/FeaturedWork";
import ExperienceRow from "@/components/ExperienceRow";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Item from "@/components/Item";
import StackCard from "@/components/StackCard";
import PostCard from "@/components/PostCard";
import { identity, work, stack, workingOn } from "@/lib/data";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const featured = work.filter((w) => w.featured);
  const rest = work.filter((w) => !w.featured);
  const posts = getAllPosts().slice(0, 4);

  return (
    <main className="w-full max-w-page mx-auto flex flex-col items-center">
      {/* Top: Nav + Hero */}
      <div className="w-full max-w-content px-16 pt-12 pb-8 flex flex-col gap-12">
        <Nav name={identity.name} />
        <div className="flex flex-col gap-3">
          <h1 className="text-h1 text-heading max-w-[680px]">
            Markets, systems and{" "}
            <em className="font-serif font-normal italic tracking-normal">
              execution
            </em>
            .
          </h1>
          <p className="text-body-m text-body max-w-[495px]">{identity.bio}</p>
          <div className="flex items-center gap-3 pt-2">
            <Button href="#work">See work</Button>
            <Button href="/contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </div>

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

      {/* Latest Posts */}
      <Section title="Latest Posts" id="posts">
        <div className="grid grid-cols-2 gap-4">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
        <Link
          href="/blog"
          className="text-body-s text-body hover:text-heading transition-colors w-fit"
        >
          All posts →
        </Link>
      </Section>

      {/* Stack */}
      <Section title="Stack" id="stack">
        <div className="grid grid-cols-3 gap-4">
          {stack.map((s) => (
            <StackCard key={s.name} name={s.name} category={s.category} />
          ))}
        </div>
      </Section>

      {/* Working On */}
      <Section title="Working On" id="working-on">
        <div className="grid grid-cols-3 gap-x-6 gap-y-3">
          {workingOn.map((w) => (
            <Item key={w.label} label={w.label} checked={w.done} />
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
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
            <Button href="/contact" variant="ghost">
              Contact page
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
