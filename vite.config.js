import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Replace with your exact repo name
export default defineConfig({
  plugins: [react()],
  base: '/portofolio-aliha/'
})