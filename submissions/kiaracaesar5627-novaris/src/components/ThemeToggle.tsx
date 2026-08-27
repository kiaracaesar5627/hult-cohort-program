"use client";

import { useEffect, useState } from "react";
import { type Theme, getStoredTheme, getSystemTheme, resolveTheme, setTheme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(resolveTheme());
    setMounted(true);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function onSystemChange() {
      if (!getStoredTheme()) {
        const next = getSystemTheme();
        setThemeState(next);
        setTheme(next);
      }
    }

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeState(next);
  }

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
      disabled={!mounted}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {mounted && theme === "dark" ? "☀" : "☾"}
      </span>
      <span className="theme-toggle-label">{mounted && theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
