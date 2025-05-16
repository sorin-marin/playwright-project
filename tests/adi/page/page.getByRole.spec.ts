import { test, expect } from '@playwright/test';

test('add page has heading', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');

  const list = page.getByRole('list').filter({
    has: page.getByRole('listitem').filter({ hasText: 'No todos yet!' }),
  });

  await expect(list).toHaveCount(1);
});
