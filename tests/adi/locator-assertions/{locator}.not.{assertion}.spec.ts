import { test, expect } from '@playwright/test';

test('send button is not enabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const sendButton = page.getByTestId('disabled-button');

  await expect(sendButton).not.toBeEnabled();
});
