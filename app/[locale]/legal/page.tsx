import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "en" ? "/en/legal" : "/legal",
      languages: {
        es: "/legal",
        en: "/en/legal",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "legal" });
  const sections = t.raw("sections") as LegalSection[];

  return (
    <main id="top" className="flex-1">
      <section className="border-b border-line/25 px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-primary">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-foreground sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-foreground/60">
            {t("updated")}
          </p>

          <aside
            role="note"
            className="mt-8 border border-line/50 bg-surface/30 p-5 text-[13px] font-light leading-relaxed text-foreground/70"
          >
            {t("draftNotice")}
          </aside>

          <p className="mt-8 text-sm font-light leading-relaxed text-foreground/70">
            {t("intro")}
          </p>

          <nav
            aria-label={t("tocTitle")}
            className="mt-10 border-y border-line/25 py-5"
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-primary">
              {t("tocTitle")}
            </p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[12px] font-light text-foreground/70 underline-offset-4 transition hover:text-primary hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4">
                {section.blocks.map((block, index) =>
                  block.type === "p" ? (
                    <p
                      key={index}
                      className="text-sm font-light leading-relaxed text-foreground/70"
                    >
                      {block.text}
                    </p>
                  ) : (
                    <ul
                      key={index}
                      className="list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-foreground/70"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </article>
          ))}

          <div className="border-t border-line/25 pt-8">
            <Link
              href="/"
              className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/60 transition hover:text-primary"
            >
              {t("backHome")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
