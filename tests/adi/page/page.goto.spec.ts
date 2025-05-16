import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');

  await expect(page).toHaveTitle('My Todo List');
});
