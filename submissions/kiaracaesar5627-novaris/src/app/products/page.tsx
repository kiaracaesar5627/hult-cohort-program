import type { Metadata } from "next";
import Link from "next/link";
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
      <header className="page-intro">
        <p className="eyebrow">Portfolio</p>
        <h1>Products</h1>
        <p className="support lede">
          Each product is a room before a high-stakes moment — practice that respects how real
          conversations actually work.
        </p>
      </header>

      <section className="section" style={{ borderTop: "none", paddingTop: 0 }}>
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
        </div>
      </section>

      <section className="section" id="future">
        <h2>More rooms to come</h2>
        <p className="support">
          {company.name} is building a family of practice spaces. Names below are directions, not
          launch promises — each room will earn its place when the craft is ready.
        </p>
        <ul className="future-rooms">
          <li>
            <strong>{product.name}</strong>
            <span className="meta"> — live</span>
          </li>
          {futureOnly.map((room) => (
            <li key={room} className="meta">
              {room}
            </li>
          ))}
        </ul>
        <p className="support" style={{ marginTop: "1.25rem" }}>
          <Link href="/contact" className="text-link">
            Contact us
          </Link>{" "}
          about partnerships or early access.
        </p>
      </section>
    </>
  );
}
