import { test, expect } from '@playwright/test';
import { link } from 'fs';

test.only('Add products in Cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole('button', { name: 'Consent' }).click();

  await page.getByRole('link', { name: ' Products' }).click();

  const productImage = page.locator('img[src="/get_product_picture/1"]');
  await productImage.hover(); //it works fine, but will hobver multiple times due locator structure. (await page.waitForSelector('.tooltip-content'); // or whatever appears after hover)

  const cart = page.getByText('Cart', { exact: true }); //nth(1) will be nice to try, instead of boolean, also Products not working with this method.
  await expect(cart).toBeVisible();
});
