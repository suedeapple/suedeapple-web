import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import'],
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thanks: resolve(__dirname, 'thanks/index.html'),
        timeline: resolve(__dirname, 'timeline/index.html'),
      },
    },
  },
})
