import { test, expect } from '@playwright/test';

test('add new todo is focused', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/add.html');

  const todoText = page.getByLabel('Todo Item:');

  await expect(todoText).toBeFocused();
});
