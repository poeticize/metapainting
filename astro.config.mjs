import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://metapainting.net',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
});
