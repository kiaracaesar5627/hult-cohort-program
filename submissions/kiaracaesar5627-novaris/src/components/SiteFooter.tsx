import Link from "next/link";
import { SITE, interviewRoomUrl } from "@/lib/site";

export function SiteFooter() {
  const interviewRoom = interviewRoomUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-accent" aria-hidden="true" />
      <div className="shell footer-top">
        <div className="footer-brand-block">
          <p className="footer-brand-name">{SITE.company.name}</p>
          <p className="footer-brand-tag">{SITE.company.tagline}</p>
          <p className="footer-meaning">{SITE.company.meaning}</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-list">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Product</p>
            <ul className="footer-list">
              <li>
                <a href={interviewRoom} rel="noopener noreferrer">
                  Interview Room
                </a>
              </li>
              <li>
                <a href={`${interviewRoom}/practice`} rel="noopener noreferrer">
                  Browse tracks
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Legal</p>
            <p className="footer-legal">{SITE.company.legalName}</p>
            <p className="footer-legal">@{SITE.handle}</p>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {year} {SITE.company.legalName}</p>
        <p className="footer-threshold">Before the moment.</p>
      </div>
    </footer>
  );
}
