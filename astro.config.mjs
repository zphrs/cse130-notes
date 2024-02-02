import { defineConfig } from "astro/config"

import Classy from "./classy.json"

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://zphrs.github.io",
  base: "/cse130-notes",
  markdown: {
    shikiConfig: {
      theme: Classy,
    },
  },
})
