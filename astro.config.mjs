import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import db from "@astrojs/db";
import importableYAML from "@importable/yaml/astro";
import dsv from '@rollup/plugin-dsv';

import tailwind from "@astrojs/tailwind";

import remarkDirective from "remark-directive";
import remarkReadingTime from "./src/plugins/reading-time";

import remarkCallouts from "./src/plugins/callouts";
import remarkProcessLinks from "./src/plugins/process-links";
import copyAssets from "./src/plugins/copy-assets";
import remarkChangelogCallout from "./src/plugins/changelog-callout";

import fs from 'node:fs';
import path from 'node:path';

// https://astro.build/config
const base = "/";
const logDir = path.resolve(process.cwd(), 'logs');

// Ensure the logs directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

export default defineConfig({
  site: "https://appcentral-docs.apteancloud.dev/",
  base,
  trailingSlash: "ignore",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    svelte(),
    db(),
    tailwind(),
    importableYAML(),
    copyAssets()
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkDirective,
      remarkCallouts,
      remarkChangelogCallout,
      remarkProcessLinks(base),
    ],
  },
  vite: {
    plugins: [dsv()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'UNRESOLVED_IMPORT') {
            const logFile = path.join(logDir, 'missing-assets.txt');
            const [asset, importer] = warning.message.match(/"(.+?)"/g);

            console.warn(`Warning: Missing asset detected; `);
            console.warn(warning.message);
            console.log('');

            fs.appendFileSync(logFile, `\n[Asset]: ${asset}\n[Referenced in]: ${importer}\n`);
          } else {
            warn(warning);
          }
        },
      },
    },
  },
  image: {
    service: {
      entrypoint: './src/plugins/noop-image-service.js'
    }
  }
});
