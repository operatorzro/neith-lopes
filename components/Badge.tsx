"use client";
import { DotmSquare1 } from "./dotmatrix/loaders/dotm-square-1";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full hairline text-body-s text-body w-fit">
      <DotmSquare1
        size={14}
        dotSize={1.5}
        speed={1.1}
        pattern="full"
        color="rgb(252,252,250)"
        ariaLabel=""
      />
      {children}
    </span>
  );
}
