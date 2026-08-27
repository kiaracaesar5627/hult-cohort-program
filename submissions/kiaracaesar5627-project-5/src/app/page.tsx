import Link from "next/link";
import { JOB_TRACKS } from "@/lib/lessons";
import { TRACK_FAMILY_ORDER, TRACK_FAMILY_SHORT, trackFamily } from "@/lib/track-family";
import { SITE } from "@/lib/site";
import { PracticeJournal } from "@/components/PracticeJournal";
import { FirstVisitTour } from "@/components/FirstVisitTour";
import { DEMO_FEATURED_SLUGS } from "@/lib/demo-tour";

export default function HomePage() {
  const featured = DEMO_FEATURED_SLUGS.map((slug) => JOB_TRACKS.find((t) => t.slug === slug)).filter(
    Boolean,
  ) as typeof JOB_TRACKS;

  return (
    <>
      <FirstVisitTour />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{SITE.brandLine}</p>
          <h1>{SITE.product.name}</h1>
          <p className="lede">{SITE.product.tagline}</p>
          <p className="support hero-kicker">
            {SITE.company.tagline} {SITE.company.heroKicker}
          </p>
          <div className="cta-row">
            <Link href="/practice" className="btn primary">
              Open a room
            </Link>
            <Link href="/demo" className="btn">
              See a demo
            </Link>
          </div>
        </div>
        <div className="hero-stage" aria-hidden="true">
          <div className="hero-table">
            <div className="hero-card">
              <p className="meta">Interviewer</p>
              <p>
                Walk me through a time you owned a miss — what did you do in the first forty-eight
                hours?
              </p>
            </div>
            <div className="hero-desk">
              <p className="meta">Your side</p>
              <p>Timer · speak aloud · playbook when you need it · honest self-score</p>
            </div>
          </div>
        </div>
        <div className="hero-stats" aria-label="Catalog size">
          <div className="hero-stat">
            <strong>320</strong>
            <span>Job tracks</span>
          </div>
          <div className="hero-stat">
            <strong>16</strong>
            <span>Career majors</span>
          </div>
          <div className="hero-stat">
            <strong>30</strong>
            <span>Prompts per track</span>
          </div>
        </div>
      </section>

      <section className="section band-panel" id="difference">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Why it works</p>
            <h2>Built like the interview, not a quiz</h2>
            <p className="support">
              Most prep tools dump generic questions. {SITE.product.name} puts you across the table from
              a role-specific interviewer — so you walk in ready, not rehearsing for the wrong
              conversation.
            </p>
          </div>
          <ol className="how-steps bento">
            <li>
              <span className="step-num">01</span>
              <strong>320 job tracks</strong>
              <span>16 career majors · 30 prompts each · including 5 pressure questions</span>
            </li>
            <li>
              <span className="step-num">02</span>
              <strong>Speak mode + timer</strong>
              <span>Answer out loud under the clock — Space, S, and P shortcuts</span>
            </li>
            <li>
              <span className="step-num">03</span>
              <strong>Answer review + tips</strong>
              <span>Marks your scratch draft for structure, evidence, and how to speak in the room</span>
            </li>
            <li>
              <span className="step-num">04</span>
              <strong>Mock loop</strong>
              <span>Five rooms in one sitting, then a private scorecard on this device</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="section majors-strip">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Coverage</p>
            <h2>Sixteen majors</h2>
            <p className="support">From healthcare to trades to government — not only tech and finance.</p>
          </div>
          <ul className="major-pills">
            {TRACK_FAMILY_ORDER.map((f) => (
              <li key={f}>
                <Link href={`/practice?major=${encodeURIComponent(f)}`}>{TRACK_FAMILY_SHORT[f]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section journal-home band-alt">
        <div className="section-inner">
          <PracticeJournal compact />
        </div>
      </section>

      <section className="section" id="tracks">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Featured</p>
            <h2>Open a featured room</h2>
            <p className="support">Or browse the full catalog — then run a mock loop on any track.</p>
          </div>
          <div className="lesson-grid featured-grid">
            {featured.map((track) => (
              <Link key={track.slug} href={`/practice/${track.slug}`} className="lesson-link">
                <p className="meta">
                  {TRACK_FAMILY_SHORT[trackFamily(track.slug)]} · {track.scenarios.length} questions
                </p>
                <h3>{track.role}</h3>
                <p>{track.blurb}</p>
              </Link>
            ))}
          </div>
          <p className="section-cta">
            <Link href="/practice" className="btn primary">
              Browse all {JOB_TRACKS.length} tracks
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
