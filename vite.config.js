import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Basic_PortFolio/', 
  build: {
    outDir: 'dist', // Default setting, you can change this if you want
  },
})
