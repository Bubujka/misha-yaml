import { defineConfig } from 'vite';
const path = require('path')

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/yaml.js'),
      name: 'misha-yaml'
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
