import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr } from 'vite-plugin-zephyr';

const mfConfig = {
  name: 'remoteApp',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
  },
  shared: ['react', 'react-dom'],
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
  experimental: {
    renderBuiltUrl() {
      return { relative: true };
    },
  },
  build: {
    target: 'chrome89',
  },
});
