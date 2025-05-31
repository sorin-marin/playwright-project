import { test, selectors, expect } from '@playwright/test';

test('login user incorrect email', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  selectors.setTestIdAttribute('data-qa');

  const email = 'John1900@b.com';
  const pass = 'Test';
  const redText = page.getByText('Your email or password is incorrect!');

  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await expect(
    page.getByRole('heading', { name: 'Login to your account' })
  ).toBeVisible();

  await page.getByTestId('login-email').fill(email);
  await page.getByTestId('login-password').fill(pass);

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(redText).toBeVisible();
});
