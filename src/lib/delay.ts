import type { CSSProperties } from "react";

/** Stagger index for reveal-on-scroll transitions (see globals.css). */
export function delay(step: number): CSSProperties {
  return { "--d": step } as CSSProperties;
}
