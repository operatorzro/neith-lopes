import type { ReactNode } from "react";

export default function Section({
  title,
  children,
  id,
}: {
  title?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="w-full max-w-content px-16 pb-8 flex flex-col gap-6"
    >
      {title && <h2 className="text-h3 text-heading w-fit">{title}</h2>}
      {children}
    </section>
  );
}
