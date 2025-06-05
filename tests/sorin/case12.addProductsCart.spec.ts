import { test, expect } from '@playwright/test';
import { link } from 'fs';

test.only('Add products in Cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole('button', { name: 'Consent' }).click();

  await page.getByRole('link', { name: ' Products' }).click();

  const productImage = page.locator('img[src="/get_product_picture/1"]');
  await productImage.hover(); //it works fine, but will hover multiple times due locator structure. (await page.waitForSelector('.tooltip-content'); // or whatever appears after hover)
  await page.locator('.overlay-content > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  const productImage2 = page.locator('img[src="/get_product_picture/2"]');
  await productImage2.hover();
  await page
    .locator(
      'div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    )
    .click();

  await page.getByRole('link', { name: 'View Cart' }).click();

  const BlueTop = page.getByRole('link', { name: 'Blue Top' });
  await expect(BlueTop).toHaveText('Blue Top');

  // const priceTd = page.getByRole('cell', { name: 'Price' }).filter({ hasText: 'Rs. 500' }); //Not working, lacking essential locators, to be further discussed.
  // await expect(priceTd).toHaveText('Rs. 500');

  const MenTshirt = page.getByRole('link', { name: 'Men Tshirt' });
  await expect(MenTshirt).toHaveText('Men Tshirt');

  const cart = page.getByText('Cart', { exact: true }); //nth(1) will be nice to try, instead of boolean, also Products not working with this method.
  await expect(cart).toBeVisible();
});

//   await page.getByText('Rs.').first().click();
//   await page.getByText('Rs.').nth(1).click();
//   await page.getByRole('cell', { name: 'Price' }).click();
//   await page.getByRole('cell', { name: 'Total' }).click();
