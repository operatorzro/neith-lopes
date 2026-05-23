import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { identity } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Neith Lopes",
  description: identity.about,
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="w-full max-w-content px-16 pb-20 flex flex-col gap-8">
        <Avatar size={72} />
        <h1 className="text-h1 text-heading">About</h1>
        <div className="flex flex-col gap-5 max-w-[640px]">
          <p className="text-body-m text-body">{identity.about}</p>
          <p className="text-body-m text-body">
            I work across financial markets, AI-supported workflows and
            practical operating systems. My background is non-linear: I
            co-founded a logistics venture in Singapore, led delivery at a
            digital agency, completed National Service, and now study Finance
            &amp; Investments in the UK while building Neural Edge.
          </p>
          <p className="text-body-m text-body">
            What ties it together is a bias toward systems: clearer research
            processes, tighter feedback loops, and tools that make better
            decisions easier to repeat.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <Button href="/resume">View resume</Button>
          <Button href="/contact" variant="ghost">
            Get in touch
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
