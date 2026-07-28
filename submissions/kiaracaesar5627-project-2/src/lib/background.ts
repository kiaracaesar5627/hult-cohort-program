export type BackgroundId =
  | "default"
  | "mist"
  | "lagoon"
  | "slate"
  | "solid"
  | "mesh";

export const BG_COOKIE = "huddle_bg";
export const BG_STORAGE_KEY = "huddle_bg";
export const DEFAULT_BACKGROUND: BackgroundId = "default";

export const BACKGROUND_PRESETS: {
  id: BackgroundId;
  name: string;
  description: string;
}[] = [
  {
    id: "default",
    name: "Aurora",
    description: "Soft teal glow wash",
  },
  {
    id: "mist",
    name: "Mist",
    description: "Muted haze, low contrast",
  },
  {
    id: "lagoon",
    name: "Lagoon",
    description: "Deeper teal atmosphere",
  },
  {
    id: "slate",
    name: "Slate",
    description: "Cool blue-gray wash",
  },
  {
    id: "solid",
    name: "Solid",
    description: "Flat tone, no glow",
  },
  {
    id: "mesh",
    name: "Mesh",
    description: "Subtle geometric pattern",
  },
];

const IDS = new Set<string>(BACKGROUND_PRESETS.map((p) => p.id));

export function isBackgroundId(
  value: string | undefined | null,
): value is BackgroundId {
  return !!value && IDS.has(value);
}

export function parseBackground(
  value: string | undefined | null,
): BackgroundId {
  return isBackgroundId(value) ? value : DEFAULT_BACKGROUND;
}
