import { test, expect } from '@playwright/test';

test('name input is enabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const nameInput = page.getByLabel('name');

  await expect(nameInput).toBeEnabled();
});
