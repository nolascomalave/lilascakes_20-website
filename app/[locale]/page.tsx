/* eslint-disable @next/next/no-img-element -- Placeholder images are external for this design pass */
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config/site";

type Props = PageProps<"/[locale]">;

type ProductKey = "noir" | "rouge" | "or";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1920&q=80";

const PRODUCTS: { key: ProductKey; image: string; offset: string }[] = [
  {
    key: "noir",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
    offset: "",
  },
  {
    key: "rouge",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
    offset: "lg:mt-20",
  },
  {
    key: "or",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80",
    offset: "lg:mt-10",
  },
];

const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-14 bg-line/60" />
      <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
      <span className="h-px w-14 bg-line/60" />
    </div>
  );
}

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

  const tHome = await getTranslations({ locale, namespace: "home" });
  const tCollection = await getTranslations({ locale, namespace: "collection" });
  const tPhilosophy = await getTranslations({ locale, namespace: "philosophy" });
  const tInstagram = await getTranslations({ locale, namespace: "instagram" });

  return (
    <main id="top" className="flex-1">

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1500px] flex-col items-center justify-center px-6 py-20">
          {/* Rayos Art Deco */}
          <svg
            viewBox="0 0 240 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="mb-8 h-10 w-56 text-primary/60"
            aria-hidden="true"
          >
            <path
              d="M120 46V2M120 46 78 6M120 46l42-40M120 46 40 18M120 46l80-28M120 46 16 36M120 46l104-10"
              strokeLinecap="round"
            />
            <circle cx="120" cy="46" r="3" fill="currentColor" stroke="none" />
          </svg>

          {/* Marco dorado doble con panel glass */}
          <div className="relative w-full max-w-4xl border border-line/70 p-2 sm:p-3">
            <span className="absolute -left-1 -top-1 h-2 w-2 rotate-45 bg-primary" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rotate-45 bg-primary" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 bg-primary" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 bg-primary" />

            <div className="border border-line/30 bg-background/60 px-6 py-12 text-center backdrop-blur-md sm:px-16 sm:py-16">
              <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-primary">
                {tHome("eyebrow")}
              </p>

              <h1 className="mt-7 font-serif text-5xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6rem]">
                {tHome("titleLine")}
                <br />
                <em className="italic text-primary">{tHome("titleAccent")}</em>
              </h1>

              <div className="mx-auto mt-8 flex items-center justify-center gap-3" aria-hidden="true">
                <span className="h-px w-16 bg-line/60" />
                <span className="h-1.5 w-1.5 rotate-45 bg-primary-soft" />
                <span className="h-px w-16 bg-line/60" />
              </div>

              <p className="mx-auto mt-8 max-w-lg text-[13px] font-light leading-relaxed text-foreground/60">
                {tHome("description")}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#coleccion"
                  className="border border-primary bg-primary px-7 py-3.5 text-[9px] font-medium uppercase tracking-[0.32em] text-background transition hover:bg-transparent hover:text-primary"
                >
                  {tHome("primaryCta")}
                </a>
                <a
                  href="#filosofia"
                  className="border border-line/60 px-7 py-3.5 text-[9px] font-medium uppercase tracking-[0.32em] text-foreground transition hover:border-line hover:text-primary"
                >
                  {tHome("secondaryCta")}
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-[8px] uppercase tracking-[0.45em] text-foreground/40">
            {tHome("scrollHint")}
          </p>
        </div>
      </section>

      {/* ===================== COLECCIÓN ===================== */}
      <section
        id="coleccion"
        className="border-t border-line/25 px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-primary">
              {tCollection("eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight text-foreground sm:text-6xl">
              {tCollection("title")}
            </h2>
            <div className="mt-7">
              <Ornament />
            </div>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <article key={product.key} className={`group ${product.offset}`}>
                <div className="border border-line bg-background p-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={tCollection(`items.${product.key}.name`)}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute left-0 top-0 bg-background/90 px-3 py-2 text-[8px] uppercase tracking-[0.34em] text-primary">
                      {tCollection("itemNumber")} 0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-line/25 pb-3">
                  <h3 className="font-serif text-2xl tracking-tight text-foreground">
                    {tCollection(`items.${product.key}.name`)}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-primary">
                    {tCollection(`items.${product.key}.price`)}
                  </p>
                </div>
                <p className="mt-3 text-[12px] font-light leading-relaxed text-foreground/50">
                  {tCollection(`items.${product.key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FILOSOFÍA ===================== */}
      <section
        id="filosofia"
        className="relative overflow-hidden border-y border-line/25 bg-surface"
      >
        {/* Patrón geométrico Art Deco */}
        <svg
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <g stroke="currentColor" strokeWidth="1" opacity="0.08" className="text-primary">
            <path d="M600 600 0 0" />
            <path d="M600 600 150 0" />
            <path d="M600 600 300 0" />
            <path d="M600 600 450 0" />
            <path d="M600 600V0" />
            <path d="M600 600 750 0" />
            <path d="M600 600 900 0" />
            <path d="M600 600 1050 0" />
            <path d="M600 600 1200 0" />
            <circle cx="600" cy="600" r="240" />
            <circle cx="600" cy="600" r="400" />
            <circle cx="600" cy="600" r="560" />
          </g>
        </svg>

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <Ornament />

          <p className="mt-7 text-[9px] font-medium uppercase tracking-[0.45em] text-primary">
            {tPhilosophy("eyebrow")}
          </p>

          <blockquote className="mx-auto mt-7 max-w-2xl font-serif text-4xl italic leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {tPhilosophy("quote")}
          </blockquote>

          <p className="mx-auto mt-9 max-w-xl text-[13px] font-light leading-relaxed text-foreground/60">
            {tPhilosophy("body")}
          </p>

          <div className="mt-10">
            <Ornament />
          </div>

          <p className="mt-7 font-serif text-lg italic text-primary">
            {tPhilosophy("signature")}
          </p>
        </div>
      </section>

      {/* ===================== INSTAGRAM ===================== */}
      <section id="instagram" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-primary">
                {tInstagram("eyebrow")}
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-none tracking-tight text-foreground sm:text-6xl">
                {tInstagram("titleStart")}{" "}
                <em className="italic">{tInstagram("titleAccent")}</em>
              </h2>
              <p className="mt-4 text-[13px] font-light text-foreground/50">
                {tInstagram("subtitle")}
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.32em] text-foreground/50 transition hover:text-primary-soft"
            >
              {tInstagram("follow")}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-3 w-3"
              >
                <path
                  d="M4 12h15M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Carrusel horizontal */}
          <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {INSTAGRAM_IMAGES.map((image) => (
              <a
                key={image}
                href="#"
                className="group relative w-64 shrink-0 snap-start overflow-hidden border border-line/30 sm:w-72"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover brightness-75 grayscale transition duration-500 group-hover:brightness-100 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition duration-500 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-4 text-[8px] uppercase tracking-[0.4em] text-foreground/40">
            {tInstagram("scrollHint")}
          </p>
        </div>
      </section>
    </main>
  );
}
