"use client";

import { useEffect, useState } from "react";
import {
  BACKGROUND_PRESETS,
  BG_COOKIE,
  BG_STORAGE_KEY,
  DEFAULT_BACKGROUND,
  parseBackground,
  type BackgroundId,
} from "@/lib/background";

function persistBackground(bg: BackgroundId) {
  document.documentElement.setAttribute("data-bg", bg);
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${BG_COOKIE}=${bg};path=/;max-age=${maxAge};samesite=lax`;
  try {
    localStorage.setItem(BG_STORAGE_KEY, bg);
  } catch {
    /* ignore quota / private mode */
  }
}

export function BackgroundPicker({
  initialBackground,
}: {
  initialBackground?: BackgroundId;
}) {
  const [background, setBackground] = useState<BackgroundId>(
    initialBackground ?? DEFAULT_BACKGROUND,
  );

  useEffect(() => {
    if (initialBackground) {
      persistBackground(initialBackground);
      return;
    }
    let next = parseBackground(
      document.documentElement.getAttribute("data-bg"),
    );
    try {
      const stored = localStorage.getItem(BG_STORAGE_KEY);
      next = parseBackground(stored);
    } catch {
      /* ignore */
    }
    setBackground(next);
    persistBackground(next);
  }, [initialBackground]);

  return (
    <div className="bg-picker" role="group" aria-label="Background style">
      {BACKGROUND_PRESETS.map((preset) => {
        const selected = background === preset.id;
        return (
          <button
            key={preset.id}
            type="button"
            className={`bg-option bg-option-${preset.id}${selected ? " selected" : ""}`}
            aria-pressed={selected}
            title={preset.description}
            onClick={() => {
              setBackground(preset.id);
              persistBackground(preset.id);
            }}
          >
            <span className="bg-option-swatch" aria-hidden="true" />
            <span className="bg-option-meta">
              <strong>{preset.name}</strong>
              <span className="muted">{preset.description}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
