import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";

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
            <p className="mt-5 max-w-xs text-xs font-light leading-relaxed text-foreground/50">
              {t("description")}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
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
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center border border-line/50 text-primary/80 transition hover:border-line hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M14 8.5V7c0-.6.4-1 1-1h2V3.5h-2.5C12 3.5 10.5 5 10.5 7v1.5H8V11h2.5v9H14v-9h2.6l.4-2.5H14z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colección */}
          <div className="lg:px-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-primary">
              {t("collectionTitle")}
            </p>
            <ul className="mt-5 space-y-3 text-xs font-light text-foreground/50">
              <li>
                <a href="#coleccion" className="transition hover:text-foreground">
                  {t("collection1")}
                </a>
              </li>
              <li>
                <a href="#coleccion" className="transition hover:text-foreground">
                  {t("collection2")}
                </a>
              </li>
              <li>
                <a href="#coleccion" className="transition hover:text-foreground">
                  {t("collection3")}
                </a>
              </li>
              <li>
                <a href="#coleccion" className="transition hover:text-foreground">
                  {t("collection4")}
                </a>
              </li>
            </ul>
          </div>

          {/* Maison */}
          <div className="lg:px-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-primary">
              {t("maisonTitle")}
            </p>
            <ul className="mt-5 space-y-3 text-xs font-light text-foreground/50">
              <li>
                <a href="#filosofia" className="transition hover:text-foreground">
                  {t("maison1")}
                </a>
              </li>
              <li>
                <a href="#filosofia" className="transition hover:text-foreground">
                  {t("maison2")}
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-foreground">
                  {t("maison3")}
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-foreground">
                  {t("maison4")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:pl-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-primary">
              {t("contactTitle")}
            </p>
            <ul className="mt-5 space-y-3 text-xs font-light text-foreground/50">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{t("phone")}</li>
              <li>{t("address")}</li>
              <li className="pt-2 text-[9px] uppercase tracking-[0.2em] text-foreground/40">
                {t("hours")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line/25 pt-6 text-[8px] uppercase tracking-[0.28em] text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {siteConfig.name} · {t("rights")}
          </p>
          <p className="normal-case tracking-normal">{brand("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
