import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/", // 👈 repo name (important for GitHub Pages)
  server: {
    open: true, // auto-open browser on npm run dev
  },
});
