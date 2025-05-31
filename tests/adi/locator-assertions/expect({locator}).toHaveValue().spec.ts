import { test, expect } from '@playwright/test';

test('contact name input is empty', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/contact.html');

  const nameLabel = page.getByLabel('Name:');

  await expect(nameLabel).toHaveValue('');
});
