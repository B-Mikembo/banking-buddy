import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.spec.ts'],
    exclude: ['tests/e2e/**/*.spec.ts'],
    sequence: { shuffle: true },
  },
});
