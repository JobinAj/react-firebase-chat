import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Expose to external devices
    port: 5173,  // Ensure it runs on the expected port
  }
})
