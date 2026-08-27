import Link from "next/link";
import { SectionChapter } from "@/components/SectionChapter";
import { SITE, interviewRoomUrl } from "@/lib/site";

function valueLabel(raw: string): { title: string; body: string } {
  const dash = raw.indexOf(" — ");
  if (dash < 0) return { title: raw, body: "" };
  return { title: raw.slice(0, dash), body: raw.slice(dash + 3) };
}

export default function HomePage() {
  const { company } = SITE;
  const interviewRoom = interviewRoomUrl();
  const product = SITE.products[0];

  return (
    <>
      <section className="company-hero">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="hero-glow hero-glow-a" />
          <div className="hero-glow hero-glow-b" />
          <div className="hero-grid" />
        </div>
        <div className="shell hero-content">
          <div className="company-hero-grid">
            <div className="company-hero-inner">
              <p className="eyebrow">{company.legalName}</p>
              <h1>{company.name}</h1>
              <p className="company-tagline">{company.tagline}</p>
              <p className="support company-mission">{company.mission}</p>
              <div className="cta-row">
                <Link href="/products" className="btn primary">
                  Our products
                </Link>
                <a href={interviewRoom} className="btn ghost" rel="noopener noreferrer">
                  Open Interview Room
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="threshold-stack">
                <div className="threshold-card teal">
                  <span className="threshold-num">01</span>
                  <div>
                    <p className="meta">Threshold</p>
                    <p>The step before the door opens.</p>
                  </div>
                </div>
                <div className="threshold-card accent">
                  <span className="threshold-num">02</span>
                  <div>
                    <p className="meta">Readiness</p>
                    <p>Capability earned in the room, not luck on the day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-stat-strip">
            <div className="hero-stat">
              <strong>Nova</strong>
              <span>New chapter</span>
            </div>
            <div className="hero-stat">
              <strong>Aris</strong>
              <span>Raised ground</span>
            </div>
            <div className="hero-stat">
              <strong>Room</strong>
              <span>Practice first</span>
            </div>
          </div>
        </div>
      </section>

      <SectionChapter
        id="story"
        chapter="01"
        eyebrow="Origin"
        title={`What ${company.name} means`}
        variant="alt"
      >
        <div className="story-split">
          <div>
            <p className="support">{company.origin.professional}</p>
            <p className="support story-human">{company.origin.human}</p>
          </div>
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
        </div>
      </SectionChapter>

      <SectionChapter
        id="pillars"
        chapter="02"
        eyebrow="Pillars"
        title={company.pillars.join(" + ")}
        lead={`Most people only get one shot in the chair. ${company.name} exists for the window before that shot — when practice is still private, mistakes are still cheap, and you can still change what happens on the other side of the door.`}
      >
        <div className="pillar-grid">
          <article className="pillar-card">
            <h3>Threshold</h3>
            <p>
              The step before the conversation that alters a career — the interview, the panel, the
              licensing exam, the pitch that unlocks the next chapter.
            </p>
          </article>
          <article className="pillar-card readiness">
            <h3>Readiness</h3>
            <p>
              The capability you build before anyone is watching — through reps, honest debrief, and
              structured practice instead of hope.
            </p>
          </article>
        </div>
      </SectionChapter>

      <SectionChapter
        id="product"
        chapter="03"
        eyebrow="Product #1"
        title={product.name}
        lead={product.tagline}
        variant="panel"
      >
        <article className="product-card featured">
          <p className="meta">Live now</p>
          <h3>{product.brandLine}</h3>
          <p className="support">{product.blurb}</p>
          <div className="cta-row">
            <a href={interviewRoom} className="btn primary compact" rel="noopener noreferrer">
              Open Interview Room
            </a>
            <Link href="/products" className="btn compact">
              All products
            </Link>
          </div>
        </article>
      </SectionChapter>

      <SectionChapter
        id="values"
        chapter="04"
        eyebrow="Values"
        title="What we stand for"
        variant="alt"
      >
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
      </SectionChapter>

      <section className="band band-cta">
        <div className="shell band-cta-inner">
          <p className="eyebrow">Start here</p>
          <h2>Practice before the moment.</h2>
          <p className="support">{company.mission}</p>
          <div className="cta-row">
            <a href={interviewRoom} className="btn primary" rel="noopener noreferrer">
              Open Interview Room
            </a>
            <Link href="/contact" className="btn ghost">
              Contact Novaris
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
