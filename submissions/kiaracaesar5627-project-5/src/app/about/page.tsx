import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About Novaris" };

export default function AboutPage() {
  return (
    <article className="section prose-page about-page" style={{ borderTop: "none", paddingTop: "2rem" }}>
      <p className="eyebrow">{SITE.company.name}</p>
      <h1>{SITE.company.tagline}</h1>
      <p className="lede">{SITE.company.mission}</p>

      <section className="about-block">
        <h2>What Novaris means</h2>
        <p>{SITE.company.story}</p>
        <p className="support">
          <em>{SITE.company.origin.human}</em>
        </p>
        <dl className="etymology-list">
          <div>
            <dt>Nova</dt>
            <dd>{SITE.company.etymology.nova}</dd>
          </div>
          <div>
            <dt>Aris</dt>
            <dd>{SITE.company.etymology.aris}</dd>
          </div>
        </dl>
      </section>

      <section className="about-block">
        <h2>Threshold + readiness</h2>
        <p>
          Most people only get one shot in the chair. {SITE.company.name} exists for the window
          before that shot — when practice is still private, mistakes are still cheap, and you can
          still change what happens on the other side of the door.
        </p>
        <ul>
          {SITE.company.pillars.map((pillar) => (
            <li key={pillar}>
              <strong>{pillar}</strong>
              {pillar === "Threshold"
                ? " — the step before the conversation that alters a career."
                : " — the capability you build before anyone is watching."}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-block">
        <h2>What we stand for</h2>
        <ul>
          {SITE.company.values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>

      <section className="about-block">
        <h2>Interview Room — our first product</h2>
        <p>
          <strong>{SITE.brandLine}</strong> is {SITE.company.name}&apos;s first room: mock interviews
          organized by the job you applied for, not by algorithm topic. {SITE.product.tagline}
        </p>
        <p>
          <Link href="/practice" className="btn primary">
            Open a room
          </Link>
        </p>
      </section>

      <section className="about-block">
        <h2>More rooms to come</h2>
        <p>
          {SITE.company.name} is building a family of practice spaces — each a room before a
          high-stakes moment:
        </p>
        <ul className="future-rooms">
          {SITE.company.futureProducts.map((room) => (
            <li key={room}>
              {room === SITE.product.name ? (
                <strong>{room} by {SITE.company.name}</strong>
              ) : (
                <span className="meta">{room} by {SITE.company.name}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-block about-closing">
        <p className="support">
          Operated by {SITE.company.legalName}. Questions: GitHub @{SITE.handle}.
        </p>
        <p>
          <Link href="/investors" className="text-link">
            Investor overview
          </Link>
          {" · "}
          <Link href="/privacy" className="text-link">
            Privacy
          </Link>
        </p>
      </section>
    </article>
  );
}
