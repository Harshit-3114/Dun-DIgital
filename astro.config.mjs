import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? 'https://dun.digital';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    /* reticle-vite-owning */
    server: { watch: { ignored: [/(^|[\\/])\.reticle([\\/]|$)/] } },
    optimizeDeps: { include: ['@reticlehq/react'] },
    build: { target: 'es2022' },
    plugins: [tailwindcss()]
  }
});
