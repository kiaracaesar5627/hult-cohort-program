import Link from "next/link";
import { SITE, interviewRoomUrl } from "@/lib/site";

export default function HomePage() {
  const { company } = SITE;
  const interviewRoom = interviewRoomUrl();

  return (
    <>
      <section className="company-hero">
        <div className="company-hero-inner">
          <p className="eyebrow">{company.legalName}</p>
          <h1>{company.name}</h1>
          <p className="company-tagline">{company.tagline}</p>
          <p className="support company-mission">{company.mission}</p>
          <div className="cta-row">
            <Link href="/products" className="btn primary">
              Our products
            </Link>
            <a href={interviewRoom} className="btn" rel="noopener noreferrer">
              Open Interview Room
            </a>
          </div>
        </div>
        <div className="company-hero-aside" aria-hidden="true">
          <div className="company-threshold-card">
            <p className="meta">Threshold</p>
            <p>The step before the door opens.</p>
          </div>
          <div className="company-threshold-card accent">
            <p className="meta">Readiness</p>
            <p>Capability earned in the room, not luck on the day.</p>
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <h2>What {company.name} means</h2>
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

      <section className="section" id="pillars">
        <h2>{company.pillars.join(" + ")}</h2>
        <p className="support">
          Most people only get one shot in the chair. {company.name} exists for the window before that
          shot — when practice is still private, mistakes are still cheap, and you can still change
          what happens on the other side of the door.
        </p>
        <div className="pillar-grid">
          <article className="pillar-card">
            <h3>Threshold</h3>
            <p>
              The step before the conversation that alters a career — the interview, the panel, the
              licensing exam, the pitch that unlocks the next chapter.
            </p>
          </article>
          <article className="pillar-card">
            <h3>Readiness</h3>
            <p>
              The capability you build before anyone is watching — through reps, honest debrief, and
              structured practice instead of hope.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="values">
        <h2>What we stand for</h2>
        <ul className="values-grid">
          {company.values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
