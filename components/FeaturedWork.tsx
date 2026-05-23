"use client";
import Image from "next/image";
import { DotmSquare1 } from "./dotmatrix/loaders/dotm-square-1";
import Ticker from "./Ticker";

export default function FeaturedWork({
  name,
  role,
  summary,
  ticker,
  image,
  gradient,
  logo,
  logoFit = "cover",
  href,
}: {
  name: string;
  role: string;
  summary: string;
  ticker?: string[];
  image?: string;
  gradient?: string;
  logo?: string;
  logoFit?: "contain" | "cover";
  href?: string;
}) {
  const Wrapper: any = href ? "a" : "article";
  const wrapperProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative bg-ui rounded-lg overflow-hidden p-6 flex gap-6 min-h-[168px]"
    >
      {/* Left: logo lockup (top) + info (bottom) */}
      <div className="relative z-10 flex flex-1 min-w-0 flex-col justify-between gap-6">
        <div className="flex items-center gap-3">
          {logo ? (
            <span className="h-7 w-7 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
              <Image
                src={logo}
                alt=""
                width={28}
                height={28}
                className={`w-full h-full ${logoFit === "contain" ? "object-contain" : "object-cover"}`}
              />
            </span>
          ) : (
            <span className="h-7 w-7 rounded-lg bg-background hairline flex items-center justify-center shrink-0">
              <DotmSquare1
                size={16}
                dotSize={2}
                speed={1.1}
                pattern="full"
                color="rgb(252,252,250)"
                ariaLabel=""
              />
            </span>
          )}
          <span className="text-body-m text-heading">{name}</span>
          <span className="flex items-center gap-1 text-body-s text-body opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Explore
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col gap-1 max-w-[320px]">
          <span className="text-body-m text-heading">{role}</span>
          <p className="text-body-s text-body">{summary}</p>
        </div>
      </div>

      {/* Right: visual that bleeds off the edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        {ticker ? (
          <>
            <Ticker
              items={ticker}
              direction="left"
              rotate={12}
              className="top-[-22%] right-0 w-full h-[60%]"
            />
            <Ticker
              items={ticker}
              direction="right"
              rotate={12}
              speed={28}
              className="bottom-[-22%] right-0 w-full h-[60%]"
            />
          </>
        ) : image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="440px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                gradient ??
                "radial-gradient(120% 120% at 80% 20%, rgba(99,102,241,0.45), rgba(56,189,248,0.2) 40%, transparent 70%)",
            }}
          />
        )}
        {/* left-edge fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ui via-ui/60 to-transparent" />
      </div>
    </Wrapper>
  );
}
