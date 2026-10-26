import { useState, useEffect } from "react";
import { type ThemeName, type Mode, Themes } from "./theme";
import { ThemeContext } from "./ThemeContext";

const MODE_KEY = "PROJECTNAME-MODE";
const SCHEME_KEY = "PROJECTNAME-COLORSCHEME";
const DEFAULT_SCHEME: ThemeName = "Crimson";

function isMode(value: unknown): value is Mode {
  return value === "light" || value === "dark";
}

function isThemeName(value: unknown): value is ThemeName {
  return typeof value === "string" && Themes.includes(value);
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

    // Previously set mode -> Browser prefered mode -> otherwise light
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(MODE_KEY);
    if (isMode(savedMode)) {
      return savedMode;
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      return "dark";
    } else return "light";
  });

  // Previously set theme -> Crimson
  const [colorScheme, setColorScheme] = useState<ThemeName>(() => {
    const savedColorScheme = localStorage.getItem(SCHEME_KEY);
    if (isThemeName(savedColorScheme)) {
      return savedColorScheme;
    } else return DEFAULT_SCHEME;
  });

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.dataset.theme = colorScheme;
    localStorage.setItem(SCHEME_KEY, colorScheme);
  }, [colorScheme]);

    useEffect(() => {
    document.documentElement.dataset.mode = mode;
    localStorage.setItem(MODE_KEY, mode);
  }, [mode]);

  return (
    <ThemeContext
      value={{ mode, colorScheme, setMode, setColorScheme, toggleMode }}
    >
      {children}
    </ThemeContext>
  );
}
