"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const t = useTranslations("theme");
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center border border-line/50 text-foreground/60 transition hover:border-line hover:text-primary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t("toggle")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
