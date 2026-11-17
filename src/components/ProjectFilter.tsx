"use client";

import { useState, type ReactNode } from "react";

import type { ProjectCategory } from "@/content/data";

import styles from "./Projects.module.css";

type Filter = "all" | ProjectCategory;

interface Props {
  label: string;
  /** Screen reader text after a change */
  options: { id: Filter; label: string; count: number; status: string }[];
  children: ReactNode;
}

/** Filtering is pure CSS (data-filter vs data-cat); without JS everything stays visible. */
export function ProjectFilter({ label, options, children }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const [touched, setTouched] = useState(false);
  const current = options.find((o) => o.id === filter);

  return (
    <div className={styles.filtered} data-filter={filter}>
      <div className={styles.bar} role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={styles.filterBtn}
            aria-pressed={filter === o.id}
            onClick={() => {
              setFilter(o.id);
              setTouched(true);
            }}
          >
            {o.label}
            <span className={styles.filterCount} aria-hidden="true">
              {o.count}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {touched ? current?.status : ""}
      </p>
      {children}
    </div>
  );
}
