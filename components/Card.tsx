import Link from "next/link";
import type { ReactNode } from "react";

export default function Card({
  href,
  external = false,
  children,
  className = "",
}: {
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const cls = `group surface relative bg-ui rounded-lg overflow-hidden p-6 ${className}`;
  if (!href) return <div className={cls}>{children}</div>;
  if (external)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
