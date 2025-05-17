import { test, expect } from '@playwright/test';

test('Add/Remove Elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  const addButton = page.getByRole('button', { name: 'Add Element' });
  await expect(addButton).toBeVisible();
  await addButton.click({ clickCount: 2 });
  await expect(addButton).toBeVisible();

  const removeButton = page.getByRole('button', { name: 'Delete' }).nth(0);
  await removeButton.click();
  await removeButton.click();

  const seleniumLink = page.getByRole('link', { name: 'Elemental Selenium' });
  await seleniumLink.click();
});
