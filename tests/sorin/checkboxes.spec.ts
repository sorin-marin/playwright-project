import { test, expect } from '@playwright/test';

test('Checkboxes', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkBox = page.getByRole('checkbox').nth(0);
  await checkBox.check();
  await expect(checkBox).toBeVisible();
});
