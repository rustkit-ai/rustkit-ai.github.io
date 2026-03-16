# rustkit-ai.github.io

Organization website for [rustkit-ai](https://github.com/rustkit-ai) — built with [Astro](https://astro.build), deployed on GitHub Pages.

Live: **https://rustkit-ai.github.io**

## Stack

- [Astro](https://astro.build) — static site generator
- Pure CSS — no UI framework
- GitHub Actions — automatic deployment on push to `main`
- GitHub API — stars fetched at build time

## Project structure

```
src/
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Projects.astro    # fetches GitHub stars at build time
│   ├── Philosophy.astro
│   ├── Founders.astro
│   └── Footer.astro
├── layouts/Layout.astro
├── pages/index.astro
└── styles/global.css
```

## Dev

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # build to ./dist
npm run preview   # preview the build
```

## Deployment

Automatically deployed via GitHub Actions on every push to `main`.
