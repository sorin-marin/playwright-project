import { test, expect } from '@playwright/test';

test('contact page has title: Contact Us', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/contact.html');

  const pageTitle = await page.title();

  expect(pageTitle).toEqual('Contact Us');
});
