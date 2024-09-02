import { defineConfig } from 'vite';

export default defineConfig({
  base: '/todo_list/',
  build: {
    sourcemap: false,
    outDir: 'build',
  },
});
