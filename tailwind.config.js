/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          1: '#00214F',
        },
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        'ibm-plex-serif': 'var(--font-ibm-plex-serif)',
      },
    },
  },
  plugins: [],
};
