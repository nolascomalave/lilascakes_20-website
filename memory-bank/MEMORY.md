# Project Memory

<!-- MACHINE_BLOCK_START -->
<!-- MEMORY_BANK_TEMPLATE:v7.1 -->

## Project Snapshot
- **Conclusión**: Sitio web de pastelería artesanal "Lila's Cakes" (MVP: Home informativa, catálogo con categorías dinámicas, formulario de contacto, i18n ES/EN y modo claro/oscuro).
- **Límites**: Este archivo solo conserva lo que sigue afectando la implementación; el detalle vive en `memory-bank/details/`.
- **Punteros**: `app/[locale]/`; `src/config/site.ts`; `src/i18n/`; `messages/`; stack en `memory-bank/details/tech.md`.

## Current Focus
> Actualizado: 2026-11-06

- **Foco actual**: Fase 1 completada y commiteada en la rama `feat/fase-1-configuracion` (commit `b740841`). La maqueta visual `mockups/home-mockup.html` está lista para validar con el cliente; la app Next.js todavía no se ha rediseñado con ella.
- **Siguiente**:
  - [ ] Validar la maqueta con el cliente y ajustar el diseño
  - [ ] Iniciar Fase 2: implementar la Home real (Hero, destacados, sobre nosotros)
- **Bloqueos**: ninguno.

## Decision Highlights (Still Binding)

> Solo decisiones que siguen afectando la implementación. Historial completo en `memory-bank/details/patterns.md`.

| Decisión | Fecha | Restricción directa |
|----------|-------|---------------------|
| Alias `@/*` → `./src/*` | 2026-11-05 | Importar siempre `@/config/site`, `@/i18n/...`, `@/components/...` |
| Root layout anidado en `app/[locale]/layout.tsx` | 2026-11-05 | No existe `app/layout.tsx`; no recrearlo |
| Next 16: `proxy.ts` en vez de `middleware.ts` | 2026-11-05 | El middleware de i18n vive en `proxy.ts` |
| `cacheComponents` y `partialPrefetching` a nivel superior | 2026-11-05 | No volver a ponerlos en `experimental`; exigir `generateStaticParams` en segmentos con root params |
| next-intl: `es` por defecto, `localePrefix: "as-needed"` | 2026-11-05 | `/` es ES y `/en` es EN; plugin next-intl en `./src/i18n/request.ts` |
| Nombre y datos globales solo en `src/config/site.ts` | 2026-11-05 | Nunca hardcodear "Lila's Cakes" en componentes |
| Sin base de datos en el prototipo | 2026-11-05 | Datos desde JSON en `src/content/` (se crean en Fase 3) |
| Colores de marca como variables CSS | 2026-11-05 | Paleta en `app/globals.css` (claro/oscuro), no hex sueltos en componentes |
| Server Components por defecto | 2026-11-05 | Usar `"use client"` solo para estado/efectos/eventos del navegador |

## Routing Rules (意图驱动)

Elige 1-3 archivos según lo que quieras hacer.

### Intenciones generales

| Intención | Archivo destino |
|-----------|-----------------|
| Conocer stack, comandos y entorno | `memory-bank/details/tech.md` |
| Revisar decisiones y convenciones | `memory-bank/details/patterns.md` |
| Ver progreso y pendientes | `memory-bank/details/progress.md` |
| Consultar requisitos del MVP | `docs/PROJECT.md` |
| Consultar backlog por fases | `docs/TASKS.md` |
| Dudar del nombre de un archivo | `glob("memory-bank/details/**/*.md")` |

### Intenciones específicas del proyecto

| Intención | Archivo destino |
|-----------|-----------------|
| Implementar la Home (Fase 2) | `mockups/home-mockup.html` + `docs/TASKS.md` + `app/[locale]/page.tsx` |
| Catálogo/datos (Fase 3) | `docs/PROJECT.md` + `docs/TASKS.md` + `src/content/` (a crear) |
| i18n / traducciones | `src/i18n/routing.ts`, `src/i18n/request.ts`, `messages/es.json`, `messages/en.json` |
| Tema claro/oscuro o estilos | `app/globals.css`, `src/components/ui/theme-toggle.tsx` |
| Reglas del repo / agentes | `AGENTS.md`, `opencode.json` |
| Maquetas visuales | `mockups/` |

## Drill-Down Protocol

1. **Primero responde con MEMORY.md**; solo baja al detalle si se necesita evidencia.
2. **Lectura directa por defecto de 1-3 archivos** de `details/` (parar cuando haya suficiente).
3. **Escalar a `memory-reader`** solo si: se piden evidencias, hay riesgo de conflicto, hay más de 3 archivos o más de ~300 líneas.
4. **Anti-alucinación**: lo no leído o no escrito = desconocido; no completar por suposición.
5. **Citar siempre 1-2 rutas de archivo** en la respuesta.

## Write Safety Rules

- El agente principal puede escribir `memory-bank/`, solo archivos `.md`.
- Antes de escribir: Proposal → confirmación del usuario.
- Prohibido guardar API keys, tokens, contraseñas, claves privadas o datos personales de clientes.

## Top Quick Answers

> Máximo 8; verificables; con puntero a archivo. Eliminar cuando caduquen.

1. **Q**: ¿Cómo verifico tipos? **A**: `npx tsc --noEmit` → `memory-bank/details/tech.md`
2. **Q**: ¿Dónde se cambia el nombre de la pastelería? **A**: en `src/config/site.ts` → `memory-bank/details/patterns.md`
3. **Q**: ¿Dónde se añaden idiomas/textos? **A**: `src/i18n/routing.ts` y `messages/es.json` + `messages/en.json` → `memory-bank/details/tech.md`
4. **Q**: ¿Dónde están los colores de marca? **A**: variables CSS en `app/globals.css` → `memory-bank/details/patterns.md`
5. **Q**: ¿Por qué no hay `app/layout.tsx`? **A**: el root layout está en `app/[locale]/layout.tsx` (Next 16 lo permite) → `memory-bank/details/patterns.md`
6. **Q**: ¿Dónde está el middleware? **A**: en `proxy.ts` (Next 16 renombró middleware a proxy) → `memory-bank/details/patterns.md`
7. **Q**: ¿Hay tests? **A**: no; no hay runner configurado (solo lint, typecheck y build) → `memory-bank/details/tech.md`
8. **Q**: ¿Cuál es el estado del proyecto? **A**: Fase 1 completa; maqueta lista; Fase 2 pendiente → `memory-bank/details/progress.md`

<!-- MACHINE_BLOCK_END -->

<!-- USER_BLOCK_START -->
## Notas del usuario
_(espacio libre para editar)_
<!-- USER_BLOCK_END -->
