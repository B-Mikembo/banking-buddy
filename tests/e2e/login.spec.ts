import { expect, test } from '@nuxt/test-utils/playwright';

test('test', async ({ page, goto }) => {
  await goto('/auth/sign-in', { waitUntil: 'hydration' });
  await expect(page).toHaveTitle('Connexion');
});
