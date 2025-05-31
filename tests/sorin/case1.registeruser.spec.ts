import { expect, test } from '@playwright/test';
import { link } from 'fs';

test('register user', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await expect(page.getByText('New User Signup!')).toBeVisible();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Name').fill('John');
  await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill('John1912@b.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  await expect(page.getByText('Enter Account Information')).toBeVisible();
  await page.getByLabel('Mr.').check();
  await page.getByLabel('password').fill('Tes1234');
  await page.getByText('First name *').fill('John');
  await page.getByText('Last name *').fill('Doe');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Address Test');
  await page.getByLabel('country').selectOption('Singapore');
  await page.getByText('State *').fill('Worcestershire');
  await page.getByText('City *').fill('Worcester');

  //Won't work with label for some reason, Password works fine. Needs a workaround, except selectors.getByTestId
  await page.getByLabel('city').fill('WR1 1AA');
  await page.getByText('Mobile Number *').fill('07894456856');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByText(' Logged in as John')).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('heading', { name: 'Account Deleted!' }).click();
  await expect(page.getByText(' Signup / Login')).toBeVisible();
});
