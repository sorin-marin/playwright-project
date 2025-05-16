import { test, expect } from '@playwright/test';

test('navbar has navbar-nav class', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/contact.html');

  const nav = page.locator('ul');

  await expect(nav).toHaveClass('navbar-nav');
});
