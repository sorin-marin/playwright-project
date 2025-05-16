import { test, expect } from '@playwright/test';

test('email input is editable', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/contact.html');

  await expect(page.getByPlaceholder('email')).toBeEditable();
});
