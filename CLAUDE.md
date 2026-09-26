# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (see `pnpm-lock.yaml`).

- `pnpm dev` — start Vite dev server
- `pnpm build` — type-check (`tsc -b`) then build with Vite
- `pnpm lint` — run ESLint over the repo
- `pnpm preview` — preview the production build

There is no test setup in this project.

## Architecture

Single-page personal portfolio built with **React 19 + TypeScript + Vite**, styled with **Tailwind CSS v4** (via `@tailwindcss/vite`) and Radix UI Themes, animated with **framer-motion**. The React Compiler is enabled through `@rolldown/plugin-babel` + `babel-plugin-react-compiler` in `vite.config.ts` — avoid manual memoization (`useMemo`/`useCallback`/`React.memo`) unless there's a concrete reason; the compiler handles it.

Top-level layout is one page composed in `src/PortfolioApp.tsx`, which stacks section views inside a shared background:

- `components/custom/CustomDynamicBackground.tsx` provides a full-page animated background; individual sections sit on top of it via `z-10`.
- Each section lives under `src/views/<section>/` (hero, about, skills, projects, experience, education, contact, nav) and is rendered once in order.

### Content vs. presentation

Section content is data-driven. Copy, links, and structured lists live in `src/data/*.data.ts` (e.g. `experience.data.ts`, `project.data.ts`, `navigation.data.ts`). Views import from `src/data` and render — when adding/editing portfolio content, update the data file, not the view.

### Shared building blocks

Reusable primitives live in `src/components/custom/`:

- `CustomSection` — standard section wrapper (padding, id anchor for nav scrolling).
- `CustomReveal` — scroll-triggered reveal animation used across sections.
- `CustomAnimatedButton` — shared button styling/motion.
- `CustomDynamicBackground` — the app-wide background layer.

Hooks in `src/hooks/`:

- `useScroll` — scroll state for the sticky nav.
- `useDynamicBackground` — drives the background component.

`src/utils/utils.ts` exports `cn(...)` (clsx + tailwind-merge) and `scrollToSection(id)`, used by the nav to jump between section anchors.

### Conventions

- Component files use PascalCase; the `Custom*` prefix marks shared/reusable pieces vs. section-scoped views.
- Section anchors: each view renders under an id that matches entries in `navigation.data.ts` — keep these in sync when renaming sections.
- Styling: Tailwind utility classes; combine with `cn()` when composing conditional class strings.

## Cómo trabajar conmigo

- Responde siempre en español.
- Soy desarrolladora junior (DAM) y estoy aprendiendo.
- Antes de cambiar código, explícame el plan en pasos simples
  y espera mi confirmación.
- Explica cada cambio: qué archivo tocas y por qué.
- Haz cambios pequeños, de una tarea cada vez.
- No instales dependencias nuevas sin preguntarme.
- Trabaja siempre en una rama, nunca directamente en main.
- Al terminar cada cambio, ejecuta `pnpm lint` y `pnpm build`
  para comprobar que no hay errores.

## Objetivo del proyecto

Portfolio para conseguir mi primer empleo como desarrolladora.

- Prioridad: proyectos > experiencia.
- Altivia Tattoo (https://altiviatattoo.es/) es el proyecto profesional destacado.
- Separar proyectos profesionales de proyectos de formación.
- Experiencia: solo puesto, empresa y fechas; nada de listas de tareas.
