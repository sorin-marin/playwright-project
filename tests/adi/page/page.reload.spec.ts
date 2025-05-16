import { test } from '@playwright/test';

test('homepage refreshed', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');
  await page.pause();
  await page.reload();
  await page.pause();
});
