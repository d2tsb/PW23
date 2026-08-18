import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // Im Dev-Server gibt es kein nginx. Der Proxy bildet dessen Verhalten nach,
  // inklusive des abgeschnittenen /api-Prefix, damit im Code derselbe Pfad steht
  // wie auf dem Zielsystem.
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (requestPath) => requestPath.replace(/^\/api/, ''),
      },
    },
  },
});
