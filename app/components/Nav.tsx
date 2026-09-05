"use client";

import { FileText, Info, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useThemeStore } from "../contexts/ThemeContext";
import { Squiggly } from "./svgs/Squiggly";

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
    <nav className="max-w-4xl m-auto">
      <ul className="flex items-center px-5 h-16 dark:text-gold">
        <li className="list-none mr-5">
          <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
            Ovan Zaimul
            <Squiggly />
          </Link>
        </li>

        <li className="list-none mr-5">
          <Link
            className={`flex gap-1 ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            <Info />
            About
          </Link>
        </li>

        <li className="list-none mr-5">
          <Link
            className={`flex gap-1 ${pathname === "/blog" ? "active" : ""}`}
            href="/blog"
          >
            <FileText />
            Blog
          </Link>
        </li>

        <li className="ml-auto">
          <button className="cursor-pointer" onClick={handleUpdateTheme}>
            {currentTheme == "dark" ? <Sun /> : <Moon />}
          </button>
        </li>
      </ul>
      <Squiggly />
    </nav>
  );
}
