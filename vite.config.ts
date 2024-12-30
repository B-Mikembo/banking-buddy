import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export const viteConfig = {
  build: {
    sourcemap: true,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

export default defineConfig(viteConfig);
