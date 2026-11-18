import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

type Props = LayoutProps<"/[locale]">;

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${montserrat.variable} ${bodoni.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
