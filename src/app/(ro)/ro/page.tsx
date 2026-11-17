import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("ro");

export default function Page() {
  return <HomePage locale="ro" />;
}
