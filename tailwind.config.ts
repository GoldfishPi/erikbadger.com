import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: 'JetBrains Mono'
      },
      colors: {
        green: '#A7C080',
        shark: '#1E2326',
        space: '#272E33',
        white: '#D3C6AA'
      }
    }
  },

  plugins: [typography]
} satisfies Config;
