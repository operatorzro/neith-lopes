import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { identity } from "@/lib/data";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="w-full max-w-page mx-auto flex flex-col items-center">
      <div className="w-full max-w-content px-6 md:px-10 lg:px-16 pt-16 pb-12">
        <Nav name={identity.name} />
      </div>
      {children}
      <Footer />
    </main>
  );
}
