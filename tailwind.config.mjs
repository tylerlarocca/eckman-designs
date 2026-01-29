/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#071821",
          800: "#0B1F2A",
          700: "#102C3A",
        },
        champagne: "#D8C3A5",
        gold: "#C9A86A",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
