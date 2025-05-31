import { test, expect, Page } from '@playwright/test';

test('Verify all Products and product detail', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();

  const Product = page.getByRole('link', { name: 'Products' });
  await Product.click();
  await expect(Product).toBeVisible();

  await expect(page.url()).toEqual('https://automationexercise.com/products');

  const AllProducts = page.getByRole('heading', { name: 'All Products' });
  await expect(AllProducts).toBeVisible();

  //await page.getByRole('link', { name: 'https://automationexercise.com/product_details/1' }).click();
  const ViewProduct = page.locator('a[href="/product_details/1"]');
  await ViewProduct.click();
  // await page
  //   .getByRole('listitem')
  //   .filter({ has: page.locator('a[href="/product_details/1"]') })
  //   .getByRole('link', { name: 'View Product' })
  //   .click();
  await expect(page.url()).toEqual('https://automationexercise.com/product_details/1');

  const texts = ['Blue Top', 'Category: Women > Tops', 'Rs. 500'];
  for (const text of texts) {
    await expect(page.getByText(text)).toBeVisible();
  }
});
