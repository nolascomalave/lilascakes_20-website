import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/catalogo", key: "catalog" },
  { href: "/contacto", key: "contact" },
] as const;

export default async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.06] bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-caveat text-3xl text-foreground">
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
