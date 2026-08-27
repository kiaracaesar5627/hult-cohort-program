type Props = {
  chapter?: string;
  eyebrow: string;
  title: string;
  lead?: string;
};

export function PageMasthead({ chapter, eyebrow, title, lead }: Props) {
  return (
    <header className="page-masthead">
      <div className="shell page-masthead-inner">
        {chapter ? (
          <span className="page-chapter-num" aria-hidden="true">
            {chapter}
          </span>
        ) : null}
        <div className="page-masthead-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {lead ? <p className="support lede">{lead}</p> : null}
        </div>
      </div>
      <div className="masthead-rule shell" aria-hidden="true" />
    </header>
  );
}
