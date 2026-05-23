import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageShell from "@/components/PageShell";
import { getPost, getPostSlugs, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  try {
    const post = getPost(params.slug);
    return { title: `${post.title} — Neith Lopes`, description: post.excerpt };
  } catch {
    return { title: "Post — Neith Lopes" };
  }
}

const mdxComponents = {
  h2: (props: any) => (
    <h2 className="text-h3 text-heading mt-10 mb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-body-m text-heading mt-8 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="text-body-m text-body my-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-5 my-4 flex flex-col gap-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-5 my-4 flex flex-col gap-2" {...props} />
  ),
  li: (props: any) => (
    <li className="text-body-m text-body marker:text-white/30" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-heading underline underline-offset-4 decoration-white/30 hover:decoration-white/60"
      {...props}
    />
  ),
};

export default function PostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <PageShell>
      <article className="w-full max-w-[680px] px-16 pb-20 flex flex-col gap-6">
        <Link
          href="/blog"
          className="text-body-s text-body hover:text-heading transition-colors w-fit"
        >
          ← All posts
        </Link>
        <header className="flex flex-col gap-3 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3 text-body-s text-body">
            <span className="hairline rounded-full px-2.5 py-0.5">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            {post.readTime > 0 && <span>· {post.readTime} min read</span>}
          </div>
          <h1 className="text-h1 text-heading">{post.title}</h1>
        </header>
        <div>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </PageShell>
  );
}
