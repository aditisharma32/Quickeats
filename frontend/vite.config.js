// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // 1. Keep the host fix from before:
    host: '0.0.0.0', 
    port: 5173,
    // 2. ⬅️ ADD THIS NEW LINE ⬅️
    allowedHosts: [
      'quickeats-1-e7zz.onrender.com', // Your primary Render domain
      '.onrender.com' // Optional: Allow all subdomains on Render for future deploys
    ], 
  }
});