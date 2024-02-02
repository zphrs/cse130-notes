import { defineConfig } from "astro/config"

import Classy from "./classy.json"
import ClassyLight from "./classy-light.json"
import markdownIntegration from "@astropub/md"

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://zphrs.github.io",
  base: "/cse130-notes",
  integrations: [markdownIntegration()],
  markdown: {
    shikiConfig: {
      theme: ClassyLight,
    },
  },
})
