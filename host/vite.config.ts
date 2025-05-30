import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { withZephyr } from 'vite-plugin-zephyr';

const mfConfig = {
  name: "host",
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remoteApp: 'http://localhost:5173/assets/remoteEntry.js',
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
    withZephyr({ mfConfig }),
  ],
  build: {
    target: 'chrome89',
    modulePreload: {
      resolveDependencies: (_, deps: string[]) => {
        return deps.filter((dep) => {
          const isReactPackage = dep.includes('react') || dep.includes('react-dom');
          const isNotRemoteEntry = !dep.includes('remoteEntry.js');

          return isReactPackage && isNotRemoteEntry;
        });
      },
    },
  },
});