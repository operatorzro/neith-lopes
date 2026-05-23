import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageShell from "@/components/PageShell";
import Avatar from "@/components/Avatar";
import Toc from "@/components/Toc";
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
      className="text-h3 text-heading mt-12 mb-3 scroll-mt-24"
      {...props}
    />
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
  pre: (props: any) => (
    <pre
      className="bg-ui hairline rounded-lg p-4 my-5 overflow-x-auto text-body-s leading-relaxed text-body"
      {...props}
    />
  ),
  code: (props: any) => (
    <code className="font-mono text-[0.9em]" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-white/20 pl-4 my-5 text-body-m text-heading italic"
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
  const headings = getHeadings(post.content);

  return (
    <PageShell>
      <article className="w-full max-w-content px-16 pb-24 flex flex-col gap-6">
        {/* category */}
        <span className="w-fit hairline rounded-full px-2.5 py-0.5 text-body-s text-body">
          {post.category}
        </span>

        {/* title */}
        <h1 className="text-h1 text-heading max-w-[680px]">{post.title}</h1>

        {/* meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-body-s text-body">Written by</span>
            <Avatar size={24} />
            <span className="text-body-s text-heading">{identity.name}</span>
          </div>
          <span className="text-body-s text-body">
            {post.readTime > 0 ? `${post.readTime} min read` : formatDate(post.date)}
          </span>
        </div>

        {/* hero image */}
        {post.thumbnail && (
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden hairline mt-2">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              sizes="772px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* table of contents */}
        <Toc headings={headings} />

        {/* content */}
        <div>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </PageShell>
  );
}
