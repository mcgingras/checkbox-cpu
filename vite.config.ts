import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        and: resolve(__dirname, "gates/and.html"),
        nand: resolve(__dirname, "gates/nand.html"),
      },
    },
  },
});
