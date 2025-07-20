import { expect, test } from '@playwright/test';
import { builtinModules } from 'module';

test('Place order: Register before checkout', async ({ page }) => {
  page.goto('https://automationexercise.com/');

  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  //signed up
  const name = 'John';
  const surname = 'Doe';
  const email = 'John1934@b.com';
  const password = 'Protected';
  const address = 'Bd, Ion Mihalache';
  const state = 'Singapore-City';
  const city = 'Singapore';
  const zipcode = '999077';
  const mobile = '07456685658';

  await page.getByRole('textbox', { name: 'Name' }).fill(name);
  await page.getByPlaceholder('Email Address').nth(1).fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByLabel('Password *').fill(password);
  await page.getByLabel('First name *').fill(name);
  await page.getByLabel('Last name *').fill(surname);
  await page.getByLabel('Address *').fill(address);
  await page.getByLabel('Country *').selectOption('Singapore');
  await page.getByLabel('State *').fill(state);
  await page.getByLabel('City *').fill(city);
  await page.locator('#zipcode').fill(zipcode);
  await page.getByLabel('Mobile Number *').fill(mobile);
  await page.getByRole('button', { name: 'Create Account' }).click();

  await await page.getByRole('link', { name: ' Products' }).isVisible();
});
