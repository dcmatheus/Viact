import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Icons({ compiler: 'jsx', jsx: 'react' }),
    AutoImport({
      dts: true,
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      eslintrc: {
        enabled: true
      },
      imports: ['react']
    }),
    WindiCSS(),
    react(),
    tsconfigPaths()
  ]
})
