import { cacheLife } from "next/cache";

/** Current month as "YYYY-MM", cached for a day so pages stay static. */
export async function currentMonth(): Promise<string> {
  "use cache";
  cacheLife("days");
  return new Date().toISOString().slice(0, 7);
}
