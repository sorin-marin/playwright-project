import { test, expect } from '@playwright/test';

test('lipsum contains text', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/add.html');

  const addForm = page.getByRole('form');

  await expect(addForm).toHaveId('add-todo-form');
});
