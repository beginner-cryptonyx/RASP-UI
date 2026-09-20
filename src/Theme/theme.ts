type Colors = {
  background1: string;
  background2: string;
  background3: string;
  background4: string;
  accent: string;
  accentHover: string;
  accentText: string;
  borderDefault: string;
  textPrimary: string;
  textSecondary: string;
  color1: string;
  color2: string;
  color3: string;
};

export type ThemeName =
  | "Crimson"
  | "Ocean"
  | "Earth"
  | "Amethyst"
  | "Sunset"
  | "Coffee";

export type Mode = "light" | "dark";

const Themes = ["Crimson", "Ocean", "Earth", "Amethyst", "Sunset", "Coffee"];
export {Themes}