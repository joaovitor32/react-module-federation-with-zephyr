import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "remote-app",
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
}

export default defineConfig({
  plugins: [
    react(),
    withZephyr({ mfConfig })
  ],
  experimental: {
    renderBuiltUrl() {
      return { relative: true };
    },
  },
  build: {
    target: 'chrome89',
  },
});