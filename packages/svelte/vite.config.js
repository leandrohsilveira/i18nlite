import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// @ts-ignore ignore import issue
import { svelteTesting } from '@testing-library/svelte/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/setupTests.js'],
    maxWorkers: 1,
  },
})
