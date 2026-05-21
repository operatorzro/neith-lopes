"use client";
import { DotmSquare1 } from "./dotmatrix/loaders/dotm-square-1";

export default function HeroMatrix() {
  return (
    <DotmSquare1
      size={140}
      dotSize={14}
      speed={1.1}
      pattern="full"
      color="rgb(252,252,250)"
      ariaLabel="Identity matrix"
    />
  );
}
