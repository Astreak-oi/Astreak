import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astreak.build/config
export default defineConfig({

  integrations: [tailwind()]
});