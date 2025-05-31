import { test, expect } from '@playwright/test';

test('navbar list has 4 items', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const navbarListItems = page.getByTestId('navbar-list').getByRole('listitem');

  await expect(navbarListItems).toHaveCount(4);
});
