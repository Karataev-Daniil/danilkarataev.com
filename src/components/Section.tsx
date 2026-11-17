import type { ReactNode } from "react";

import styles from "./Section.module.css";

interface Props {
  id: string;
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, note, children, className }: Props) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${className ?? ""}`}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {note ? <p className={styles.note}>{note}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
