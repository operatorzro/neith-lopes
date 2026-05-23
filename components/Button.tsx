import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-body-s transition-colors";
  const styles =
    variant === "primary"
      ? "bg-heading text-background hover:bg-white"
      : "surface-sm bg-ui text-heading hover:bg-white/[0.08]";
  const Comp: any = external ? "a" : Link;
  return (
    <Comp
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M3 9L9 3M9 3H4M9 3V8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Comp>
  );
}
