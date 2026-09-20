import { type ThemeName, type Mode } from "./theme";
import { Themes } from "./theme";
import { useState, useEffect } from "react";

export default function useTheme() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("PROJECTNAME-MODE");
    return savedMode
      ? JSON.parse(savedMode as Mode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  });

  const [colorScheme, setColorScheme] = useState<ThemeName>(() => {
    const savedColorScheme = localStorage.getItem("PROJECTNAME-COLORSCHEME");
    return savedColorScheme
      ? JSON.parse(savedColorScheme as ThemeName)
      : "Crimson";
  });

  useEffect(() => {
    const colors = Themes[colorScheme][mode];
    const root = document.documentElement;

    for (const [variable, value] of Object.entries(colors)) {
      root.style.setProperty(`--color-${variable}`, value);
    }

    localStorage.setItem("PROJECTNAME-MODE", mode)
    localStorage.setItem("PROJECTNAME-COLORSCHEME", colorScheme)
  }, [colorScheme, mode]);

  return {setMode, setColorScheme}
}
