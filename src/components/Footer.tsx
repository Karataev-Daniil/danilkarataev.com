import type { Dictionary } from "@/i18n";
import { localName, person, type Locale } from "@/lib/site";

import styles from "./Footer.module.css";

export function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>{localName[locale].name}</p>
        <p className={styles.meta}>
          <span>{t.footer.built}</span> <span>{t.footer.data}</span>
        </p>
        <p className={styles.links}>
          <a href={person.telegram.url} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href={person.github.url} target="_blank" rel="noopener noreferrer me">
            GitHub
          </a>
          <a href={person.linkedin.url} target="_blank" rel="noopener noreferrer me">
            LinkedIn
          </a>
          <a href="#top">↑ {t.footer.top}</a>
        </p>
      </div>
    </footer>
  );
}
