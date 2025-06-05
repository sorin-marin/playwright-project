import { expect, test } from '@playwright/test';

test('Verify Product quantity in Cart', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.getByRole('button', { name: 'Consent' }).click();

  const ViewProduct = page.locator('a[href="/product_details/1"]');
  await ViewProduct.click();

  expect(page.url()).toEqual('https://automationexercise.com/product_details/1');

  //await page.getByLabel('Quantity:').fill('4'); //won't work as is missing <label for="quantity">Quantity:</label>, which is not linked with the input element.

  const quantity = '#quantity';
  await page.fill(quantity, '4');

  expect(await page.inputValue('#quantity')).toBe('4');

  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'View Cart' }).click();

  const value = page.getByRole('button', { name: '4' });
  await expect(value).toHaveText('4');
  //await expect(value).toHaveCount(4); - Did not worked. (as it starts from 0, I reckon)
  //await expect(value).toHaveValue(4); - Did not worked.

  const Cart = page.getByRole('link', { name: ' Cart' });
  await expect(Cart).toBeVisible();
});
