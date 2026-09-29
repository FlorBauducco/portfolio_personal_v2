# i18n — pendiente

Referencia para la fase de react-i18next (español por defecto, inglés secundario).

## Textos escritos directamente en componentes

Estos textos no están en `src/data/` y se moverán directamente a los JSON de traducción.

| Archivo | Textos |
|---|---|
| `src/views/hero/Hero.tsx` | "Hi, I'm", "Florencia Bauducco", frase "Junior **Fullstack Developer** passionate about technology…" (tiene un `<span>` en medio → usar `<Trans>`), "View Projects", "Contact Me", "Madrid, Spain", `alt` del avatar, `aria-label` "Scroll to about section" |
| `src/views/about/About.tsx` | Cabecera (eyebrow / title / description), "Based in", "Madrid, Spain", coordenadas, `alt` "Madrid map" |
| `src/views/skills/Skills.tsx` | Cabecera (eyebrow / title / description) |
| `src/views/projects/Projects.tsx` | Cabecera, "View details", `aria-label` "Open details for …", `alt` "… preview" |
| `src/views/projects/ProjectModal.tsx` | "N Technologies" (plural), "Technologies", "Challenges", "Solutions", "Learnings", "View Project", "View Code" |
| `src/views/experience/Experience.tsx` | Cabecera (eyebrow / title / description) |
| `src/views/education/Education.tsx` | Cabecera; `item.type` ("Degree", "Course"…) se pinta como texto |
| `src/views/contact/Contact.tsx` | "Open to Work", "Ready to Build and Learn", párrafo de presentación, "Download CV", footer "Designed & built by…", array `socials` (label "Email") |
| `src/components/custom/CustomAnimatedButton.tsx` | "Open to Work" |
| `index.html` | `lang="en"` y `<title>` (hacer `lang` dinámico según idioma) |

Nota: todo el contenido actual está en inglés; hay que escribir la versión en español.

## Tareas pendientes

- Hacer accesible el modal de proyectos (`ProjectModal.tsx`): gestión del foco, cerrar con Escape, `role="dialog"` / `aria-modal`, `aria-label` en el botón de cerrar. Se puede usar `Dialog` de `radix-ui` (el paquete sigue instalado aunque ahora no se usa).
- Añadir `aria-label` al botón del menú móvil (`Navigation.tsx`).
