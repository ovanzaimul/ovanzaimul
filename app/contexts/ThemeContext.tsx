"use client";

import { createContext, ReactNode, useContext } from "react";

export type Theme = "light" | "dark" | null;

interface ThemeType {
  // theme: Theme;
  updateTheme: (theme: Theme) => void;
}

const Context = createContext<ThemeType>({
  // theme: "dark",
  updateTheme: () => {},
});

export default function ThemeContext({ children }: { children: ReactNode }) {
  function updateTheme(theme: Theme) {
    localStorage.setItem("theme", theme!);
    document.documentElement.classList.toggle("dark", theme == "dark");
  }

  return <Context value={{ updateTheme }}>{children}</Context>;
}

export function useThemeStore() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useThemeStore must be used withing ThemeContext");
  }
  return context;
}
