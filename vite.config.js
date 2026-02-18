import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
  base: './',
  plugins: [pugPlugin()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: '[name][extname]'
      }
    }
  }
})
