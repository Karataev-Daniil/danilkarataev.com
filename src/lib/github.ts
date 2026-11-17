import { cacheLife } from "next/cache";

import { person } from "./site";

export type Level = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  level: Level;
  count: number;
}

export interface ContributionCalendar {
  days: ContributionDay[];
  total: number;
  currentStreak: number;
  longestStreak: number;
}

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
  learning: boolean;
}

export interface LanguageShare {
  name: string;
  share: number;
}

export interface GitHubData {
  calendar: ContributionCalendar | null;
  repos: Repo[];
  languages: LanguageShare[];
}

const USER = person.github.user;
const TIMEOUT = 10_000;

/** Pinned repos in order; others fill in if the list runs short. */
const PREFERRED = ["goodantshop", "AroundWire-WP", "woocommerce-purchase-price-import", "react-admin-dashboard"];
const MAX_REPOS = 4;

function apiHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": `${USER}-portfolio`,
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

function attr(tag: string, name: string): string | undefined {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m?.[1];
}

export function parseContributions(html: string): ContributionCalendar | null {
  // Exact counts come from the tooltips.
  const counts = new Map<string, number>();
  for (const m of html.matchAll(/<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const id = m[1];
    const text = (m[2] ?? "").trim();
    if (!id) continue;
    const n = text.match(/^([\d,]+)\s+contribution/i);
    counts.set(id, n?.[1] ? Number(n[1].replace(/,/g, "")) : 0);
  }

  const days: ContributionDay[] = [];
  for (const m of html.matchAll(/<td\b[^>]*ContributionCalendar-day[^>]*>/g)) {
    const tag = m[0];
    const date = attr(tag, "data-date");
    const levelRaw = Number(attr(tag, "data-level") ?? 0);
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    const level = (Math.min(4, Math.max(0, levelRaw)) || 0) as Level;
    const id = attr(tag, "id");
    const fromTooltip = id ? counts.get(id) : undefined;
    // No tooltip: keep the day, level only.
    const count = fromTooltip ?? (level > 0 ? 1 : 0);
    days.push({ date, level, count });
  }

  if (days.length < 7) return null;
  days.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  const headline = html.match(/([\d,]+)\s+contributions?\s+in the last year/i);
  const summed = days.reduce((s, d) => s + d.count, 0);
  const total = headline?.[1] ? Number(headline[1].replace(/,/g, "")) : summed;

  return { days, total, ...computeStreaks(days) };
}

export function computeStreaks(days: ContributionDay[]): { currentStreak: number; longestStreak: number } {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    if (run > longest) longest = run;
  }

  // An empty today doesn't break the streak yet.
  let current = 0;
  let i = days.length - 1;
  if (i >= 0 && days[i]!.count === 0) i -= 1;
  for (; i >= 0 && days[i]!.count > 0; i -= 1) current += 1;

  return { currentStreak: current, longestStreak: longest };
}

async function fetchCalendar(): Promise<ContributionCalendar | null> {
  const res = await fetch(`https://github.com/users/${USER}/contributions`, {
    headers: { "User-Agent": `${USER}-portfolio`, Accept: "text/html" },
    signal: AbortSignal.timeout(TIMEOUT),
  });
  if (!res.ok) throw new Error(`contributions: HTTP ${res.status}`);
  return parseContributions(await res.text());
}

interface ApiRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

async function fetchRepos(): Promise<ApiRepo[]> {
  const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`, {
    headers: apiHeaders(),
    signal: AbortSignal.timeout(TIMEOUT),
  });
  if (!res.ok) throw new Error(`repos: HTTP ${res.status}`);
  const data = (await res.json()) as ApiRepo[];
  return data.filter((r) => !r.fork);
}

const isLearning = (r: ApiRepo) => /^learning project/i.test(r.description ?? "");

function pickRepos(all: ApiRepo[]): Repo[] {
  const byName = new Map(all.map((r) => [r.name.toLowerCase(), r]));
  const chosen: ApiRepo[] = [];
  for (const name of PREFERRED) {
    const r = byName.get(name.toLowerCase());
    if (r) chosen.push(r);
  }
  for (const r of all) {
    if (chosen.length >= MAX_REPOS) break;
    if (!chosen.includes(r) && !r.archived && !isLearning(r)) chosen.push(r);
  }
  return chosen.slice(0, MAX_REPOS).map((r) => ({
    name: r.name,
    description: r.description,
    url: r.html_url,
    homepage: r.homepage || null,
    language: r.language,
    stars: r.stargazers_count,
    pushedAt: r.pushed_at,
    learning: isLearning(r),
  }));
}

/** Languages only; tiny ones fold into "Other". */
const NOT_CODE = new Set(["CSS", "SCSS", "Sass", "Less", "HTML", "Hack"]);

async function fetchLanguages(repos: ApiRepo[]): Promise<LanguageShare[]> {
  const results = await Promise.allSettled(
    repos.map(async (r) => {
      const res = await fetch(`https://api.github.com/repos/${USER}/${r.name}/languages`, {
        headers: apiHeaders(),
        signal: AbortSignal.timeout(TIMEOUT),
      });
      if (!res.ok) throw new Error(`languages ${r.name}: HTTP ${res.status}`);
      return (await res.json()) as Record<string, number>;
    }),
  );

  const totals = new Map<string, number>();
  let ok = 0;
  for (const result of results) {
    if (result.status !== "fulfilled") continue;
    ok += 1;
    for (const [lang, bytes] of Object.entries(result.value)) {
      if (NOT_CODE.has(lang)) continue;
      totals.set(lang, (totals.get(lang) ?? 0) + bytes);
    }
  }
  if (ok === 0) {
    // Fallback when rate-limited.
    for (const r of repos) if (r.language) totals.set(r.language, (totals.get(r.language) ?? 0) + 1);
  }

  const sum = [...totals.values()].reduce((a, b) => a + b, 0);
  if (sum === 0) return [];

  const shares: LanguageShare[] = [];
  let other = 0;
  for (const [name, bytes] of [...totals.entries()].sort((a, b) => b[1] - a[1])) {
    const share = bytes / sum;
    if (share < 0.015 || shares.length >= 5) other += share;
    else shares.push({ name, share });
  }
  if (other > 0) shares.push({ name: "Other", share: other });
  return shares;
}

/** Revalidated daily; never throws, so offline builds still pass. */
export async function getGitHubData(): Promise<GitHubData> {
  "use cache";

  const [calendar, repoList] = await Promise.allSettled([fetchCalendar(), fetchRepos()]);

  const allRepos = repoList.status === "fulfilled" ? repoList.value : [];
  const repos = pickRepos(allRepos);
  const languages = allRepos.length ? await fetchLanguages(allRepos).catch(() => []) : [];
  const cal = calendar.status === "fulfilled" ? calendar.value : null;

  if (calendar.status === "rejected") console.warn("[github] calendar unavailable:", String(calendar.reason));
  if (repoList.status === "rejected") console.warn("[github] repos unavailable:", String(repoList.reason));

  if (cal && repos.length) {
    cacheLife({ stale: 3600, revalidate: 86_400, expire: 7 * 86_400 });
  } else {
    // Partial data: retry sooner.
    cacheLife({ stale: 300, revalidate: 3600, expire: 86_400 });
  }

  return { calendar: cal, repos, languages };
}
