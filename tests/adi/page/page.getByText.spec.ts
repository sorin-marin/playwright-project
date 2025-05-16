import { test, expect } from '@playwright/test';

test('direction is left', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/index.html');

  const noTodos = page.getByText('No todos yet!');

  await expect(noTodos).toHaveClass('list-group-item');
});
