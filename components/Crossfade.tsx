"use client";
import { useEffect, useState } from "react";

// Vertical "odometer" rotator: all words stacked in a fixed-size clipped
// window that slides vertically. Width is locked to the widest word, so the
// surrounding layout never shifts.
export default function Crossfade({
  words,
  interval = 2400,
}: {
  words: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const widest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className="relative inline-grid overflow-hidden align-bottom h-[1.5em] leading-[1.5em]">
      {/* invisible sizer locks the width to the widest word */}
      <span
        aria-hidden
        className="col-start-1 row-start-1 invisible whitespace-nowrap"
      >
        {widest}
      </span>
      {/* sliding stack */}
      <span
        className="col-start-1 row-start-1 block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateY(-${i * 1.5}em)` }}
      >
        {words.map((w) => (
          <span key={w} className="block h-[1.5em] whitespace-nowrap">
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
