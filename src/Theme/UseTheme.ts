import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function useTheme() {
  const themeSystem = useContext(ThemeContext);
  if (!themeSystem) throw new Error("useTheme must be used inside <ThemeProvider>");
  return themeSystem;
}