import { type ThemeName, type Mode } from "./theme";
import { Themes } from "./theme";
import { useState, useEffect } from "react";

function isMode(value: unknown){
  if (value === "light" || value ==="dark"){
    return true
  }
  return false
}

function isThemeName(value: unknown){
  if (typeof value === "string" && value in Themes){
    return true
  }
  return false
}

export default function useTheme() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("PROJECTNAME-MODE");
    if (isMode(savedMode)){ return savedMode as Mode}
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  });

  const [colorScheme, setColorScheme] = useState<ThemeName>(() => {
    const savedColorScheme = localStorage.getItem("PROJECTNAME-COLORSCHEME");
    if (isThemeName(savedColorScheme)){return savedColorScheme as ThemeName}
    return "Crimson";
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
