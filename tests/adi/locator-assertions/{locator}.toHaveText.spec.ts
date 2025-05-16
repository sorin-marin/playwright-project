import { test, expect } from '@playwright/test';

test('lipsum contains text', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const paragraph = page.getByTestId('lipsum');

  await expect(paragraph).toHaveText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  );
});
