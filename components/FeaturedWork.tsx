"use client";
import { DotmSquare1 } from "./dotmatrix/loaders/dotm-square-1";
import Ticker from "./Ticker";

export default function FeaturedWork({
  name,
  role,
  period,
  summary,
  tags,
  ticker,
  href,
}: {
  name: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
  ticker?: string[];
  href?: string;
}) {
  const Wrapper: any = href ? "a" : "article";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      className="group relative bg-ui rounded-lg overflow-hidden p-6 flex flex-col gap-5"
    >
      <header className="flex items-start justify-between gap-6 z-10">
        <div className="flex items-center gap-3">
          <DotmSquare1
            size={28}
            dotSize={3}
            speed={1.1}
            pattern="full"
            color="rgb(252,252,250)"
            ariaLabel=""
          />
          <div className="flex flex-col">
            <h3 className="text-body-m text-heading">{name}</h3>
            <span className="text-body-s text-body">{role}</span>
          </div>
        </div>
        <span className="text-body-s text-body whitespace-nowrap">{period}</span>
      </header>
      <p className="text-body-s text-body max-w-[560px] z-10">{summary}</p>
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 z-10">
          {tags.map((t) => (
            <li
              key={t}
              className="hairline rounded-full px-2.5 py-1 text-body-s text-body"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
      {ticker && (
        <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity">
          <Ticker
            items={ticker}
            direction="left"
            rotate={12}
            className="top-[-20%] right-0 w-full h-[60%]"
          />
          <Ticker
            items={ticker}
            direction="right"
            rotate={12}
            className="bottom-[-20%] right-0 w-full h-[60%]"
            speed={28}
          />
        </div>
      )}
    </Wrapper>
  );
}
