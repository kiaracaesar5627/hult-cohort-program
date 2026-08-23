import Link from "next/link";
import { SITE, interviewRoomUrl } from "@/lib/site";

export function SiteFooter() {
  const interviewRoom = interviewRoomUrl();

  return (
    <footer className="site-footer">
      <p className="footer-brand">
        <strong>{SITE.company.name}</strong>
        <span className="footer-tagline">{SITE.company.tagline}</span>
        <span className="footer-meaning">{SITE.company.meaning}</span>
      </p>
      <p className="footer-links">
        {SITE.company.legalName} · @{SITE.handle} ·{" "}
        <a href={interviewRoom} rel="noopener noreferrer">
          Interview Room
        </a>
        {" · "}
        <Link href="/products">Products</Link>
        {" · "}
        <Link href="/contact">Contact</Link>
      </p>
    </footer>
  );
}
