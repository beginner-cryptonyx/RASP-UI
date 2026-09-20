import { type ThemeName, type Mode } from "./theme";
import { Themes } from "./theme";
import { useState, useEffect } from "react";


const MODE_KEY = "PROJECTNAME-MODE";
const SCHEME_KEY = "PROJECTNAME-COLORSCHEME";
const DEFAULT_SCHEME: ThemeName = "Crimson";


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
    const savedMode = localStorage.getItem(MODE_KEY);
    if (isMode(savedMode)){ return savedMode as Mode}
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  });

  const [colorScheme, setColorScheme] = useState<ThemeName>(() => {
    const savedColorScheme = localStorage.getItem(SCHEME_KEY);
    if (isThemeName(savedColorScheme)){return savedColorScheme as ThemeName}
    return DEFAULT_SCHEME;
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark":"light"))
  }

  useEffect(() => {
    document.documentElement.dataset.theme = colorScheme
    document.documentElement.dataset.mode = mode
    localStorage.setItem(MODE_KEY, mode)
    localStorage.setItem(SCHEME_KEY, colorScheme)
  }, [colorScheme, mode]);

  return {setMode, setColorScheme, mode, colorScheme, toggleMode}
}
