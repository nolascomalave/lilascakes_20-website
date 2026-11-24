import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";

const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

export default async function Header() {
  const t = await getTranslations("nav");
  const brand = await getTranslations("brand");

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* Escritorio */}
        <div className="hidden items-center py-5 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <Link href="/" className="justify-self-start">
            <span className="block font-serif text-2xl leading-none tracking-wide text-foreground">
              {siteConfig.name}
            </span>
            <span className="mt-1.5 block text-[7px] uppercase tracking-[0.42em] text-primary">
              {brand("tagline")}
            </span>
          </Link>

          <nav className="flex items-center gap-9 text-[9px] font-medium uppercase tracking-[0.34em] text-foreground/60">
            <Link href="/" className="text-foreground transition hover:text-primary">
              {t("home")}
            </Link>
            <a href="#filosofia" className="transition hover:text-primary">
              {t("philosophy")}
            </a>
            <a href="#instagram" className="transition hover:text-primary">
              {t("instagram")}
            </a>
            <a href="#contacto" className="transition hover:text-primary">
              {t("contact")}
            </a>
          </nav>

          <div className="flex items-center justify-self-end gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary px-5 py-2.5 text-[8px] font-medium uppercase tracking-[0.32em] text-foreground transition hover:bg-primary hover:text-background"
            >
              {t("whatsapp")}
            </a>
          </div>
        </div>

        {/* Móvil */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <span className="block font-serif text-xl leading-none tracking-wide text-foreground">
                {siteConfig.name}
              </span>
              <span className="mt-1 block text-[7px] uppercase tracking-[0.36em] text-primary">
                {brand("tagline")}
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          <nav className="no-scrollbar flex items-center gap-5 overflow-x-auto pb-3 text-[8px] font-medium uppercase tracking-[0.26em] text-foreground/60">
            <Link href="/" className="shrink-0 text-foreground">
              {t("home")}
            </Link>
            <a href="#filosofia" className="shrink-0">
              {t("philosophy")}
            </a>
            <a href="#instagram" className="shrink-0">
              {t("instagram")}
            </a>
            <a href="#contacto" className="shrink-0">
              {t("contact")}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto shrink-0 border border-primary px-3 py-1.5 text-foreground"
            >
              {t("whatsapp")}
            </a>
          </nav>
        </div>
      </div>

      {/* Doble línea dorada de separación */}
      <div aria-hidden="true">
        <div className="h-px w-full bg-line/60" />
        <div className="h-[3px] w-full bg-background" />
        <div className="h-px w-full bg-line/25" />
      </div>
    </header>
  );
}
