import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: resolve(__dirname, "docs"),
  },
  plugins: [vue(), ElementPlus()],
  optimizeDeps: {},
});
