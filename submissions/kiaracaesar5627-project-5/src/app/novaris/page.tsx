import { redirect } from "next/navigation";
import { novarisUrl } from "@/lib/site";

/** Company site moved to standalone Novaris platform. */
export default function NovarisRedirectPage() {
  redirect(novarisUrl());
}
