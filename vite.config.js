import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Serve index.html for /admin so the React router handles it
    historyApiFallback: true,
    proxy: {
      '/upload': 'http://localhost:3001',
      '/assets-list': 'http://localhost:3001',
    },
  },
})
