import { test, expect } from '@playwright/test';

test('issues count has 25 issues', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/playground.html');

  const issueCount = page.getByTitle('issue-counter');

  await expect(issueCount).toHaveText('25 issues');
});
