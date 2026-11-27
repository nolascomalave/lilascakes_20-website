import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/ui/contact-form";
import instagramData from "@/content/instagram.json";

type Props = PageProps<"/[locale]">;

const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHome = await getTranslations({ locale, namespace: "home" });
  const tPhilosophy = await getTranslations({ locale, namespace: "philosophy" });
  const tInstagram = await getTranslations({ locale, namespace: "instagram" });
  const tContact = await getTranslations({ locale, namespace: "contact" });
  const tBrand = await getTranslations({ locale, namespace: "brand" });

  return (
    <main id="top" className="flex-1">

      {/* ===================== HERO ===================== */}
      <section className="border-b border-line/25">
        <div className="grid lg:min-h-[calc(100vh-7rem)] lg:grid-cols-2">

          {/* Texto */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-24 xl:px-20">
            <p className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.42em] text-primary">
              <span className="h-px w-8 bg-line/60" aria-hidden="true" />
              {tHome("eyebrow")}
            </p>

            <h1 className="mt-8 font-serif text-[3.4rem] uppercase leading-[0.94] tracking-tight text-foreground sm:text-7xl lg:text-[5.4rem]">
              {tHome("titleLine")}
              <br />
              <em className="italic text-primary">{tHome("titleAccent")}</em>
            </h1>

            <div className="mt-8 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-14 bg-line/60" />
              <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
              <span className="h-px w-14 bg-line/60" />
            </div>

            <p className="mt-8 max-w-md text-[13px] font-light leading-relaxed text-foreground/60 sm:text-sm">
              {tHome("description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Imagen edge-to-edge */}
          <div className="relative min-h-[65vh] overflow-hidden lg:min-h-full">
            <Image
              src={siteConfig.heroImage}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent lg:from-background/60" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ===================== FILOSOFÍA ===================== */}
      <section
        id="filosofia"
        className="border-y border-line/25 bg-surface"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_4fr_1fr] lg:gap-8">

            {/* Etiqueta vertical izquierda */}
            <p className="hidden text-[8px] uppercase tracking-[0.5em] text-foreground/60 lg:block [writing-mode:vertical-rl]">
              {tPhilosophy("eyebrow")}
            </p>

            {/* Cita central */}
            <div className="text-center">
              <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-primary">
                {tPhilosophy("eyebrow")}
              </p>

              <blockquote className="mx-auto mt-7 max-w-2xl font-serif text-4xl italic leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {tPhilosophy("quote")}
              </blockquote>

              <div className="mx-auto mt-10 h-px w-24 bg-line/60" aria-hidden="true" />

              <p className="mx-auto mt-9 max-w-xl text-[13px] font-light leading-relaxed text-foreground/60">
                {tPhilosophy("body")}
              </p>

              <p className="mt-8 font-serif text-lg italic text-primary">
                {tPhilosophy("signature")}
              </p>
            </div>

            {/* Etiqueta vertical derecha */}
            <p className="hidden text-right text-[8px] uppercase tracking-[0.5em] text-foreground/60 lg:block [writing-mode:vertical-rl]">
              {tBrand("tagline")}
            </p>
          </div>
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
              <p className="mt-4 text-[13px] font-light text-foreground/60">
                {tInstagram("subtitle")}
              </p>
            </div>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.32em] text-foreground/60 transition hover:text-primary"
            >
              {tInstagram("follow")}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  d="M4 12h15M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {instagramData.images.filter(post => ((post.show as boolean) ?? true)).map((post) => (
              <a
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={tInstagram("viewPost")}
                className="group relative aspect-square overflow-hidden border border-line/30"
              >
                <Image
                  src={post.src}
                  alt={tInstagram("imageAlt")}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover brightness-75 grayscale transition duration-500 group-hover:brightness-100 group-hover:grayscale-0"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition duration-500 group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACTO ===================== */}
      <section
        id="contacto"
        className="border-t border-line/25 px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Texto y vías directas */}
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-primary">
              {tContact("eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight text-foreground sm:text-6xl">
              {tContact("title")}
            </h2>
            <p className="mt-5 max-w-md text-[13px] font-light leading-relaxed text-foreground/60">
              {tContact("subtitle")}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary bg-primary px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.3em] text-background transition hover:bg-transparent hover:text-primary"
              >
                {tContact("whatsappCta")}
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line/60 px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.3em] text-foreground transition hover:border-line hover:text-primary"
              >
                {tContact("instagramCta")}
              </a>
            </div>

            <div className="mt-9 border-t border-line/25 pt-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-foreground/60 transition hover:text-primary"
              >
                {tContact("emailCta")}
                <span className="normal-case tracking-normal text-foreground/60">
                  · {siteConfig.email}
                </span>
              </a>
              <p className="mt-3 text-[11px] font-light leading-relaxed text-foreground/60">
                {tContact("location")} · {tContact("hours")}
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="border border-line/40 bg-background/40 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
