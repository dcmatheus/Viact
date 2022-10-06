import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [Icons({ compiler: 'jsx', jsx: 'react' }), react()]
})
