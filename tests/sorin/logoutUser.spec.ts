import { test, expect } from '@playwright/test';

test('Logout User', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  const headline = page.getByRole('heading', {
    name: 'This site asks for consent to use your data',
  });
  await expect(headline).toBeVisible();

  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
});
