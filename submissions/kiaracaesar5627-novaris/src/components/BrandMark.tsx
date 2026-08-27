type Props = {
  size?: number;
  className?: string;
};

/** Threshold mark — teal diamond (aris) + ink baseline (threshold). */
export function BrandMark({ size = 28, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 44 44"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="28" height="28" fill="var(--accent)" transform="rotate(45 22 22)" />
      <rect x="8" y="34" width="28" height="3" rx="1.5" fill="currentColor" opacity="0.85" />
    </svg>
  );
}
