# Final Commit

Website for Final Commit: software projects for students (final-year, mini and M.Tech/MCA), built with the student and explained until the viva.

Static site built with [Astro](https://astro.build). Every page is plain HTML. The only JavaScript is the catalogue search/filter and the "your idea" form, which composes a WhatsApp message. There is no backend and no form service, and nothing is stored.

## Everyday edits

| To change | Edit |
| --- | --- |
| Phone, WhatsApp, email, hours, Instagram/YouTube links | `src/data/site.ts` (the only place they live) |
| Add, remove or edit a project | `src/data/projects.ts` |
| Show a project in "From the register" on the home page | set `featured: true` on it |
| FAQ answers | `src/components/Faq.astro` |
| Deliverables checklist | `src/components/Deliverables.astro` |
| Support promises | `src/components/Support.astro` |
| The six steps | `src/components/Process.astro` |

Projects are numbered by their position in `projects.ts`. If you insert one in the middle, the numbers after it shift, so add new ones at the end of their area.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321, reloads on save
npm run build      # outputs dist/
npm run check      # type-check
node scripts/check-links.mjs   # after a build: internal links + WhatsApp/tel/mailto targets
```

## Share image and icon

`public/og.png` (the preview card WhatsApp shows when the link is shared) is rendered from `scripts/og.html`. `public/apple-touch-icon.png` is rendered from `scripts/icon.html`. After editing either one:

```sh
node scripts/shot.mjs "file://$PWD/scripts/og.html" 1200 public/og.png 0 630
node scripts/shot.mjs "file://$PWD/scripts/icon.html" 180 public/apple-touch-icon.png 0 180
```

## Deploy

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`. If the site moves to another URL (a different org name or a custom domain), update `site` in `astro.config.mjs`, `url` in `src/data/site.ts` and the sitemap line in `public/robots.txt`.

## Design

Notes on the look, for whoever edits it next:

- The site is styled as a lab record book: paper `#f6f1e7`, blue-black ink `#1f2a44`, a red margin line, ballpoint-blue fill-ins `#2a3f9d` and red-pen marks `#c4362c`. Tokens are in `src/styles/global.css`.
- Fonts: Fraunces for headings, IBM Plex Sans for body text, IBM Plex Mono for numbers and tags, and Kalam for handwritten notes. All are self-hosted through `@fontsource`.
- Each section heading carries a commit dot on the margin line. The last one is filled in.
- Avoid gradients, emoji, invented stats and invented testimonials. Add testimonials only once real students have given them.
