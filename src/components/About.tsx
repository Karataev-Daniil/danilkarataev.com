import Image from "next/image";

import { aboutPhoto } from "@/content/data";
import type { Dictionary } from "@/i18n";

import styles from "./About.module.css";

export function About({ t }: { t: Dictionary }) {
  const a = t.about;
  return (
    <div className={styles.grid}>
      <div className={styles.photoWrap} data-reveal>
        {aboutPhoto ? (
          <Image
            src={aboutPhoto}
            alt={a.photoAlt}
            placeholder="blur"
            sizes="(max-width: 760px) 70vw, 340px"
            className={styles.photo}
          />
        ) : (
          <span className={styles.monogram} aria-hidden="true">
            DK
          </span>
        )}
      </div>

      <div className={styles.text} data-reveal>
        {a.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className={styles.outside}>
          <span className={`mono ${styles.outsideLabel}`}>{a.outsideLabel}</span>
          <span>{a.outside}</span>
        </p>
      </div>
    </div>
  );
}
