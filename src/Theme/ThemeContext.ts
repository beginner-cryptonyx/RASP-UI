import { createContext } from "react";
import type { ThemeName, Mode } from "./theme";

export interface ThemeContextValue {
  mode: Mode;
  colorScheme: ThemeName;
  setMode: (mode:Mode) => void;
  setColorScheme: (theme:ThemeName) => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);