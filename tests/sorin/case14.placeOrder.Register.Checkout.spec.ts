import { expect, test } from '@playwright/test';

test.only('Place Order: Register while Checkout', async ({ page }) => {
  page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();

  // Adding products in the Basket.

  const continueShopping = page.getByRole('button', { name: 'Continue Shopping' });

  const productImage7 = page.locator('img[src="/get_product_picture/7"]');
  await productImage7.hover();
  await page
    .locator(
      'div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    )
    .click();
  await continueShopping.click();

  const productImage8 = page.locator('img[src="/get_product_picture/8"]');
  await productImage8.hover();
  await page
    .locator(
      'div:nth-child(10) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    )
    .click();
  await continueShopping.click();

  const productImage11 = page.locator('img[src="/get_product_picture/11"]');
  await productImage11.hover();
  await page
    .locator(
      'div:nth-child(11) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn'
    )
    .click();
  await continueShopping.click();

  await page.getByRole('link', { name: ' Cart' }).click();
  expect(page.url()).toEqual('https://automationexercise.com/view_cart');
  await page.getByText('Proceed To Checkout').click();

  // Account creation.

  //Fill Account Information
  const name = 'John';
  const email = 'John1930@b.com';
  const surname = 'Doe';
  const pass = 'Test';
  const address = 'Test address';
  const state = 'Alberta';
  const city = 'Leduc';
  const zip = 'T0C 2K0';
  const mobile = '07589965685';

  await page.getByRole('link', { name: 'Register / Login' }).click();
  // await page.getByRole('link', { name: ' Signup / Login' }).click();

  await page.getByRole('textbox', { name: 'name' }).fill(name);
  await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('email address')
    .fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();

  await page.getByRole('radio', { name: 'Mr. ' }).click();
  await page.getByLabel('password').fill(pass);
  await page.getByLabel('First name ').fill(name);
  await page.getByLabel('Last name ').fill(surname);
  await page.getByLabel('address * ').fill(address);
  await page.getByLabel('Country ').selectOption('Canada');
  await page.getByLabel('state ').fill(state);
  await page.getByLabel('city ').fill(city);
  await page.locator('#zipcode').fill(zip);
  await page.getByLabel('mobile Number ').fill(mobile);
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();

  // The bellow comment is for an existent account.
  // await page
  //   .locator('form')
  //   .filter({ hasText: 'Login' })
  //   .getByPlaceholder('email address')
  //   .fill(email);
  // await page.getByRole('textbox', { name: 'password' }).fill(pass);
  // await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText(' Logged in as John')).toBeVisible();

  //Checkout
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();

  await expect(page.getByText(name).nth(1)).toBeVisible();
  await expect(page.getByText(surname).nth(1)).toBeVisible();
  await expect(page.getByText(address).nth(0)).toBeVisible();
  await expect(page.getByText(city).nth(0)).toBeVisible();
  await expect(page.getByText(zip).nth(0)).toBeVisible();
  await expect(page.getByText(state).nth(0)).toBeVisible();
  await expect(page.getByText(mobile).nth(0)).toBeVisible();

  const description = '#ordermsg textarea';
  await page.fill(description, 'Leave the package behind the blue bin.');

  await page.getByRole('link', { name: 'Place Order' }).click();

  //Card Details
  const cardname = 'John Doe';
  const cardnumber = '1234567890';
  const cvc = '311';
  const expiremonth = '05';
  const expireyear = '2030';

  await page.locator('input[name="name_on_card"]').fill(cardname);
  await page.locator('input[name="card_number"]').fill(cardnumber);
  await page.getByRole('textbox', { name: 'ex.' }).fill(cvc);
  await page.getByRole('textbox', { name: 'MM' }).fill(expiremonth);
  await page.getByRole('textbox', { name: 'YYYY' }).fill(expireyear);
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();

  //Account deletion
  await page.getByRole('link', { name: ' Delete Account' }).click();
  const accountDeletion = page.getByRole('heading', { name: 'Account Deleted!' });
  await expect(accountDeletion).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();

  const VerifyPoint = page.getByRole('link', { name: ' Cart' });
  await expect(VerifyPoint).toBeVisible();
});
