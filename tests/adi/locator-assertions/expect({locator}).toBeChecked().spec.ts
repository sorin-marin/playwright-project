import { test, expect } from '@playwright/test';

test('Checkbox is checked', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const checkbox = page.getByLabel('checkbox');

  await expect(checkbox).toBeChecked();
});
