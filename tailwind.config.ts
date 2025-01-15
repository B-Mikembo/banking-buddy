import type { Config } from 'tailwindcss';
import { classicNameResolver } from 'typescript';
const config = {
  content: ['./index.html', './src/**/*.{vue, js, ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        bankGradient: '#0179FE',
        sky: {
          1: '#F3F9FF',
        },
        black: {
          1: '#00214F',
        },
        gray: {
          25: '#FCFCFD',
          200: '#EAECF0',
          300: '#D0D5DD',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          900: '#101828',
        },
      },
      backgroundImage: {
        'bank-gradient': 'linear-gradient(90deg, #0179FE 0%, #4893FF 100%)',
      },
      boxShadow: {
        form: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        'ibm-plex-serif': 'var(--font-ibm-plex-serif)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
