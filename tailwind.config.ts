import type { Config } from 'tailwindcss';
const config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  prefix: '',
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
        fill: {
          1: 'rgba(255, 255, 255, 0.10)',
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
    },
  },
} satisfies Config;

export default config;
