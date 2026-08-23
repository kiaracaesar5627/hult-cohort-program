import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.company.legalName}.`,
};

export default function ContactPage() {
  const { company, handle } = SITE;
  const mailto = `mailto:${company.contactEmail}?subject=${encodeURIComponent("Novaris inquiry")}`;

  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch</h1>
        <p className="support lede">
          Partnership, product feedback, or general inquiries — we read every message. No invented
          metrics, no vanity scoreboards.
        </p>
      </header>

      <section className="section" style={{ borderTop: "none", paddingTop: 0 }}>
        <div className="contact-card">
          <p>
            <strong>{company.legalName}</strong>
          </p>
          <p className="support">
            For partnership or product questions, email us. Interview Room support lives on the
            product site.
          </p>
          <div className="cta-row">
            <a href={mailto} className="btn primary compact">
              Email {company.contactEmail}
            </a>
            <a
              href={`https://github.com/${handle}`}
              className="btn compact"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub @{handle}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="support">
          <Link href="/products" className="text-link">
            Products
          </Link>
          {" · "}
          <Link href="/about" className="text-link">
            About
          </Link>
        </p>
      </section>
    </>
  );
}
