import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '', // substitua pelo nome do repo se diferente
  plugins: [react()]
})
