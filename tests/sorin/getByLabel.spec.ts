import { test, expect } from '@playwright/test';

test('Adi is awesome', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/contact.html');
  await page.getByLabel('Name:').fill('Sorin');

  const sendMessage = page.getByRole('button', { name: 'Send Message' });
  await expect(sendMessage).toBeVisible();
  await sendMessage.click();

  await page.getByLabel('Name:').fill('Sorin');
});
