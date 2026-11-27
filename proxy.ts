import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

const handleI18nRouting = createMiddleware(routing);
const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * El sitio es principalmente español. Si el idioma preferido del dispositivo
 * no es español, se muestra en inglés. La elección manual del usuario
 * (cookie NEXT_LOCALE) siempre tiene prioridad.
 */
function prefersSpanish(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return true;
  }

  const primary = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  return primary === "*" || primary.startsWith("es");
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasEnglishPrefix = pathname === "/en" || pathname.startsWith("/en/");
  const hasLocaleCookie = request.cookies.has(LOCALE_COOKIE);

  if (!hasLocaleCookie && !hasEnglishPrefix && !prefersSpanish(request)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return NextResponse.redirect(url);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
