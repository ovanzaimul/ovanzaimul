"use server";

import { cookies } from "next/headers";
import { Theme } from "./contexts/ThemeContext";

export async function setThemeCookie(theme: Theme) {
  const cookie = await cookies();
  cookie.set("theme", theme, {
    maxAge: 60 * 60 * 24 * 30,
  });
}
