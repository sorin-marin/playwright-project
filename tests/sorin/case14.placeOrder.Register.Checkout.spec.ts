import { expect, test } from '@playwright/test';
import { link } from 'fs';
import { text } from 'stream/consumers';

test('Place Order: Register while Checkout', async ({ page }) => {
  page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();

  //Adding products in the Basket.

  const ContinueShopping = page.getByRole('button', { name: 'Continue Shopping' });

  const productImage7 = page.locator('img[src="/get_product_picture/7"]');
  await productImage7.hover();
  await page
    .locator(
      'div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    )
    .click();
  await ContinueShopping.click();

  const productImage8 = page.locator('img[src="/get_product_picture/8"]');
  await productImage8.hover();
  await page
    .locator(
      'div:nth-child(10) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    )
    .click();
  await ContinueShopping.click();

  const productImage11 = page.locator('img[src="/get_product_picture/11"]');
  await productImage11.hover();
  await page
    .locator(
      'div:nth-child(11) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    )
    .click();
  await ContinueShopping.click();

  await page.getByRole('link', { name: ' Cart' }).click();
  expect(page.url()).toEqual('https://automationexercise.com/view_cart');
  await page.getByText('Proceed To Checkout').click();

  //Account creation.
  await page.getByRole('link', { name: 'Register / Login' }).click();

  const Name = 'John';
  const Email = 'John1925@b.com';

  await page.getByRole('textbox', { name: 'Name' }).fill(Name);
  await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill(Email);
  await page.getByRole('button', { name: 'Signup' }).click();

  //Fill Account Information
  const Surname = 'Doe';
  const Pass = 'Test';
  const Address = 'Random Address for Playwright';
  const State = 'Alberta';
  const City = 'Leduc';
  const Zip = 'T0C 2K0';
  const Mobile = '07589965685';

  await page.getByRole('radio', { name: 'Mr. ' }).click();
  await page.getByLabel('Password').fill(Pass);
  await page.getByLabel('First name ').fill(Name);
  await page.getByLabel('Last name ').fill(Surname);
  await page.getByLabel('Address * ').fill(Address);
  await page.getByLabel('Country ').selectOption('Canada');
  await page.getByLabel('State ').fill(State);
  await page.getByLabel('City ').fill(City);
  await page.locator('#zipcode').fill(Zip);
  await page.getByLabel('Mobile Number ').fill(Mobile);
  await page.getByRole('button', { name: 'Create Account' }).click();

  const VerifyPoint = page.getByRole('link', { name: ' Cart' });
  await expect(VerifyPoint).toBeVisible();
});
