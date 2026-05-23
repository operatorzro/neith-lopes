"use client";
import { DotmSquare1 } from "./dotmatrix/loaders/dotm-square-1";

export default function Avatar({ size = 64 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-ui hairline overflow-hidden shrink-0"
      style={{ width: size, height: size }}
    >
      <DotmSquare1
        size={Math.round(size * 0.55)}
        dotSize={3}
        speed={1.1}
        pattern="full"
        color="rgb(252,252,250)"
        ariaLabel="Neith Lopes"
      />
    </span>
  );
}
