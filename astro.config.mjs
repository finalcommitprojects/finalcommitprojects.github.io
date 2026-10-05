import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If the GitHub org ends up with a different name, change this one line.
export default defineConfig({
  site: 'https://finalcommitprojects.github.io',
  integrations: [sitemap()],
  // Inline the CSS so the first paint doesn't wait on a stylesheet request (helps on 4G).
  build: { inlineStylesheets: 'always' },
});
