import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1536,
  viewportHeight: 960,

  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
