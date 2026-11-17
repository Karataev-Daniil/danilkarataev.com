import { stack } from "@/content/data";
import type { Dictionary } from "@/i18n";
import { delay } from "@/lib/delay";

import styles from "./Stack.module.css";

export function Stack({ t }: { t: Dictionary }) {
  return (
    <dl className={styles.list}>
      {stack.map((group, i) => {
        const items = group.id === "practices" ? t.stack.practices : group.items;
        return (
          <div key={group.id} className={styles.row} data-reveal style={delay(i % 3)}>
            <dt className={`mono ${styles.label}`}>
              {t.stack.groups[group.id]}
            </dt>
            <dd className={styles.items}>
              {items.map((item) => (
                <span key={item} className={styles.item}>
                  {item}
                </span>
              ))}
            </dd>
          </div>
        );
      })}
      <div className={styles.row} data-reveal>
        <dt className={`mono ${styles.label}`}>
          {t.stack.education.label}
        </dt>
        <dd className={styles.items}>
          <span className={styles.plain}>{t.stack.education.text}</span>
        </dd>
      </div>
    </dl>
  );
}
