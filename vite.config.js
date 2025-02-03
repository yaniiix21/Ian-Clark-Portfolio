import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: "dist"
  },
  rollupOptions: {
    input: {
      main: './index.html',
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  assetsInclude: ['**/*.docx']
});
