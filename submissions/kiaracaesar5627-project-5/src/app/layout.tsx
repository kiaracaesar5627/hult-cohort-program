import type { Metadata } from "next";
import Link from "next/link";
import { SITE, novarisUrl, siteUrl } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import { EnsurePracticeSession } from "@/components/EnsurePracticeSession";
import { SiteNav } from "@/components/SiteNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE.brandLine} · Mock interviews`,
    template: `%s · ${SITE.product.name}`,
  },
  description: SITE.metaDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=figtree:400,500,600,700|fraunces:600,650,700|ibm-plex-mono:400,500"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="shell">
          <header className="site-header">
            <div className="brand-lockup">
              <Link href="/" className="brand-name">{SITE.product.name}</Link>
              <a href={novarisUrl()} className="brand-by" rel="noopener noreferrer">
                by {SITE.company.name}
              </a>
            </div>
            <div className="header-actions">
              <ThemeToggle />
              <SiteNav />
            </div>
          </header>
          <main>
            <EnsurePracticeSession />
            {children}
          </main>
          <footer className="site-footer">
            <p className="footer-brand">
              <strong>{SITE.brandLine}</strong>
              <span className="footer-tagline">{SITE.company.tagline}</span>
              <span className="footer-meaning">{SITE.company.meaning}</span>
            </p>
            <p className="footer-links">
              {SITE.company.legalName} · @{SITE.handle} ·{" "}
              <a href={novarisUrl()} rel="noopener noreferrer">
                {SITE.company.name}
              </a>
              {" · "}
              <Link href="/">Interview Room</Link>
              {" · "}
              <Link href="/demo">Demo</Link>
              {" · "}
              <Link href="/tips">Pro tips</Link>
              {" · "}
              <Link href="/privacy">Privacy</Link>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
