import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Link as IntlLink } from "@/i18n/navigation";

type Props = PageProps<"/[locale]">;

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="font-caveat text-6xl text-primary">{t("title")}</h1>
      <p className="max-w-xl text-lg text-foreground">{t("subtitle")}</p>
      <IntlLink
        href="/catalogo"
        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white transition-colors hover:opacity-90"
      >
        {t("cta")}
      </IntlLink>
    </main>
  );
}
