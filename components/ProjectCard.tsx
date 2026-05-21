import Card from "./Card";
import Ticker from "./Ticker";

export default function ProjectCard({
  name,
  category,
  description,
  href,
  accent,
  ticker,
}: {
  name: string;
  category: string;
  description: string;
  href?: string;
  accent?: string;
  ticker?: string[];
}) {
  return (
    <Card href={href} external className="flex gap-6 items-center">
      <div className="flex flex-col gap-6 flex-1 min-w-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span
              className="h-7 w-7 rounded-[8px] flex items-center justify-center"
              style={{ background: accent ?? "rgb(252,252,250)" }}
            >
              <span
                className="text-[12px] leading-none"
                style={{
                  color: accent === "rgb(99, 26, 255)" ? "white" : "rgb(10,10,10)",
                }}
              >
                {name[0]}
              </span>
            </span>
            <span className="text-body-m">{name}</span>
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-body-s text-body">
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
        <div className="flex flex-col gap-1 max-w-[310px]">
          <span className="text-body-m">{category}</span>
          <p className="text-body-s text-body">{description}</p>
        </div>
      </div>
      {ticker && (
        <div className="relative w-1/2 self-stretch -mr-6 -my-6">
          <Ticker
            items={ticker}
            direction="left"
            rotate={12}
            className="top-[-30%] right-0 w-full h-[60%]"
          />
          <Ticker
            items={ticker}
            direction="right"
            rotate={12}
            className="bottom-[-30%] right-0 w-full h-[60%]"
            speed={28}
          />
        </div>
      )}
    </Card>
  );
}
