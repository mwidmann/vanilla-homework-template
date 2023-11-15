import { defineConfig } from "vitest/config";

export default defineConfig({
  // specify the file extensions to be considered as test files
  testMatch: "**/*.spec.{js,ts}",
  test: {
    globals: true,
    environment: "happy-dom",
    watch: false,
  },
});
