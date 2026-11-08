# Dylan Chaves — Portfolio

Personal portfolio of **Dylan Chaves Potoy**, Integration Engineer (APIs, microservices & API security) based in San José, Costa Rica.

![Astro](https://img.shields.io/badge/Astro-FF3E00?logo=astro&logoColor=fff&style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![Cloudflare](https://img.shields.io/badge/Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=fff&style=flat)

## Stack

- [Astro 7](https://astro.build) (fully prerendered) + [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- `@astrojs/sitemap`, generated `robots.txt`
- Tech icons from [Simple Icons](https://simpleicons.org) (CC0)

## Editing content

| What | Where |
| --- | --- |
| Name, role, email, social links, site images | `src/data/site.ts` |
| Work experience | `src/data/experience.json` |
| Projects | `src/data/projects.json` (images in `public/projects/`) |
| Tech tags / skills catalog | `src/data/tech.ts`, `src/components/Skills.astro` |
| Education, certifications, languages | `src/components/Education.astro` |
| About me | `src/components/AboutMe.astro` |
| Site URL (sitemap, canonical, OG) | `site` in `astro.config.mjs` |

## Commands

```bash
pnpm install
pnpm dev       # local dev server at http://localhost:4321
pnpm build     # type-check + build to ./dist
pnpm preview   # build and serve with the Cloudflare runtime (wrangler dev)
pnpm deploy    # build and deploy to Cloudflare Workers (requires `pnpm wrangler login`)
```

## Credits

Based on the [porfolio.dev](https://github.com/midudev/porfolio.dev) template by [midudev](https://github.com/midudev), licensed under [CC BY-NC 4.0](./LICENSE.md).
