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
        'green-50': 'rgba(167, 192, 128, 0.5)',
        shark: '#1E2326',
        space: '#272E33',
        white: '#D3C6AA'
      },
      typography: ({ theme }) => ({
        everforest: {
          css: {
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.green'),
            h1: {
              fontSize: '3rem',
              fontWeight: 'ExtraBold',
              margin: 0,
            },
            h2: {
              fontSize: '2.25rem',
              margin: 0,
            },
            h3: {
              fontSize: '2rem',
              margin: 0,
            },
            h4: {
              fontSize: '1.5rem',
              margin: 0,
            },
            h5: {
              fontSize: '1rem',
              fontWeight: 'Bold',
              margin: 0,
            },
            p: {
              fontSize: '0.875rem',
              margin: 0,
            },
            a: {
              textDecoration: 'none'
            }
          }
        }
      })
    }
  },

  plugins: [typography]
} satisfies Config;
