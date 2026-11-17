import type { Dictionary } from "@/i18n";
import { delay } from "@/lib/delay";
import { person } from "@/lib/site";

import styles from "./Contact.module.css";
import { ArrowDown, ArrowUpRight } from "./Icons";
import ui from "./ui.module.css";

export function Contact({ t }: { t: Dictionary }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.main} data-reveal>
        <p className={styles.heading}>{t.contact.heading}</p>
        <p className={styles.text}>{t.contact.text}</p>
        <a className={styles.telegram} href={person.telegram.url} target="_blank" rel="noopener noreferrer">
          t.me/{person.telegram.user}
          <ArrowUpRight className={styles.arrow} />
        </a>
      </div>

      <div className={styles.side} data-reveal style={delay(1)}>
        <div className={styles.block}>
          <h3 className={`mono ${styles.label}`}>{t.contact.elsewhere}</h3>
          <ul className={`mono ${styles.links}`}>
            <li>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </li>
            <li>
              <a href={person.github.url} target="_blank" rel="noopener noreferrer me">
                {person.github.label}
                {person.github.user}
              </a>
            </li>
            <li>
              <a href={person.linkedin.url} target="_blank" rel="noopener noreferrer me">
                {person.linkedin.label}
                {person.linkedin.user}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h3 className={`mono ${styles.label}`}>{t.contact.downloads}</h3>
          <div className={styles.cvs}>
            <a className={ui.btn} href={person.cv.frontend} download>
              {t.hero.cvFrontend}
              <ArrowDown className={ui.btnIcon} />
            </a>
            <a className={ui.btn} href={person.cv.wordpress} download>
              {t.hero.cvWordpress}
              <ArrowDown className={ui.btnIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
