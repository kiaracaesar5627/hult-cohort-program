import type { Metadata } from "next";
import Link from "next/link";
import { PageMasthead } from "@/components/PageMasthead";
import { SectionChapter } from "@/components/SectionChapter";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: SITE.company.story,
};

function valueLabel(raw: string): { title: string; body: string } {
  const dash = raw.indexOf(" — ");
  if (dash < 0) return { title: raw, body: "" };
  return { title: raw.slice(0, dash), body: raw.slice(dash + 3) };
}

export default function AboutPage() {
  const { company } = SITE;

  return (
    <>
      <PageMasthead
        chapter="About"
        eyebrow="Company"
        title={`About ${company.name}`}
        lead={company.story}
      />

      <SectionChapter chapter="01" eyebrow="Mission" title="Our mission">
        <p className="support">{company.mission}</p>
      </SectionChapter>

      <SectionChapter
        chapter="02"
        eyebrow="Pillars"
        title={company.pillars.join(" + ")}
        variant="alt"
      >
        <p className="support">{company.origin.professional}</p>
        <p className="support story-human">{company.origin.human}</p>
      </SectionChapter>

      <SectionChapter chapter="03" eyebrow="Etymology" title="Nova + Aris">
        <dl className="etymology-grid">
          <div className="etymology-card">
            <dt>Nova</dt>
            <dd>{company.etymology.nova}</dd>
          </div>
          <div className="etymology-card">
            <dt>Aris</dt>
            <dd>{company.etymology.aris}</dd>
          </div>
        </dl>
      </SectionChapter>

      <SectionChapter chapter="04" eyebrow="Values" title="What we stand for" variant="alt">
        <ul className="values-grid">
          {company.values.map((value) => {
            const { title, body } = valueLabel(value);
            return (
              <li key={value}>
                <strong>{title}</strong>
                {body}
              </li>
            );
          })}
        </ul>
        <p className="support section-links">
          <Link href="/products" className="text-link">
            See our products
          </Link>
          {" · "}
          <Link href="/contact" className="text-link">
            Get in touch
          </Link>
        </p>
      </SectionChapter>
    </>
  );
}
