import type { Metadata } from "next";
import Link from "next/link";
import { SITE, siteUrl } from "@/lib/site";
import { EnsurePracticeSession } from "@/components/EnsurePracticeSession";
import { SiteNav } from "@/components/SiteNav";
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=figtree:400,500,600,700|fraunces:600,650,700|ibm-plex-mono:400,500"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="shell">
          <header className="site-header">
            <Link href="/" className="brand">
              <span className="brand-name">{SITE.product.name}</span>
              <span className="brand-by">by {SITE.company.name}</span>
            </Link>
            <SiteNav />
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
              <Link href="/about">About</Link>
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
