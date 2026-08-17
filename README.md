# MisaelMoreno.com - Open Source Portfolio

![Astro](https://img.shields.io/badge/Astro-7.x-ff5d01?style=flat-square&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![SASS](https://img.shields.io/badge/SASS-1.89-pink?style=flat-square&logo=sass)

Personal portfolio and resume website for Misael Moreno, available in Spanish and English.

## Technology

- Astro 7 with static output
- TypeScript
- SASS/SCSS
- `astro:assets` for optimized content images
- `@astrojs/sitemap` for the XML sitemap
- Vanilla browser APIs for the slider, menus and section navigation

The project no longer depends on Next.js, React, a Node.js server or a server runtime. It is generated as plain static files and can be deployed to Cloudflare Pages, Cloudflare Workers Static Assets, Netlify, GitHub Pages or any static web host.

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create the production static export:

```bash
npm run build
```

The generated website is written to `dist/`. Preview the generated output locally with:

```bash
npm run preview
```

## Cloudflare Pages

Use the following build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.19.0` or newer (set the `NODE_VERSION` environment variable in Cloudflare Pages)

The root route redirects to `/es`. The `public/_redirects` file provides the same redirect for hosts that support the Netlify redirect format. Other hosts should configure an equivalent redirect from `/` to `/es`.

## Routes and SEO

- `/` redirects to `/es`
- `/es` is the Spanish version
- `/en` is the English version
- `/robots.txt` is generated during the build
- `sitemap-index.xml` and its sitemap files are generated during the build

Each localized page includes canonical URLs, alternate language links, Open Graph metadata, Twitter metadata and a localized document language.

## Project Structure

```text
misaelmoreno.com/
|-- public/                 Static files, favicon, slider images and redirects
|-- src/
|   |-- assets/             Images processed by astro:assets
|   |-- data/               Portfolio content and translations
|   |-- layouts/            Document layout and metadata
|   |-- pages/              Static routes and robots endpoint
|   `-- styles/             Shared SCSS styles
|-- astro.config.mjs        Static Astro and sitemap configuration
|-- package.json            Scripts and dependencies
|-- package-lock.json       Locked dependency versions
`-- tsconfig.json           Astro TypeScript configuration
```

## Customization

- Update personal information, career, training and projects in `src/data/`.
- Update localized titles and metadata in `src/data/meta.ts`, `src/data/ui.ts` and the page route.
- Adjust visual styles in `src/styles/`.
- Replace images in `public/images/` and `src/assets/images/` when changing the portfolio media.

## Migration Notes

The original Next.js application was replaced by this Astro application in the repository root. The visual design, localized routes, responsive layout, slider, menu interactions and section navigation were preserved while removing the React/Next.js runtime.

The site is intentionally static: all content is rendered at build time, while only the small amount of browser-side JavaScript required for scrolling, menu state and slider controls runs in the client.

## License

This project is licensed under the MIT License.

Website: [https://www.misaelmoreno.com](https://www.misaelmoreno.com)
