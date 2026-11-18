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
    <div className="inline-flex items-center border border-line/50">
      {LOCALES.map((nextLocale) => (
        <button
          key={nextLocale}
          type="button"
          className={`px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] transition ${
            locale === nextLocale
              ? "bg-primary text-background"
              : "text-foreground/60 hover:text-primary"
          }`}
          onClick={() => switchTo(nextLocale)}
        >
          {nextLocale === "es" ? "ES" : "EN"}
        </button>
      ))}
    </div>
  );
}
