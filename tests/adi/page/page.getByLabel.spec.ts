import { test, expect } from '@playwright/test';

test('name input is required', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/contact.html');

  await expect(page.getByLabel('Name')).toHaveAttribute('required');
});
