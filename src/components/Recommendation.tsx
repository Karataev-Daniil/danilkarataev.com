import type { Dictionary } from "@/i18n";
import { delay } from "@/lib/delay";

import styles from "./Recommendation.module.css";

export function Recommendation({ t }: { t: Dictionary }) {
  return (
    <div className={styles.list}>
      {t.recommendations.map((r, i) => (
        <figure key={r.name} className={styles.figure} data-reveal style={delay(i)}>
          <blockquote className={styles.quote}>
            {r.quote.map((q) => (
              <p key={q}>{q}</p>
            ))}
          </blockquote>
          <figcaption className={styles.caption}>
            <span className={styles.name}>{r.name}</span>
            <span className={`mono ${styles.title}`}>{r.title}</span>
            {r.note ? <span className={`mono ${styles.note}`}>{r.note}</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
