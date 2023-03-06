import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astreak.build/config
export default defineConfig({
  site: 'https://astreak-oi.github.io',
  base: '/my-repo',
  integrations: [tailwind()]
});