# eburlak.github.io

Resume site built with Next.js 16 (App Router, static export), styled-components and next-themes.
No CSS framework - every style is a styled-component; global tokens and the reset live in
`src/styles/global-style.ts`.
Design is inspired by [chanhdai.com](https://chanhdai.com): a single centered column framed by
dashed rules, sections separated by full-width dashed lines, light/dark/system themes.

## Content

All text lives in `src/data` - no content is hardcoded in components:

| File                    | What it holds                                              |
| ----------------------- | ---------------------------------------------------------- |
| `src/data/profile.ts`   | name, job title, location, about paragraphs, social links   |
| `src/data/stack.ts`     | tech stack icons (imported straight from [simple-icons](https://simpleicons.org)) |
| `src/data/experience.ts`| work history and education                                  |
| `src/data/projects.ts`  | npm packages shown in the Projects section                  |

Places still waiting for the real CV text are marked with `TODO:`.

## Styling

| File                          | What it holds                                                   |
| ----------------------------- | --------------------------------------------------------------- |
| `src/styles/theme.ts`         | design tokens as `var(--...)` references, breakpoints            |
| `src/styles/global-style.ts`  | `createGlobalStyle`: reset plus light/dark CSS variables         |
| `src/styles/mixins.ts`        | shared `css` fragments: dashed screen-wide rules, stripes        |
| `src/components/styled-registry.tsx` | collects styles during SSR so the export ships them inline |

Dark mode is a `.dark` class on `<html>` toggled by `next-themes`; the class only swaps CSS
variables, so no styled-component re-renders on theme change.

## Pages

`/` is the resume itself. `/template/` is a copy-me starting point for any new page - it is
marked `noindex` and can be deleted once you no longer need it.

To add a page: copy `src/app/template/` to `src/app/<slug>/`, then edit the `metadata` and the
sections. The building blocks:

| Component      | What it gives you                                                     |
| -------------- | ---------------------------------------------------------------------- |
| `PageShell`    | dashed column, back link, page title and description, closing gutter    |
| `Section`      | dashed heading bar with a mono uppercase title plus a screen-wide rule  |
| `SectionBody`  | padded muted body text with spacing between paragraphs                  |

`src/app/not-found.tsx` is the 404 page; the static export writes it to `out/404.html`, which is
exactly what GitHub Pages serves for unknown paths.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
npm run lint
```

## Deploy

`.github/workflows/deploy.yml` builds the export and publishes it to GitHub Pages on every push
to `main`. One-time setup in the repository: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

Since the repository is a user site (`eburlak.github.io`), the site is served from the domain
root, so no `basePath` is needed.
