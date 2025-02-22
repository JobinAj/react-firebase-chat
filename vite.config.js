import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Explicitly bind to all network interfaces
    port: 5173,      // Ensure it runs on the expected port
    strictPort: true, // Prevents fallback to another port if 5173 is occupied
    watch: {
      usePolling: true, // Fixes issues with file changes inside Docker
    }
  }
})
