"use client";
import { useMemo } from "react";

export default function Ticker({
  items,
  direction = "left",
  speed = 30,
  rotate = 12,
  className = "",
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  rotate?: number;
  className?: string;
}) {
  const doubled = useMemo(() => [...items, ...items], [items]);
  const anim = direction === "left" ? "marquee-left" : "marquee-right";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className="flex gap-2 whitespace-nowrap"
        style={{ animation: `${anim} ${speed}s linear infinite` }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-md bg-ui hairline text-body-s text-body"
          >
            {t}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
