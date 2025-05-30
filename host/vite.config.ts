import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr } from 'vite-plugin-zephyr';

const mfConfig = {
  name: 'vite-host',
  filename: 'remoteEntry.js',
  remotes: {
    'remoteApp': {
      name: 'remoteApp',
      entry: 'http://localhost:4173/remoteEntry.js',
      type: 'module',
    },
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
};

export default defineConfig({
  plugins: [
    react(),
    withZephyr({ mfConfig }),
  ],
  server: {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
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
