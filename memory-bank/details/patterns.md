# Patterns & Decisions

<!-- MACHINE_BLOCK_START -->
## Decisiones técnicas

| Fecha | Decisión | Razón |
|-------|----------|-------|
| 2026-11-05 | Alias `@/*` → `./src/*` en `tsconfig.json` | Coherencia con la convención `src/` y `AGENTS.md` |
| 2026-11-05 | Root layout anidado en `app/[locale]/layout.tsx` | Patrón oficial de Next 16 + next-intl con segmento de locale |
| 2026-11-05 | `proxy.ts` para el middleware de next-intl | Next 16 renombró Middleware a Proxy |
| 2026-11-05 | `cacheComponents` y `partialPrefetching` a nivel superior en `next.config.ts` | En Next 16 están deprecados dentro de `experimental` y fallan el typecheck |
| 2026-11-05 | `createNextIntlPlugin("./src/i18n/request.ts")` | El plugin de next-intl exige ruta con extensión/localización válida |
| 2026-11-05 | `localePrefix: "as-needed"` con `defaultLocale: "es"` | `/` sirve ES sin prefijo; EN bajo `/en` |
| 2026-11-05 | `setRequestLocale` + `generateStaticParams` | Necesario para prerender estático con next-intl y Cache Components |
| 2026-11-05 | `ThemeProvider` de next-themes con `attribute="class"` | Activa la variante `dark:` de Tailwind v4 vía `.dark` |
| 2026-11-05 | `turbopack.root: process.cwd()` | Silencia el warning por `package-lock.json` fuera del repo |
| 2026-11-05 | Datos del prototipo en JSON (`src/content/`) | El MVP no usa base de datos |

## Convenciones de código

- **Nombre/datos globales**: siempre desde `src/config/site.ts`; nunca hardcodear el nombre de la pastelería.
- **Server Components por defecto**; `"use client"` solo cuando se necesite estado, efectos o eventos del navegador (p. ej. `theme-toggle`, `language-switcher`).
- **i18n**: todo texto visible pasa por `next-intl` (`getTranslations` en servidor, `useTranslations` en cliente). Nada hardcodeado en ES/EN.
- **Colores**: variables CSS en `app/globals.css` (`--background`, `--foreground`, `--primary`, `--primary-soft`, `--muted`) expuestas a Tailwind con `@theme inline`.
- **Tipografía**: Montserrat (`--font-montserrat`) para cuerpo, Caveat (`--font-caveat`) para logo/títulos.
- **Estructura**: `app/[locale]/` (rutas), `src/components/ui/` (UI), `src/config/` (configuración), `src/i18n/` (i18n), `messages/` (traducciones), `src/content/` (datos JSON, Fase 3).
- **Maquetas**: HTML estático aislado en `mockups/`; no forma parte del build de Next.js.

## Paleta de marca

| Token | Valor | Uso |
|-------|-------|-----|
| Rosa Suave | `#F4B6C2` | Fondos suaves, acentos |
| Rosa Intenso | `#F73E85` | CTAs, títulos destacados |
| Gris Claro | `#D1D3D4` | Textos secundarios, bordes |
| Chocolate | `#4A2B23` | Texto principal, footer |

## Rutas y estado actual

- `app/[locale]/layout.tsx` → root layout (fuentes, `ThemeProvider`, `NextIntlClientProvider`, Header/Footer).
- `app/[locale]/page.tsx` → Home base (Hero).
- `src/i18n/{routing,request,navigation}.ts` → configuración de next-intl.
- `messages/{es,en}.json` → catálogos de traducción.
- `mockups/home-mockup.html` → maqueta visual aprobada para validación (no conectada a la app).
- **Rutas aún no implementadas**: `/catalogo` y `/contacto` (enlaces del Header/CTA darán 404 hasta Fases 3 y 4).
<!-- MACHINE_BLOCK_END -->

<!-- USER_BLOCK_START -->
## Convenciones adicionales
_(espacio libre para editar)_
<!-- USER_BLOCK_END -->
