import { expect, test } from '@playwright/test';

test('Search Product', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();

  await page.getByRole('link', { name: ' Products' }).click();

  await expect(page.getByRole('heading', { name: 'Category' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Search Product' }).fill('Men Tshirt');
  await page.click('#submit_search');

  //To be worked on
  //await page.getByRole('button').filter({ hasText: '' }).click();

  await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();

  //8. Verify all the products related to search are visible - to be reviewed.
});
