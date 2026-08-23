export const SITE = {
  company: {
    name: "Novaris",
    legalName: "Novaris, LLC",
    tagline: "Practice before the moment.",
    mission:
      "Novaris builds tools for high-stakes transitions — the practice, clarity, and confidence people need before the moment that changes their path.",
    origin: {
      professional:
        "Novaris draws on nova — new — and aris, a raised place of focus. We build at the threshold: the hours before someone walks into the room that changes their path.",
      human:
        "Your first real interview should not be your first time in the chair. Interview Room is where that preparation becomes real.",
    },
    story:
      "Novaris draws on nova — new — and aris, a raised place of focus. We build at the threshold: the hours before someone walks into the room that changes their path. Interview Room is where that preparation becomes real — so your first real interview is not your first time in the chair.",
    meaning: "Nova + aris — new readiness on raised ground, before the moment that counts.",
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
    contactEmail: "hello@novaris.co",
  },
  products: [
    {
      name: "Interview Room",
      brandLine: "Interview Room by Novaris",
      tagline: "Sit across the table from the interview for the job you applied to.",
      status: "live" as const,
      blurb:
        "Mock interviews organized by the job you applied for — 16 career majors, 320 role tracks, structured debrief, and pressure you can rehearse in private.",
    },
  ],
  handle: "kiaracaesar5627",
} as const;

export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3001";
}

export function interviewRoomUrl(): string {
  const raw = process.env.NEXT_PUBLIC_INTERVIEW_ROOM_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://kiaracaesar5627-project-4.vercel.app";
}
