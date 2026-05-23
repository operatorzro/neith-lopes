import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

const gradients = [
  "radial-gradient(130% 130% at 20% 20%, #4f46e5 0%, #1e1b4b 45%, #0a0a0a 80%)",
  "radial-gradient(130% 130% at 80% 30%, #0ea5e9 0%, #082f49 45%, #0a0a0a 80%)",
  "radial-gradient(130% 130% at 50% 80%, #7c3aed 0%, #2e1065 45%, #0a0a0a 80%)",
  "radial-gradient(130% 130% at 30% 70%, #db2777 0%, #500724 45%, #0a0a0a 80%)",
];

export default function PostCard({
  post,
  index = 0,
}: {
  post: PostMeta;
  index?: number;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
      <div
        className="relative aspect-[16/9] w-full rounded-lg overflow-hidden hairline"
        style={{ background: gradients[index % gradients.length] }}
      >
        <span className="absolute left-3 top-3 rounded-full bg-black/30 backdrop-blur-sm px-2.5 py-0.5 text-body-s text-heading">
          {post.category}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] leading-snug tracking-[-0.02em] text-heading group-hover:opacity-80 transition-opacity">
          {post.title}
        </h3>
        <span className="text-body-s text-body">
          {formatDate(post.date)}
          {post.readTime > 0 && ` · ${post.readTime} min read`}
        </span>
      </div>
    </Link>
  );
}
