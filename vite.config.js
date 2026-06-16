import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/renan-senai4/', // substitua pelo nome do repo se diferente
  plugins: [react()]
})
