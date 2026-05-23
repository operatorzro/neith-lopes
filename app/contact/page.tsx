import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Button from "@/components/Button";
import { identity } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact · Neith Lopes",
  description:
    "Get in touch with Neith Lopes about finance, markets, AI workflows and graduate opportunities.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="w-full max-w-content px-6 md:px-10 lg:px-16 pb-20 flex flex-col gap-8">
        <h1 className="text-h1 text-heading max-w-[600px]">
          Let&rsquo;s talk.
        </h1>
        <p className="text-body-m text-body max-w-[560px]">
          I graduate in July 2026 and I&rsquo;m looking for a role where I can
          build. If you&rsquo;re hiring, building something, or want to compare
          notes on markets or AI, email is the fastest way to reach me.
        </p>
        <div className="flex flex-col gap-3 max-w-[420px]">
          <a
            href={`mailto:${identity.email}`}
            className="flex items-center justify-between bg-ui surface rounded-lg p-5 hover:bg-white/[0.08] transition-colors"
          >
            <span className="text-body-s text-body">Email</span>
            <span className="text-body-m text-heading">{identity.email}</span>
          </a>
          <a
            href={identity.social[0].href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between bg-ui surface rounded-lg p-5 hover:bg-white/[0.08] transition-colors"
          >
            <span className="text-body-s text-body">LinkedIn</span>
            <span className="text-body-m text-heading">/neith-lopes ↗</span>
          </a>
        </div>
        <div className="pt-2">
          <Button href={`mailto:${identity.email}`} external>
            Send an email
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
