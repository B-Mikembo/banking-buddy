import { expect, test } from '@nuxt/test-utils/playwright';

test.beforeEach(async({goto}) => {
  await goto('/auth/sign-in', {waitUntil: 'hydration'});
})

test.describe('login', () => {
  test('should display correct page title and correct heading', async ({ page, goto }) => {
    await expect(page).toHaveTitle('Connexion');
    await expect(page.getByRole('heading', {level: 1, name: 'Se connecter'})).toBeVisible();
  });
});
