import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-3 bg-ui rounded-lg p-6 transition-colors hover:bg-white/[0.06]"
    >
      <div className="flex items-center gap-3 text-body-s text-body">
        <span className="hairline rounded-full px-2.5 py-0.5">
          {post.category}
        </span>
        <span>{formatDate(post.date)}</span>
        {post.readTime > 0 && <span>· {post.readTime} min</span>}
      </div>
      <h3 className="text-body-m text-heading group-hover:underline underline-offset-4 decoration-white/30">
        {post.title}
      </h3>
      <p className="text-body-s text-body">{post.excerpt}</p>
    </Link>
  );
}
