import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-twin',
          'babel-plugin-macros',
          'babel-plugin-styled-components'
        ]
      }
    })
  ]
})
