import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['miam-miam-mwn0.onrender.com']
  },
  build: {
    chunkSizeWarningLimit: 2000
  }
})

