import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog · Neith Lopes",
  description:
    "Writing on markets, AI workflows, research systems and building from zero to one.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <PageShell>
      <div className="w-full max-w-content px-6 md:px-10 lg:px-16 pb-20 flex flex-col gap-10">
        <header className="flex flex-col gap-3">
          <h1 className="text-h1 text-heading">
            Welcome to the{" "}
            <em className="font-serif font-normal italic tracking-normal">blog</em>.
          </h1>
          <p className="text-body-m text-body max-w-[603px]">
            Notes on building software with AI agents, running market research,
            and what I learn shipping Neural Edge and Neural OS.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {posts.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
