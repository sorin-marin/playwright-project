import { test, expect, selectors } from '@playwright/test';

async function cookies(page) {
  await page.getByRole('button', { name: 'Manage options' }).click();
  await page
    .locator('label')
    .filter({ hasText: 'Legitimate interest (30' })
    .locator('span')
    .nth(3)
    .click();
  await page
    .locator('label')
    .filter({ hasText: 'Legitimate interest (43' })
    .locator('span')
    .nth(3)
    .click();
  await page
    .locator('label')
    .filter({ hasText: 'Legitimate interest (13' })
    .locator('span')
    .nth(3)
    .click();
  await page
    .locator('label')
    .filter({ hasText: 'Legitimate interest (22' })
    .locator('span')
    .nth(3)
    .click();
  await page
    .getByText('Develop and improve servicesInformation about your activity on this service,')
    .click();
  await page
    .locator('label')
    .filter({ hasText: 'Legitimate interest (34' })
    .locator('span')
    .nth(3)
    .click();
  await page
    .locator('label')
    .filter({ hasText: 'Legitimate interest (3 vendors)' })
    .locator('span')
    .nth(3)
    .click();
  await page.getByRole('button', { name: 'Confirm choices' }).click();
}

test('register user', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  cookies(page);
  selectors.setTestIdAttribute('data-qa');

  const firstName = 'John';
  const lastName = 'Doe';

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('heading', { name: 'New User Signup!' }).isVisible();
  await page.getByTestId('signup-name').fill(firstName);
  await page.getByTestId('signup-email').fill('a1@b4');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('heading', { name: 'ENTER ACCOUNT INFORMATION' }).isVisible();
  await page.getByLabel('Mr.').check();
  await page.getByLabel('Password').fill('123');
  await page.getByTestId('days').selectOption('10');
  await page.getByTestId('months').selectOption('1');
  await page.getByTestId('years').selectOption('2000');
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('Receive special offers from our partners!').check();
  await page.getByLabel('First name ').fill(firstName);
  await page.getByLabel('Last name ').fill(lastName);
  await page
    .getByLabel('Address * (Street address, P.O. Box, Company name, etc.)')
    .fill('333 Street Door');
  await page.getByLabel('Country ').selectOption('Australia');
  await page.getByLabel('State ').fill('Victoria');
  await page.getByLabel('City ').fill('Worcester');
  await page.getByTestId('zipcode').fill('3000');
  await page.getByLabel('Mobile Number ').fill('0123456789');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('heading', { name: 'ACCOUNT CREATED!' }).isVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Logged in as John' }).isVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('heading', { name: 'Account Deleted!' }).isVisible();
  await page.getByRole('link', { name: 'Continue' }).click();

  await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
});
