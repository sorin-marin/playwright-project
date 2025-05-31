import { test, expect } from '@playwright/test';

test('Add Todo is enabled after user goes back on page', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/add.html');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.goBack();

  const addToDo = page.getByRole('button', { name: 'Add Todo' });

  await expect(addToDo).toBeEnabled();
});
