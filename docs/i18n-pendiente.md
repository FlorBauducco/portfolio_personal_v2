# i18n — pendiente

Referencia para la fase de react-i18next (español por defecto, inglés secundario).

## Estado

Toda la web está traducida. Los textos viven en `src/i18n/locales/es.json` y `en.json`, agrupados por sección:

| Clave | Contenido |
|---|---|
| `meta` | `<title>` (se actualiza en `src/i18n/index.ts` al cambiar de idioma) |
| `language` | `aria-label` del botón ES/EN |
| `common` | "Disponible para trabajar", ubicación, "Actualidad" (`formatPeriod`) |
| `nav` | Enlaces del menú y `aria-label` del botón de menú |
| `hero`, `about`, `skills`, `projects`, `experience`, `education`, `contact` | Textos de cada sección; los textos de `src/data/` van en `<seccion>.items.<id>` / `cards.<id>` / `categories.<id>` |

En `src/data/` solo quedan datos que no se traducen: ids, iconos, URLs, años, tecnologías, nombres propios (empresas, título de proyecto).

Sin traducir a propósito: "Florencia Bauducco", coordenadas del mapa (About), etiquetas `ES / EN`.

### Cómo añadir contenido nuevo

1. Añadir el elemento al archivo de `src/data/` con su `id` (kebab-case) y los datos no traducibles.
2. Añadir sus textos en `es.json` y `en.json` bajo la misma clave (`projects.items.<id>.summary`, …).
3. Seguir la regla de traducción de CLAUDE.md.

## Tareas pendientes

- **Altivia Tattoo**: añadirlo a `project.data.ts` (`category: "professional"`) con sus textos en los dos idiomas.
- **Proyectos — separación visual** profesional / formación cuando haya proyectos de las dos categorías. Necesitará claves nuevas para los subtítulos (p. ej. `projects.categories.professional` / `training`).
- **Proyectos — "No disponible online"** (en: "Not available online") cuando un proyecto no tenga `liveUrl`. Decidir también el diseño de la fila de botones del modal (ahora "View Code" ocupa todo el ancho si está solo).
- **Modal accesible** (`ProjectModal.tsx`): foco, cerrar con Escape, `role="dialog"` / `aria-modal`, `aria-label` traducido en el botón de cerrar. Se puede usar `Dialog` de `radix-ui` (instalado, sin usar).
- **Diseño final del botón ES/EN** (`CustomLanguageSwitcher.tsx`).
- **CV**: hay un solo PDF (`public/files/cv-fbm.pdf`) para los dos idiomas. Valorar un CV por idioma.
- **CLAUDE.md**: la sección "Content vs. presentation" aún dice que los textos viven en `src/data/`; actualizarla para indicar que están en `src/i18n/locales/`. También menciona "Radix UI Themes", que ya no se usa.
- **Opcional**: tipar las claves de traducción en TypeScript para que un error en una clave falle en `pnpm build`.
