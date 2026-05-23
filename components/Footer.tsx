import Link from "next/link";
import LocalTime from "./LocalTime";
import { identity } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full max-w-footer px-6 md:px-10 lg:px-16 pt-12 pb-16 flex flex-col items-center gap-5 text-center">
      <h2 className="text-[24px] tracking-[-0.03em] text-heading">
        {identity.name}
      </h2>

      <div className="flex flex-col gap-0.5">
        <p className="text-body-m text-heading">
          <LocalTime />
        </p>
        <p className="text-[12px] text-body">
          Local time in United Kingdom
        </p>
      </div>

      <div className="flex items-center gap-2 pt-1">
        <a
          href={identity.social[0].href}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="h-9 w-9 rounded-xl bg-ui surface-sm flex items-center justify-center text-body hover:text-heading hover:bg-white/[0.06] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>
        <a
          href={`mailto:${identity.email}`}
          aria-label="Email"
          className="h-9 w-9 rounded-xl bg-ui surface-sm flex items-center justify-center text-body hover:text-heading hover:bg-white/[0.06] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
        <Link
          href="/contact"
          className="px-3.5 py-2 rounded-[10px] bg-ui surface-sm text-heading text-body-s hover:bg-white/[0.08] transition-colors"
        >
          Get In Touch
        </Link>
      </div>

      <p className="text-body-s text-body pt-1">
        Thanks for visiting, see you again soon.
      </p>

      <p className="text-[12px] text-body pt-4">
        © {new Date().getFullYear()} {identity.name} · Built with Next.js
      </p>
    </footer>
  );
}
