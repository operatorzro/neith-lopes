"use client";
import { useEffect, useState } from "react";
import type { Heading } from "@/lib/posts";

export default function Toc({ headings }: { headings: Heading[] }) {
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

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-ui hairline rounded-xl overflow-hidden my-2">
      <p className="text-body-m text-heading px-5 py-4 border-b border-white/10">
        In this post:
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
