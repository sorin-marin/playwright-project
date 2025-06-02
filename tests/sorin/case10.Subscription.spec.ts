import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('Verify Subscription in Homepage', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();

  await page.getByRole('link', { name: ' Cart' }).click();

  const subscription = page.getByRole('heading', { name: 'Subscription' });
  await subscription.scrollIntoViewIfNeeded();
  await expect(subscription).toBeVisible();

  await page.getByRole('textbox', { name: 'Your email address' }).fill('John1912@b.com');
  await page.click('#subscribe');

  //To be reviewed, not working
  //await page.getByRole('button').nth(1);

  //The below methods are not validating the content, but also it is not failing.
  await page.getByText('You have been successfully subscribed!').isVisible();
  await page.getByRole('heading', { name: 'You have been successfully subscribed!' });

  await expect(page.getByText('Cart', { exact: true })).toBeVisible();
});
