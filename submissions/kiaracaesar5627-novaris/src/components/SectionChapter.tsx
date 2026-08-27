type Props = {
  id?: string;
  chapter: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  variant?: "default" | "alt" | "panel" | "ink";
};

export function SectionChapter({
  id,
  chapter,
  eyebrow,
  title,
  lead,
  children,
  variant = "default",
}: Props) {
  return (
    <section
      id={id}
      className={`chapter band${variant !== "default" ? ` band-${variant}` : ""}`}
    >
      <div className="shell chapter-grid">
        <header className="chapter-head">
          <span className="chapter-num" aria-hidden="true">
            {chapter}
          </span>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {lead ? <p className="support chapter-lead">{lead}</p> : null}
          </div>
        </header>
        <div className="chapter-body">{children}</div>
      </div>
    </section>
  );
}
