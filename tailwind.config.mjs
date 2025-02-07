/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        aptean: {
          light: "#eaeaea",
          dark: "#3a3a3a",
          yellow: {
            light: "#fffc3b",
            dark: "#cccf00",
          },
          coral: "#e6612d",
          navy: "#050852",
          teal: "#54b3be",
          turquoise: "#2b6583",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
