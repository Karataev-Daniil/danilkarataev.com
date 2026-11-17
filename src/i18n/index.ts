import type { Locale } from "@/lib/site";
import { en, type Dictionary } from "./en";
import { ro } from "./ro";
import { ru } from "./ru";

const dictionaries: Record<Locale, Dictionary> = { en, ro, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
