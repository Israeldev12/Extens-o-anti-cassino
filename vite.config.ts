import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/background.ts',
      formats: ['cjs'],
      fileName: () => 'background.js'
    },
    rollupOptions: {
      output: {
        dir: 'dist'
      }
    }
  }
});