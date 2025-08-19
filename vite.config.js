import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: './',   // 👈 relative path for assets
  plugins: [svelte()]
});
