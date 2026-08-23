import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Investors" };

export default function InvestorsPage() {
  return (
    <article className="section prose-page" style={{ borderTop: "none", paddingTop: "2rem" }}>
      <p className="eyebrow">One-pager · {SITE.brandLine}</p>
      <h1>{SITE.company.mission}</h1>
      <p className="lede">{SITE.company.origin.professional}</p>
      <p>{SITE.company.origin.human}</p>
      <p>
        Most interview products coach a generic “interview.” {SITE.product.name}{" "}
        by {SITE.company.name} coaches
        the <em>job the candidate applied to</em> — 320 tracks, 25 interviewer
        prompts each, with a playbook and a debrief. Production app:{" "}
        <a className="text-link" href={`${SITE.productionUrl}/`}>
          {SITE.productionUrl}/
        </a>
        .
      </p>
      <h2>Why Novaris</h2>
      <p>
        <strong>Nova</strong> — {SITE.company.etymology.nova}. <strong>Aris</strong> —{" "}
        {SITE.company.etymology.aris}. We build for{" "}
        {SITE.company.pillars.map((p, i) => (
          <span key={p}>
            {i > 0 ? " and " : ""}
            <em>{p.toLowerCase()}</em>
          </span>
        ))}
        : practice before the door opens, capability before anyone is watching.
      </p>
      <h2>Problem</h2>
      <p>
        US job openings were 6.5 million in December 2025 while 7.5 million
        people were unemployed and looking (BLS JOLTS / Indeed Hiring Lab).
        Applicants still prep on LeetCode-style puzzles or $200/hr coaches.
        Neither matches the actual conversation for FP&amp;A, CS, PM, or a
        consulting case.
      </p>
      <h2>Product</h2>
      <ul>
        <li>8,000 interviewer-phrased scenarios across 320 roles</li>
        <li>Guest practice in the browser; Ludwitt/Hult JWT launch for platform learners</li>
        <li>Evented learning API (own /v1 instance) for qualified-user metrics</li>
      </ul>
      <h2>Ask</h2>
      <p>
        Pre-seed conversation: $150k for 12 months of distribution (career
        centers + bootcamps) and a durable metrics store. No term sheet in this
        packet — this is a first meeting.
      </p>
      <p>
        <Link className="btn primary" href="/demo">
          Open product demo
        </Link>{" "}
        <Link className="btn" href="/investors/deck">
          Open pitch deck
        </Link>
      </p>
    </article>
  );
}
