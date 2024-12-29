import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { plugin as md, Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [sveltekit(), md({ mode: [Mode.TOC, Mode.HTML] })],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
