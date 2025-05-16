import { test, expect } from '@playwright/test';

test('direction is left', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const direction = page.getByTestId('direction');

  await expect(direction).toHaveText('left');
});
