import { expect, test, selectors } from '@playwright/test';

test('Register User with existing email', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  const signup = page.getByText('New User Signup!');
  await expect(signup).toBeVisible();

  await page.getByPlaceholder('Name').fill('Test');

  selectors.setTestIdAttribute('data-qa');
  await page.getByTestId('signup-email').fill('test@test');
  // await page
  //   .getByRole('form', { name: 'New User Signup!' })
  //   .getByPlaceholder('Email Address')
  //   .fill('test@test');

  await page.getByRole('button', { name: 'Signup' }).click();

  //const email = page.getByLabel('heading').filter({ hasText: 'Email Address already exist!' });
  const email = page.getByText('Email Address already exist!');
  await expect(email).toBeVisible();
});
