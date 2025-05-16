import { test, expect } from '@playwright/test';

test('image is visible', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground');

  await expect(page.getByAltText('Todo List')).toBeVisible();
});
