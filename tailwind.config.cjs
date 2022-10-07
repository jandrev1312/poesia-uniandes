/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#F6D7A7",
        secondary: "#F6EABE",
        extra1: "#C8E3D4",
        extra2: "#87AAAA",
        instagram: "#dd2a7b",
        facebook: "#4267B2",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
}
