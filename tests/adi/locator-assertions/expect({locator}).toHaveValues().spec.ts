import { test, expect } from '@playwright/test';

test('two cars are pre-selected', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const cars = page.getByLabel('What cars do you have:');

  await expect(cars).toHaveValues(['lamborghini', 'ferrari']);
});
