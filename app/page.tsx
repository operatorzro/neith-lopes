import Link from "next/link";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Item from "@/components/Item";
import Toolkit from "@/components/Toolkit";
import PostCard from "@/components/PostCard";
import { Stagger, StaggerItem, InView } from "@/components/Motion";
import { identity, work, workingOn } from "@/lib/data";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const featured = work.filter((w) => w.featured);
  const posts = getAllPosts().slice(0, 4);

  return (
    <main className="w-full max-w-page mx-auto flex flex-col items-center">
      {/* Top: Nav + Hero (staggered entrance on load) */}
      <Stagger className="w-full max-w-content px-16 pt-12 pb-8 flex flex-col">
        <StaggerItem className="mb-12">
          <Nav name={identity.name} />
        </StaggerItem>
        <StaggerItem>
          <h1 className="text-h1 text-heading max-w-[680px] text-balance">
            Markets, systems and{" "}
            <em className="font-serif font-normal italic tracking-normal">
              execution
            </em>
            .
          </h1>
        </StaggerItem>
        <StaggerItem className="mt-3">
          <p className="text-body-m text-body max-w-[495px]">{identity.bio}</p>
        </StaggerItem>
        <StaggerItem className="mt-5">
          <div className="flex items-center gap-3">
            <Button href="/contact">Get in touch</Button>
          </div>
        </StaggerItem>
      </Stagger>

      {/* Work & Projects */}
      <Section title="Work & Projects" id="work">
        <InView className="flex flex-col gap-4">
          {featured.map((w) => (
            <FeaturedWork
              key={w.name}
              name={w.name}
              role={w.role}
              summary={w.summary}
              logo={w.logo}
              logoFit={w.logoFit}
              ticker={w.ticker}
              image={w.image}
            />
          ))}
        </InView>
      </Section>

      {/* Latest Posts */}
      <Section title="Latest Posts" id="posts">
        <InView className="grid grid-cols-2 gap-x-8 gap-y-10">
          {posts.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </InView>
        <Link
          href="/blog"
          className="text-body-s text-body hover:text-heading transition-colors w-fit"
        >
          All posts →
        </Link>
      </Section>

      {/* Toolkit */}
      <Section title="Toolkit" id="toolkit">
        <InView>
          <Toolkit />
        </InView>
      </Section>

      {/* Working On */}
      <Section title="Working On" id="working-on">
        <InView className="grid grid-cols-3 gap-x-6 gap-y-3">
          {workingOn.map((w) => (
            <Item key={w.label} label={w.label} checked={w.done} />
          ))}
        </InView>
      </Section>

      {/* Contact CTA */}
      <Section title="Contact" id="contact">
        <InView className="bg-ui surface rounded-lg p-8 flex flex-col gap-4">
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
        </InView>
      </Section>

      <Footer />
    </main>
  );
}
