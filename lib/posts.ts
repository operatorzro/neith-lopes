import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: number;
  thumbnail?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): Post {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    category: data.category ?? "",
    excerpt: data.excerpt ?? "",
    readTime: data.readTime ?? 0,
    thumbnail: data.thumbnail ?? undefined,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { content, ...meta } = getPost(slug);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface Heading {
  id: string;
  text: string;
}

export function getHeadings(content: string): Heading[] {
  return content
    .split("\n")
    .filter((line) => /^##\s+/.test(line))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      return { id: slugify(text), text };
    });
}
