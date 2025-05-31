import { test, expect } from '@playwright/test';

test('navbar has class: navbar navbar-expand-lg navbar-light bg-light', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const navbar = page.getByRole('navigation');

  await expect(navbar).toHaveClass(
    'navbar navbar-expand-lg navbar-light bg-light'
  );
});
