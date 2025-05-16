import { test, expect } from '@playwright/test';

test('take screenshot: playground.html', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const direction = page.getByTestId('direction');

  await expect(direction).toHaveText('left');

  const timeStamp = Date.now();
  await page.screenshot({
    path: './tests/screenshots/playground-' + timeStamp + '.jpeg',
    type: 'jpeg',
  });
});
