/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(224 89% 60%)", // reference blue
          dark: "hsl(224 56% 12%)"
        }
      },
      boxShadow: {
        brand: "0 0 25px hsl(224 89% 60%)",
        soft: "0 1px 4px rgba(146, 161, 176, 0.15)"
      }
    }
  },
  plugins: []
};
