// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ⬅️ ADD THIS BLOCK ⬅️
  server: {
    // Crucial step: binds the server to all network interfaces (0.0.0.0), 
    // making it externally accessible within the Render container.
    host: '0.0.0.0', 
    // Optional: You can explicitly set the port as well, 
    // though Render often manages the external port mapping.
    port: 5173 
  }
});