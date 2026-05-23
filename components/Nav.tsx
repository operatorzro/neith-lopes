"use client";
import Link from "next/link";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav({ name }: { name: string }) {
  return (
    <nav className="w-full flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <span className="h-7 w-7 rounded-[9px] bg-heading flex items-center justify-center">
          <span className="text-background text-[14px] leading-none">N</span>
        </span>
        <span className="text-body-m">{name}</span>
      </Link>
      <ul className="flex items-center gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-body-s text-body hover:text-heading transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
