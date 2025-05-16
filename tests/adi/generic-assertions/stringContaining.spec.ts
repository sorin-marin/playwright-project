import { test, expect } from '@playwright/test';

test('check issue-counter to have issue substring', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const issueCounterText = await page.getByTitle('issue-counter').textContent();
  expect(issueCounterText).toEqual(expect.stringContaining('issue'));

  // const issueCounter = page.getByTitle('issue-counter');
  // await expect(issueCounter).toContainText('issue');
});
