# Progress

<!-- MACHINE_BLOCK_START -->
## Completado

- [x] Fase 1 — Configuración Inicial (2026-11-05)
  - [x] `src/config/site.ts` con nombre y datos básicos
  - [x] Fuentes Montserrat y Caveat en el root layout
  - [x] Paleta de marca como variables CSS (claro/oscuro)
  - [x] Modo claro/oscuro con `next-themes`
  - [x] next-intl configurado (es/en, `as-needed`)
  - [x] `messages/es.json` y `messages/en.json`
  - [x] Header y Footer base (idioma + tema)
  - [x] Home base (Hero con traducciones)
  - [x] Verificación: `npm run dev` (200 en `/` y `/en`), `npm run lint`, `npx tsc --noEmit`, `npm run build`
- [x] Commit de Fase 1 en rama `feat/fase-1-configuracion` (`b740841`)
  - Incluye alias `@/*` → `./src/*` y `turbopack.root`
- [x] Maqueta visual de la Home (`mockups/home-mockup.html`)
  - HTML puro con Tailwind CDN, Google Fonts, paleta de marca
  - Secciones: Header, Hero, Productos Destacados, Instagram, Footer

## En curso

- [ ] Validación de la maqueta con el cliente — pendiente de feedback
- [ ] Commit de `mockups/` (aún sin trackear)

## Pendiente

- [ ] Fase 2: Página de Inicio real (investigar referencias, plan de Home, implementación)
- [ ] Fase 3: Catálogo (JSON de categorías/productos en `src/content/`, página de catálogo, detalle)
- [ ] Fase 4: Contacto (formulario + envío simulado)
- [ ] Futuro fuera del MVP: PostgreSQL/Supabase, pagos, blog

## Problemas conocidos

| ID | Problema | Prioridad |
|----|----------|-----------|
| — | `/catalogo` y `/contacto` no existen todavía (404 esperado) | Baja (se resuelve en Fase 3/4) |
| — | Sin runner de pruebas configurado; solo lint + typecheck + build | Media (definir antes de lógica de negocio) |
| — | La maqueta usa Tailwind CDN v3; la app usa Tailwind v4 (no compartir clases de opacidad no estándar) | Baja |
<!-- MACHINE_BLOCK_END -->

<!-- USER_BLOCK_START -->
## Notas
_(espacio libre para editar)_
<!-- USER_BLOCK_END -->
