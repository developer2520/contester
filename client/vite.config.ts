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
    port: 3000,
    allowedHosts: ['455a-84-54-73-90.ngrok-free.app'],
    strictPort: true,
    cors: {
      origin: "e852-213-230-92-37.ngrok-free.app",
      credentials: true,
    },
    hmr: {
      clientPort: 443,
    },
  },
  
});
                            
