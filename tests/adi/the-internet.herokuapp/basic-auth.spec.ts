import { test, expect } from '@playwright/test';

test.skip('name input is required', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  const basicAuthLink = page
    .getByRole('link')
    .filter({ hasText: 'Basic Auth' });

  // page.on('dialog', async (dialog) => {
  //   const passwordInput = page.getByText('Password');
  //   await passwordInput.fill('admin');
  // });
  await basicAuthLink.click();
  await page.getByRole('button', { name: 'Cancel' }).click();

  await expect(page.getByLabel('Username')).toBeVisible();
});
