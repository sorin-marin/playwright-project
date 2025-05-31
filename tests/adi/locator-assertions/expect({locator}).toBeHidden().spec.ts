import { test, expect } from '@playwright/test';

test('Hidden paragraph is hidden', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const hiddenParagraph = page
    .getByRole('paragraph')
    .filter({ hasText: 'Hidden paragraph' });

  await expect(hiddenParagraph).toBeHidden();
});
