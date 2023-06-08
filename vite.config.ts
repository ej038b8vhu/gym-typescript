import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* STRP 1: from @types/node */
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    /* STRP 2: replace '@' to 'src' */
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
  },
})
