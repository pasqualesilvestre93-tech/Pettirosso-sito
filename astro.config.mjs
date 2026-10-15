import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// DEMO=true (predefinito): anteprima non indicizzabile su GitHub Pages.
// Per il sito definitivo: DEMO=false SITE_URL=https://dominio BASE_PATH=/
const DEMO = process.env.DEMO !== 'false';

export default defineConfig({
  site: process.env.SITE_URL || 'https://pasqualesilvestre93-tech.github.io',
  base: process.env.BASE_PATH || '/Pettirosso-sito',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: DEMO ? [] : [sitemap()],
  vite: { define: { __DEMO__: JSON.stringify(DEMO) } },
});
