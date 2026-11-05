import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-black/[.06] bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 sm:flex-row">
        <p className="font-caveat text-2xl text-foreground">{siteConfig.name}</p>
        <p className="text-sm text-muted">{t("rights")}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm text-foreground transition-colors hover:text-primary"
        >
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
