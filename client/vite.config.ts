import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['f88d-84-54-70-61.ngrok-free.app'],
    strictPort: true,
    cors: {
      origin: "e852-213-230-92-37.ngrok-free.app",
      credentials: true, 
    },
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    },
  },
  
});
                            
