# my-portfolio

Portafolio/currículum web de Saul Lagos, construido con Astro 5 y Tailwind CSS 4. Sitio estático en español, tema oscuro con acento azul (sky-400).

## Stack

- Astro 5 (output estático)
- Tailwind CSS 4 vía `@tailwindcss/vite` (NO `@astrojs/tailwind`)
- TypeScript (extends `astro/tsconfigs/strict`)
- `@astrojs/sitemap` para sitemap/robots
- Content Collections con Zod para proyectos
- Sin frameworks de UI adicionales; JS vanilla solo donde es imprescindible

## Dependencias principales

- `astro` ^5.15
- `tailwindcss` ^4.1
- `@tailwindcss/vite` ^4.1
- `@fontsource-variable/onest` (fuente)
- `@astrojs/sitemap`
- `@astrojs/check` (typecheck)

## Estructura de carpetas

```
/
├── astro.config.mjs          # integraciones y plugin Tailwind
├── tsconfig.json             # strict
├── package.json
├── public/                   # estáticos (favicon, robots.txt, cv.pdf)
├── src/
│   ├── assets/               # imágenes optimizadas por Astro
│   ├── components/           # Header, Footer, Icon, Badge, ProjectCard
│   ├── content/
│   │   └── projects/         # un .md por proyecto (Content Collection)
│   ├── content.config.ts     # schema Zod de projects
│   ├── data/                 # site.ts, skills.ts, experience.ts, githubRepos.ts
│   ├── layouts/Layout.astro  # layout base, SEO, footer
│   ├── pages/                # rutas: index, about, contact, projects/index, projects/[slug]
│   └── styles/global.css     # @import "tailwindcss"
├── docs/                     # esta documentación
└── .astro/, dist/            # generados (gitignored)
```

## Comandos

- `npm install`
- `npm run dev` → http://localhost:4321
- `npm run build` → ./dist
- `npm run preview`
- `npm run astro -- check` → typecheck

## Convenciones

- Tailwind v4: estilos globales con `@import "tailwindcss"`; plugin en `astro.config.mjs`. No usar directivas v3.
- Contenido editable vive en `src/data/*` y `src/content/projects/*.md`, no en el HTML.
- Proyectos privados se muestran con etiqueta "Código privado" sin enlace.
- Componentes usan `data-animate` + IntersectionObserver respetando `prefers-reduced-motion`.
- Azul de acento: `sky-400` (mejor contraste que `blue-800`).

## Notas

- Header enlaza a `/about`, `/projects`, `/contact`; las rutas existen.
- GitHub username, email, WhatsApp y CV son placeholders con TODO en `src/data/site.ts`.
- API de GitHub se consulta en build-time con fallback local (`src/data/githubRepos.ts`).
