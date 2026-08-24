
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    sourcemap: false
  },
  server: {
    port: 3000,
    open: false
  }
});
