"use client";
import Link from "next/link";
import { useState } from "react";
import Avatar from "./Avatar";
import Crossfade from "./Crossfade";
import { identity } from "@/lib/data";

const roles = ["Finance & AI Operator", "Macro Researcher", "Builder", "Student"];

const pages = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/contact" },
];

export default function Nav({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between">
      {/* Left: avatar + greeting */}
      <Link href="/" className="flex items-center gap-2.5">
        <Avatar size={40} />
        <span className="flex flex-col leading-tight">
          <span className="text-body-m text-heading">Hey, I&rsquo;m {name}.</span>
          <span className="text-body-s text-body">
            <Crossfade words={roles} />
          </span>
        </span>
      </Link>

      {/* Right: pages dropdown + social + CTA */}
      <div className="flex items-center gap-2">
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] text-body-s transition-colors ${
              open ? "bg-ui text-heading" : "text-body hover:text-heading"
            }`}
          >
            Pages
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              aria-hidden
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`absolute right-0 top-full pt-2 z-50 transition-all duration-200 ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            <ul className="min-w-[200px] bg-ui hairline rounded-xl p-2 flex flex-col shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)]">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="block px-3 py-2 rounded-lg text-body-s text-heading hover:bg-white/[0.06] transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={identity.social[0].href}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="h-9 w-9 rounded-xl hairline flex items-center justify-center text-body hover:text-heading hover:bg-ui transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>

        <Link
          href="/contact"
          className="px-4 py-2 rounded-[10px] hairline bg-ui text-heading text-body-s hover:bg-white/[0.06] transition-colors"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
}
