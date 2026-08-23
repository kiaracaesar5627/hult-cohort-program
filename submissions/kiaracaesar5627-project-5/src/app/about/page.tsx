import { redirect } from "next/navigation";
import { novarisUrl } from "@/lib/site";

/** Canonical company story lives on the Novaris platform. */
export default function AboutPage() {
  redirect(`${novarisUrl()}/about`);
}
