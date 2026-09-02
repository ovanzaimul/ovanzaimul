"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useThemeStore } from "../contexts/ThemeContext";

interface NavProps {
  currentTheme: "light" | "dark" | undefined;
}

export default function Nav({ currentTheme }: NavProps) {
  const pathname = usePathname();

  const { updateTheme } = useThemeStore();

  const handleUpdateTheme = () => {
    document.documentElement.classList.toggle("dark", currentTheme == "dark");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    updateTheme(nextTheme);
  };

  return (
    <nav>
      <ul className="flex items-center px-5 h-16 border-b-2 border-b-cyan-900 dark:text-gold">
        <li className="list-none mr-5">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>

        <li className="list-none mr-5">
          <Link className={pathname === "/blog" ? "active" : ""} href="/blog">
            Blogs
          </Link>
        </li>

        <li className="ml-auto">
          <button className="cursor-pointer" onClick={handleUpdateTheme}>
            {currentTheme == "dark" ? <Sun /> : <Moon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
