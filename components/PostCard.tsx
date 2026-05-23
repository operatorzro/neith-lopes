import Link from "next/link";
import Image from "next/image";
import { type PostMeta } from "@/lib/posts";

const gradients = [
  "radial-gradient(130% 130% at 20% 20%, #2a2f24 0%, #14160f 45%, #0a0a0a 80%)",
  "radial-gradient(130% 130% at 80% 30%, #1f2a2a 0%, #0f1414 45%, #0a0a0a 80%)",
  "radial-gradient(130% 130% at 50% 80%, #262824 0%, #131410 45%, #0a0a0a 80%)",
];

export default function PostCard({
  post,
  index = 0,
}: {
  post: PostMeta;
  index?: number;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
      <div
        className="relative aspect-[16/9] w-full rounded-lg overflow-hidden hairline"
        style={
          post.thumbnail ? undefined : { background: gradients[index % gradients.length] }
        }
      >
        {post.thumbnail && (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] leading-snug tracking-[-0.02em] text-heading group-hover:opacity-80 transition-opacity">
          {post.title}
        </h3>
        <span className="text-body-s text-body">{post.category}</span>
      </div>
    </Link>
  );
}
