/**
 * Novaris brand design — source of truth from Brand Identity form + live site tokens.
 * Use these values in Canva Brand Kit, Figma, and code (globals.css).
 */
export const BRAND = {
  business: {
    name: "Novaris",
    legalName: "Novaris, LLC",
    type: "Web Designer",
    productLine: "Interview Room by Novaris",
  },
  voice: ["Modern", "Professional", "Sophisticated", "Minimalist", "Bold"] as const,
  colorHarmony:
    "Analogous neutrals with complementary accent — warm cream/paper tones as the base, deep ink for text, teal as primary accent, burnt orange as secondary warm accent.",
  colors: {
    ink: { hex: "#14181f", role: "Primary text, footer backgrounds" },
    paper: { hex: "#f3f0ea", role: "Page background" },
    panel: { hex: "#fffdf8", role: "Cards, panels, header glass" },
    band: { hex: "#e8e3da", role: "Alternating section bands" },
    muted: { hex: "#5c6570", role: "Secondary text, nav" },
    accent: { hex: "#0f766e", role: "Primary accent — links, eyebrows, selection" },
    accentSecondary: { hex: "#c2410c", role: "CTAs, emphasis, threshold cards" },
  },
  accentPrimary: "#0f766e",
  backgroundPrimary: "#f3f0ea",
  emotionalImpact:
    "Warm cream feels calm and approachable — a safe place to practice before stress. Deep ink signals seriousness. Teal suggests growth and readiness at the threshold. Burnt orange adds energy for CTAs without harsh anxiety. Together: calm preparation, professional trust, quiet confidence.",
  typography: {
    headline: {
      family: "Fraunces",
      weights: "600–700",
      use: "Display headlines, brand wordmark, hero titles",
    },
    subheading: {
      family: "Fraunces or Figtree",
      weights: "650 / 600",
      use: "Section titles, eyebrows, card headings",
    },
    body: {
      family: "Figtree",
      weights: "400–500",
      use: "Paragraphs, UI, navigation, long reads",
    },
    mono: {
      family: "IBM Plex Mono",
      weights: "400–500",
      use: "Labels, metadata, eyebrows (optional)",
    },
  },
  tagline: "Practice before the moment.",
  mission:
    "Novaris builds tools for high-stakes transitions — the practice, clarity, and confidence people need before the moment that changes their path.",
  canva: {
    brandName: "Novaris",
    paletteOrder: ["#14181f", "#f3f0ea", "#fffdf8", "#e8e3da", "#5c6570", "#0f766e", "#c2410c"],
    headingFont: "Fraunces",
    subheadingFont: "Fraunces",
    bodyFont: "Figtree",
  },
} as const;

/** Flat list for Canva color picker copy-paste */
export const BRAND_PALETTE_HEX = Object.values(BRAND.colors).map((c) => c.hex);
