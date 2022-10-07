import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import image from "@astrojs/image"

import react from "@astrojs/react"

export default defineConfig({
  integrations: [tailwind(), image(), react()],
  ssr: {
    external: ["svgo"],
  },
})
