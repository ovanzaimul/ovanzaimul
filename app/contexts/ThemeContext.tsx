"use client";

import { createContext, ReactNode, useContext } from "react";
import { setThemeCookie } from "../actions";

export type Theme = "light" | "dark";

interface ThemeType {
  // theme: Theme;
  updateTheme: (theme: Theme) => void;
}

const Context = createContext<ThemeType>({
  // theme: "dark",
  updateTheme: () => {},
});

export default function ThemeContext({ children }: { children: ReactNode }) {
  // const [theme, setTheme] = useState<Theme>("dark");

  function updateTheme(theme: Theme) {
    // setTheme(theme);
    setThemeCookie(theme); // no need to save the theme with state, the server action keeps rerendering the root layout
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
