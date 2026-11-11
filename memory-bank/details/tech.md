# Tech Stack

<!-- MACHINE_BLOCK_START -->
## Tecnologías

| Capa | Tecnología |
|------|------------|
| Lenguaje | TypeScript 5 (strict) |
| Framework | Next.js 16.4.5 (App Router, Turbopack) |
| UI | React 19.3.0, Tailwind CSS v4 (`@tailwindcss/turbopack`) |
| i18n | next-intl 4.14.9 (es / en) |
| Temas | next-themes 0.4.6 (atributo `class`) |
| Iconos | lucide-react 1.69 |
| Datos (MVP) | Ninguna BD; JSON en `src/content/` (Fase 3) |
| Deploy | No definido aún |

## Comandos habituales

```bash
# Desarrollo (Turbopack)
npm run dev

# Verificación de tipos (no hay script typecheck)
npx tsc --noEmit

# Lint
npm run lint

# Build de producción
npm run build

# Servidor de producción
npm run start
```

> No existe script `test` ni runner de pruebas configurado (Jest/Playwright no instalados). TDD se aplicará cuando haya lógica de negocio (filtros/catálogo) en fases posteriores.

## Requisitos de entorno
- Node.js v26.5.0 y npm 11.17.0 en la máquina de desarrollo.
- `next dev` y `next build` requieren red la primera vez para `next/font/google` (Montserrat/Caveat).
- `turbopack.root: process.cwd()` en `next.config.ts` silencia el warning por lockfiles externos.

## Notas operativas verificadas
- `next dev` **escribe automáticamente** el bloque `nextjs-agent-feedback` en `AGENTS.md`; no eliminarlo (se regenera y ensucia el diff). Commitearlo junto al trabajo.
- El build con `cacheComponents: true` exige `generateStaticParams` en los segmentos con root params (`app/[locale]`).
- `proxy.ts` es la convención de Next 16 (antes `middleware.ts`).
<!-- MACHINE_BLOCK_END -->

<!-- USER_BLOCK_START -->
## Notas adicionales
_(espacio libre para editar)_
<!-- USER_BLOCK_END -->
