import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'tdesign-vendor': ['tdesign-react', 'tdesign-icons-react']
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true
  }
})