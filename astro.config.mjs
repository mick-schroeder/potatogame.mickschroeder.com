// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://potatogame.mickschroeder.com',
  vite: {
      plugins: [tailwindcss()],
	},

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ga'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    react(),
    sitemap(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
});
