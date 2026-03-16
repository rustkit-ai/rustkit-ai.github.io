// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rustkit-ai.github.io',
  output: 'static',
  integrations: [sitemap()],
});
