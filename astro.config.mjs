import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rhadar12.github.io',
  base: '/portfolio-astro',
  build: { format: 'file' },
  trailingSlash: 'ignore',
});
