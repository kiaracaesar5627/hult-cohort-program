export const SITE = {
  company: {
    name: "Novaris",
    legalName: "Novaris, LLC",
    /** Primary company tagline — threshold + readiness */
    tagline: "Practice before the moment.",
    /** Alternates (not shown in UI by default):
     * - "Ready at the threshold."
     * - "Prepared, not lucky."
     * - "Where readiness meets the door."
     * - "The raised ground before you step through."
     * - "New readiness, before the room changes everything."
     */
    taglineAlternates: [
      "Ready at the threshold.",
      "Prepared, not lucky.",
      "Where readiness meets the door.",
      "The raised ground before you step through.",
      "New readiness, before the room changes everything.",
    ],
    mission:
      "Novaris builds tools for high-stakes transitions — the practice, clarity, and confidence people need before the moment that changes their path.",
    /** Professional + human origin (A + B mix) */
    origin: {
      professional:
        "Novaris draws on nova — new — and aris, a raised place of focus. We build at the threshold: the hours before someone walks into the room that changes their path.",
      human:
        "Your first real interview should not be your first time in the chair. Interview Room is where that preparation becomes real.",
    },
    /** Full origin story for About / investors */
    story:
      "Novaris draws on nova — new — and aris, a raised place of focus. We build at the threshold: the hours before someone walks into the room that changes their path. Interview Room is where that preparation becomes real — so your first real interview is not your first time in the chair.",
    /** One-line Nova + Aris meaning for footer / metadata */
    meaning: "Nova + aris — new readiness on raised ground, before the moment that counts.",
    /** Home hero support line */
    heroKicker:
      "Practice at the threshold — before the interview that changes your path.",
    values: [
      "Preparation — practice before pressure, not after regret.",
      "Honesty — structured debriefs that tell the truth, not vanity scores.",
      "Access — career paths across majors, not only tech and finance.",
      "Threshold — respect for the moment right before the door opens.",
      "Readiness — capability earned in the room, not luck on the day.",
    ],
    pillars: ["Threshold", "Readiness"] as const,
    etymology: {
      nova: "new — a new chapter, a new readiness",
      aris: "a raised ground — where focus happens before the real moment",
    },
    futureProducts: [
      "Interview Room",
      "Presentation Room",
      "Board Room",
      "Licensing Room",
    ],
  },
  product: {
    name: "Interview Room",
    /** Primary product tagline */
    tagline: "Sit across the table from the interview for the job you applied to.",
    /** Alternates (not shown in UI by default):
     * - "The room before the interview."
     * - "Practice the conversation for the role you applied for."
     * - "Role-specific prompts, honest debrief, real pressure."
     */
    taglineAlternates: [
      "The room before the interview.",
      "Practice the conversation for the role you applied for.",
      "Role-specific prompts, honest debrief, real pressure.",
    ],
  },
  brandLine: "Interview Room by Novaris",
  /** @deprecated Prefer SITE.product.name */
  name: "Interview Room",
  /** @deprecated Prefer SITE.product.tagline */
  tagline: "Sit across the table from the interview for the job you applied to.",
  /** SEO / layout metadata — weaves threshold + readiness subtly */
  metaDescription:
    "Role-specific mock interviews across 16 career majors and 320 tracks. Threshold practice with honest debrief — ready when the door opens.",
  description:
    "Role-specific mock interviews across 16 career majors and 320 tracks — 30 prompts each including 5 pressure questions, speak mode, mock loops, answer review with interview tips, and a private on-device journal.",
  topic: "Interview prep by role",
  handle: "kiaracaesar5627",
  cohort: "Hult Cohort Summer Pilot 2026",
  productionUrl: "https://interviewroom-kiaracaesar5627.vercel.app",
} as const;

export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
