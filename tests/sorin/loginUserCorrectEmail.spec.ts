import { test, selectors } from '@playwright/test';

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
    .getByText(
      'Develop and improve servicesInformation about your activity on this service,'
    )
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

test('login user with correct email', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  cookies(page);
  selectors.setTestIdAttribute('data-qa');

  const email = 'John1900@b.com';
  const pass = 'Test';

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page
    .getByRole('heading', { name: 'Login to your account' })
    .isVisible();
  await page.getByTestId('login-email').fill(email);
  await page.getByTestId('login-password').fill(pass);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Logged in as John' }).isVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('heading', { name: 'Account Deleted!' }).isVisible();
  await page.getByRole('heading', { name: 'Account Deleted!' }).isVisible();
});
