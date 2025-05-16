import { test, expect } from '@playwright/test';

test('playground logo goes to homepage', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const logo = page.getByAltText('Todo List');

  await logo.click();

  expect(page.url()).toEqual('http://127.0.0.1:8080/index.html');
});
