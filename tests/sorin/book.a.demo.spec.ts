import { expect, test } from '@playwright/test';

test('Book a Demo', async ({ page }) => {
  await page.goto('https://www.franscape.io/');

  const firstHeading = page.getByRole('heading', { name: 'Your partner in Franchise Management' });
  await expect(firstHeading).toBeVisible();

  await page.getByRole('link', { name: 'Get Started' }).click();

  const name = 'John';
  const lastName = 'Doe';
  const phoneNumber = '0117 929 7354';
  const email = 'john.doe@example.com';
  const company = 'Globex Corporation';
  const numberOfFranchisees = '3';
  const newSoftware = 'None, very confident.';

  await page.getByLabel('First name').fill(name);
  await page.getByLabel('Last name').fill(lastName);
  await page.getByLabel('Phone number').fill(phoneNumber);
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Company').fill(company);
  await page.getByRole('radio', { name: 'Established (3 to 5 years)' }).nth(0).click();
  await page.getByLabel('Current Number of Franchisees').fill(numberOfFranchisees);
  await page.getByRole('checkbox', { name: 'Take Royalties at Source' }).nth(1).click();
  await page.getByRole('radio', { name: 'No fixed timescale' }).nth(1).click();
  await page
    .getByLabel('Do you have any concerns in introducing new software to your network?')
    .fill(newSoftware);
  const demoHeading = page.getByRole('heading', { name: 'Book a Demo' });
  await expect(demoHeading).toBeVisible();
});
