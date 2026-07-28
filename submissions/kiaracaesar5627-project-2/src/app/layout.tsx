import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { BG_COOKIE, parseBackground } from "@/lib/background";
import { parseTheme, THEME_COOKIE } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Huddle — Cohort communications",
  description:
    "Huddle is focused team chat for the Hult Cohort: channels, DMs, announcements, search, and live updates.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jar = await cookies();
  const theme = parseTheme(jar.get(THEME_COOKIE)?.value);
  const bg = parseBackground(jar.get(BG_COOKIE)?.value);

  return (
    <html lang="en" data-theme={theme} data-bg={bg}>
      <body>{children}</body>
    </html>
  );
}
