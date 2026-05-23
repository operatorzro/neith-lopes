"use client";
import { useEffect, useState } from "react";
import type { Heading } from "@/lib/posts";

export default function Toc({
  headings,
  variant = "inline",
}: {
  headings: Heading[];
  variant?: "inline" | "sidebar";
}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 160;
      let current = "";
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (el && el.offsetTop <= y) current = h.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (variant === "sidebar") {
    return (
      <nav className="flex flex-col gap-1">
        <p className="text-[11px] uppercase tracking-[0.18em] text-body mb-3">
          On this page
        </p>
        {headings.map((h) => (
          <button
            key={h.id}
            type="button"
            onClick={() => go(h.id)}
            className="group flex items-start gap-2.5 text-left text-body-s leading-snug py-1.5"
          >
            <span
              className={`mt-[7px] h-1.5 w-1.5 rounded-full shrink-0 transition-all duration-200 ${
                active === h.id
                  ? "bg-heading scale-100"
                  : "bg-white/20 scale-75 group-hover:bg-white/50"
              }`}
            />
            <span
              className={`transition-colors ${
                active === h.id
                  ? "text-heading"
                  : "text-body group-hover:text-heading"
              }`}
            >
              {h.text}
            </span>
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className="bg-ui hairline rounded-xl overflow-hidden">
      <p className="text-body-m text-heading px-5 py-4 border-b border-white/10">
        In this post
      </p>
      <ul className="flex flex-col">
        {headings.map((h) => (
          <li key={h.id} className="border-b border-white/10 last:border-0">
            <button
              type="button"
              onClick={() => go(h.id)}
              className={`block w-full text-left px-5 py-3.5 text-body-s transition-colors hover:text-heading ${
                active === h.id ? "text-heading" : "text-body"
              }`}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
