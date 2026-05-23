import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageShell from "@/components/PageShell";
import Avatar from "@/components/Avatar";
import Toc from "@/components/Toc";
import ReadingProgress from "@/components/ReadingProgress";
import { getPost, getPostSlugs, getHeadings, slugify, formatDate } from "@/lib/posts";
import { identity } from "@/lib/data";

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

function textOf(children: any): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textOf).join("");
  if (children?.props?.children) return textOf(children.props.children);
  return "";
}

const mdxComponents = {
  h2: (props: any) => (
    <h2
      id={slugify(textOf(props.children))}
      className="text-[26px] leading-tight tracking-[-0.02em] text-heading mt-16 mb-4 scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="text-[18px] text-heading mt-10 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="text-body-m text-body my-5 leading-[1.75]" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-5 my-5 flex flex-col gap-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-5 my-5 flex flex-col gap-2" {...props} />
  ),
  li: (props: any) => (
    <li className="text-body-m text-body leading-[1.7] marker:text-white/30" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-heading underline underline-offset-[3px] decoration-white/30 hover:decoration-white/70 transition-colors"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="text-heading font-medium" {...props} />
  ),
  pre: (props: any) => (
    <pre
      className="bg-ui surface rounded-lg p-4 my-6 overflow-x-auto text-body-s leading-relaxed text-body"
      {...props}
    />
  ),
  code: (props: any) => <code className="font-mono text-[0.9em]" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="my-6 pl-5 border-l-2 border-white/25 text-[19px] leading-[1.6] text-heading italic">
      {props.children}
    </blockquote>
  ),
};

export default function PostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }
  const headings = getHeadings(post.content);

  return (
    <>
      <ReadingProgress />
      <PageShell>
        <article className="w-full max-w-[720px] mx-auto px-6 pb-24">
          <div className="relative flex flex-col gap-8">
            {/* sticky TOC floating in the left gutter on wide screens */}
            <aside className="hidden xl:block absolute top-0 right-full mr-12 h-full w-[180px]">
              <div className="sticky top-24">
                <Toc headings={headings} variant="sidebar" />
              </div>
            </aside>

            {/* header */}
            <div className="flex flex-col gap-6">
              <Link
                href="/blog"
                className="text-body-s text-body hover:text-heading transition-colors w-fit"
              >
                ← All posts
              </Link>
              <span className="w-fit bg-white/[0.05] rounded-full px-2.5 py-0.5 text-body-s text-body">
                {post.category}
              </span>
              <h1 className="text-[40px] leading-[1.08] tracking-[-0.03em] text-heading">
                {post.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-body-s text-body">Written by</span>
                  <Avatar size={24} />
                  <span className="text-body-s text-heading">{identity.name}</span>
                </div>
                <span className="text-body-s text-body">
                  {post.readTime > 0
                    ? `${post.readTime} min read`
                    : formatDate(post.date)}
                </span>
              </div>
            </div>

            {/* hero image */}
            {post.thumbnail && (
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden surface">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  sizes="720px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* inline TOC on smaller screens */}
            <div className="xl:hidden">
              <Toc headings={headings} variant="inline" />
            </div>

            {/* body */}
            <div className="article-prose">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
              <Link
                href="/blog"
                className="text-body-s text-heading hover:text-body transition-colors"
              >
                ← Back to all posts
              </Link>
              <Link
                href="/contact"
                className="text-body-s text-body hover:text-heading transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </article>
      </PageShell>
    </>
  );
}
