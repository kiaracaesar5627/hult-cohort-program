import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: SITE.company.story,
};

export default function AboutPage() {
  const { company } = SITE;

  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Company</p>
        <h1>About {company.name}</h1>
        <p className="support lede">{company.story}</p>
      </header>

      <section className="section" style={{ borderTop: "none", paddingTop: 0 }}>
        <h2>Our mission</h2>
        <p className="support">{company.mission}</p>
      </section>

      <section className="section">
        <h2>{company.pillars.join(" + ")}</h2>
        <p className="support">{company.origin.professional}</p>
        <p className="support">
          <em>{company.origin.human}</em>
        </p>
        <dl className="etymology-list">
          <div>
            <dt>Nova</dt>
            <dd>{company.etymology.nova}</dd>
          </div>
          <div>
            <dt>Aris</dt>
            <dd>{company.etymology.aris}</dd>
          </div>
        </dl>
      </section>

      <section className="section">
        <h2>What we stand for</h2>
        <ul className="values-grid">
          {company.values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <p className="support">
          <Link href="/products" className="text-link">
            See our products
          </Link>
          {" · "}
          <Link href="/contact" className="text-link">
            Get in touch
          </Link>
        </p>
      </section>
    </>
  );
}
