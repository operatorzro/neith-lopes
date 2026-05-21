import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Neith Lopes — Finance & AI Operator",
  description: "Markets, systems and execution.",
  metadataBase: new URL("https://neithlopes.com"),
  openGraph: {
    title: "Neith Lopes — Finance & AI Operator",
    description: "Markets, systems and execution.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-heading">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
