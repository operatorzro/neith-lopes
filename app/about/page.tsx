import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { identity } from "@/lib/data";

export const metadata: Metadata = {
  title: "About · Neith Lopes",
  description: identity.about,
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="w-full max-w-content px-6 md:px-10 lg:px-16 pb-20 flex flex-col gap-8">
        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden surface">
          <Image
            src="/work/neural-edge.png"
            alt=""
            fill
            sizes="900px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute left-6 bottom-6 flex items-center gap-3">
            <Avatar size={56} />
            <span className="flex flex-col leading-tight">
              <span className="text-body-m text-heading">{identity.name}</span>
              <span className="text-body-s text-body">{identity.role}</span>
            </span>
          </div>
        </div>
        <h1 className="text-h1 text-heading">About</h1>
        <div className="flex flex-col gap-5 max-w-[640px]">
          <p className="text-body-m text-body">{identity.about}</p>
          <p className="text-body-m text-body">
            My path here was not a straight line. I co-founded a blockchain
            logistics startup in Singapore at nineteen, led client delivery at a
            digital agency, served full time in National Service, then moved to
            the UK to study finance. Most of my time now goes into Neural Edge
            and Neural OS.
          </p>
          <p className="text-body-m text-body">
            The thread is the same in all of it. I take something that usually
            lives in someone&rsquo;s head or across ten browser tabs and turn it
            into a system that runs and can be checked.
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
