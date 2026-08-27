import type { Metadata } from "next";
import Link from "next/link";
import { PageMasthead } from "@/components/PageMasthead";
import { SectionChapter } from "@/components/SectionChapter";
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
      <PageMasthead
        chapter="Contact"
        eyebrow="Contact"
        title="Get in touch"
        lead="Partnership, product feedback, or general inquiries — we read every message. No invented metrics, no vanity scoreboards."
      />

      <SectionChapter chapter="01" eyebrow="Reach us" title="Contact Novaris">
        <div className="contact-layout">
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
          <aside className="contact-aside">
            <p className="eyebrow">{company.tagline}</p>
            <p>{company.mission}</p>
            <p className="contact-aside-links">
              <Link href="/products" className="text-link">
                Products
              </Link>
              {" · "}
              <Link href="/about" className="text-link">
                About
              </Link>
            </p>
          </aside>
        </div>
      </SectionChapter>
    </>
  );
}
