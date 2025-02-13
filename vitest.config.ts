import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    include: ['tests/**/*.spec.ts'],
    exclude: ['tests/e2e/*.spec.ts'],
    sequence: { shuffle: true },
  },
  resolve: {
    alias: {
      '@': '/domains'
    }
  }
});
