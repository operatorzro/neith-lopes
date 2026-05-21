import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Neith Lopes — Finance & AI Operator",
  description:
    "Personal site of Neith Lopes, a finance-trained operator working across markets, AI workflows, decision-support systems and practical execution.",
  metadataBase: new URL("https://neith-lopes.vercel.app"),
  openGraph: {
    title: "Neith Lopes — Finance & AI Operator",
    description:
      "Markets, systems and execution. Finance, AI workflows, macro research and operating projects.",
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
