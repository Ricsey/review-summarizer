import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import tailwindcss from '@tailwindcss/vite'

dotenv.config()

const baseUri = process.env.BASE_URI
const backendPort = process.env.BACKEND_PORT || '3000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // '/api': 'http://localhost:3000'
      '/api': `http://${baseUri}:${backendPort}`
    }
  }
})

