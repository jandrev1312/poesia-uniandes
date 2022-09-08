/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Prata", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        floralWhite: "#f9f7f0",
        instagramPink: "#dd2a7b",
        facebookBlue: "#4267B2",
      },
    },
  },
  plugins: [],
}
