import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";

const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

export default async function Footer() {
  const t = await getTranslations("footer");
  const brand = await getTranslations("brand");

  return (
    <footer className="border-t border-line/50 bg-background">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line/25">

          {/* Marca */}
          <div className="lg:pr-10">
            <p className="font-serif text-3xl tracking-wide text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-[7px] uppercase tracking-[0.42em] text-primary">
              {brand("tagline")}
            </p>
            <p className="mt-5 max-w-xs text-xs font-light leading-relaxed text-foreground/60">
              {t("description")}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center border border-line/50 text-primary/80 transition hover:border-line hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center border border-line/50 text-primary/80 transition hover:border-line hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.3 4.8 4.9-1.3A9.9 9.9 0 1 0 12.04 2Zm5.8 14.1c-.2.7-1.2 1.3-1.7 1.4-.5.1-1 .2-3.1-.7-2.4-1-3.9-3.5-4-3.7-.1-.2-1-1.3-1-2.5s.6-1.8.8-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2 .9c.3.1.5.2.5.3.1.2.1.8-.1 1.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explorar */}
          <div className="lg:px-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-primary">
              {t("exploreTitle")}
            </p>
            <ul className="mt-5 space-y-3 text-xs font-light text-foreground/60">
              <li>
                <Link href="/" className="transition hover:text-foreground">
                  {t("exploreHome")}
                </Link>
              </li>
              <li>
                <a href="#filosofia" className="transition hover:text-foreground">
                  {t("explorePhilosophy")}
                </a>
              </li>
              <li>
                <a href="#instagram" className="transition hover:text-foreground">
                  {t("exploreInstagram")}
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition hover:text-foreground">
                  {t("exploreContact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Síguenos */}
          <div className="lg:px-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-primary">
              {t("socialTitle")}
            </p>
            <ul className="mt-5 space-y-3 text-xs font-light text-foreground/60">
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-foreground"
                >
                  {t("socialInstagram")}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-foreground"
                >
                  {t("socialWhatsapp")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:pl-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-primary">
              {t("contactTitle")}
            </p>
            <ul className="mt-5 space-y-3 text-xs font-light text-foreground/60">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-foreground"
                >
                  {t("socialWhatsapp")}
                </a>
              </li>
              <li>{t("address")}</li>
              <li className="pt-2 text-[9px] uppercase tracking-[0.2em] text-foreground/60">
                {t("hours")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line/25 pt-6 text-[8px] uppercase tracking-[0.28em] text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {siteConfig.name} · {t("rights")} ·{" "}
            <Link
              href="/legal"
              className="underline decoration-line/40 underline-offset-4 transition hover:text-primary hover:decoration-primary"
            >
              {t("legal")}
            </Link>
          </p>
          <p className="normal-case tracking-normal">{brand("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
