"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = ["es", "en"] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-solid border-black/[.08] p-1 dark:border-white/[.145]">
      {LOCALES.map((nextLocale) => (
        <button
          key={nextLocale}
          type="button"
          className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
            locale === nextLocale
              ? "bg-primary text-white"
              : "text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.08]"
          }`}
          onClick={() => switchTo(nextLocale)}
        >
          {nextLocale === "es" ? "ES" : "EN"}
        </button>
      ))}
    </div>
  );
}
