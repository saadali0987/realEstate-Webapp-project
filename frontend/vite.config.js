import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),reactRefresh(),
    {
      name: 'vite-plugin-sass',
      enforce: 'pre',
      apply: 'build',
      //@ts-ignore
      configureServer(server) {
        server.middlewares.use(require('sass').middleware(resolve(__dirname, 'src')));
      },
    },],
})
