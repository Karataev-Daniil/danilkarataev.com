import { Golos_Text, IBM_Plex_Mono, Literata } from "next/font/google";

export const display = Literata({
  subsets: ["latin", "latin-ext", "cyrillic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

export const sans = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
