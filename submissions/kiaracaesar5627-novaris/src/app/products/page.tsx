import type { Metadata } from "next";
import Link from "next/link";
import { PageMasthead } from "@/components/PageMasthead";
import { SectionChapter } from "@/components/SectionChapter";
import { SITE, interviewRoomUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Novaris products — practice rooms before high-stakes professional moments.",
};

export default function ProductsPage() {
  const { company } = SITE;
  const interviewRoom = interviewRoomUrl();
  const product = SITE.products[0];
  const futureOnly = company.futureProducts.filter((room) => room !== product.name);

  return (
    <>
      <PageMasthead
        chapter="Products"
        eyebrow="Portfolio"
        title="Products"
        lead="Each product is a room before a high-stakes moment — practice that respects how real conversations actually work."
      />

      <SectionChapter chapter="01" eyebrow="Live now" title="Interview Room">
        <div className="product-showcase">
          <article className="product-card featured">
            <p className="meta">Live now · Product #1</p>
            <h3>{product.brandLine}</h3>
            <p>{product.tagline}</p>
            <p className="support">{product.blurb}</p>
            <div className="cta-row">
              <a href={interviewRoom} className="btn primary compact" rel="noopener noreferrer">
                Open Interview Room
              </a>
              <a href={`${interviewRoom}/practice`} className="btn compact" rel="noopener noreferrer">
                Browse tracks
              </a>
            </div>
          </article>
          <div className="pipeline-panel">
            <p className="eyebrow">Pipeline</p>
            <h2 className="pipeline-title">More rooms to come</h2>
            <p className="support">
              Names below are directions, not launch promises — each room earns its place when the
              craft is ready.
            </p>
            <ul className="future-grid">
              <li className="live">
                <strong>{product.name}</strong>
                <span className="meta"> — live</span>
              </li>
              {futureOnly.map((room) => (
                <li key={room}>{room}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionChapter>

      <section className="band band-alt">
        <div className="shell">
          <p className="support">
            <Link href="/contact" className="text-link">
              Contact us
            </Link>{" "}
            about partnerships or early access.
          </p>
        </div>
      </section>
    </>
  );
}
