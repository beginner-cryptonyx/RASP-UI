// theme/ThemeProvider.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { type Theme } from '../theme';

export type ThemeName = Theme;
export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeName;
  mode: ThemeMode;
  setTheme: (t: ThemeName) => void;
  setMode: (m: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemMode(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(
    () => (localStorage.getItem('theme') as ThemeName) || 'crimson'
  );
  const [mode, setMode] = useState<ThemeMode>(
    () => (localStorage.getItem('mode') as ThemeMode) || getSystemMode()
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}