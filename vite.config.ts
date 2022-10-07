import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    Icons({ compiler: 'jsx', jsx: 'react' }),
    WindiCSS(),
    react(),
    tsconfigPaths()
  ]
})
