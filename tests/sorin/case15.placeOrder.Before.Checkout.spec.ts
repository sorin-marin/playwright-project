import { expect, test } from '@playwright/test';
test('Place order: Register before checkout', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  //sign up
  const name = 'John';
  const surname = 'Doe';
  const email = 'John1946@b.com';
  const password = 'Protected';
  const address = 'Bd, Ion Mihalache';
  const state = 'Singapore-City';
  const city = 'Singapore';
  const zipcode = '999077';
  const mobile = '07456685658';

  
  await page.getByRole('textbox', { name: 'Name' }).fill(name);
  await page.getByPlaceholder('Email Address').nth(1).fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();

  await page.getByRole('radio', {name: 'Mr.'}).check();

  await page.getByLabel('Password *').fill(password);

  //Date of birth - SelectOption
  await page.selectOption('#days', '15');
  await page.selectOption('[data-qa="months"]', 'February'); // Recommended by Playwright
  await page.selectOption('[data-qa="years"]', '2010');

  await page.getByRole('checkbox', {name: 'Sign up for our newsletter!'}).check();

  await page.getByLabel('First name *').fill(name);
  await page.getByLabel('Last name *').fill(surname);
  await page.getByLabel('Address *').fill(address);
  await page.getByLabel('Country *').selectOption('Singapore');
  await page.getByLabel('State *').fill(state);
  await page.getByLabel('City *').fill(city);
  await page.locator('#zipcode').fill(zipcode);
  await page.getByLabel('Mobile Number *').fill(mobile);
  await page.getByRole('button', { name: 'Create Account' }).click();

//   //Existant account 
// await page.getByPlaceholder('Email Address').nth(0).fill(email);
// await page.getByPlaceholder('Password').fill(password);
//await page.getByRole('button', {name:'Login'}).click();
//  //End of existant account 

await page.getByRole('link', {name: 'Continue'}).click();
const checkLogin = page.getByText(' Logged in as John');
await expect(checkLogin).toBeVisible();
await page.getByRole('link', {name: ' Home'}).click();
await page.getByRole('img', { name: 'ecommerce website products' }).nth(2).hover();
await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
await page.getByRole('link', {name: 'View Cart'}).click();
await expect(page).toHaveURL(/.*view_cart/);
await page.getByText('Proceed To Checkout').click();
  //const deliveryAddress = page.getByRole('listitem', {name: 'Your delivery address'}).filter({hasText: '. John Doe'});
const johnDoeText = page.getByText('Your delivery address').locator('..').locator('..').getByText('. John Doe');

await expect(johnDoeText).toBeVisible();

const description = '#ordermsg textarea';
await page.fill(description, 'Leave the package behind the blue bin.');

await page.getByRole('link', {name: 'Place Order'}).click();
//Payment 
const fullName = 'John Doe';
const cardNumber = '1234567890';
const cvv = '323';
const expirationMonth = '06';
const expirationYear = '2030';

await page.fill('input[name="name_on_card"]', fullName);
await page.fill('input[name="card_number"]', cardNumber);
await page.getByPlaceholder('ex. 311').fill(cvv);
await page.getByPlaceholder('MM').fill(expirationMonth);
//Two different methods for the same element.
//await page.getByPlaceholder('YYYY').fill(expirationYear);
//or
page.fill('input[data-qa="expiry-year"]', expirationYear);
await page.getByRole('button', {name: 'Pay and Confirm Order'}).click();

const orderConfirmed = page.getByText('Congratulations! Your order has been confirmed!');
await expect(orderConfirmed).toBeVisible();

await page.getByRole('link', {name: 'Continue'}).click();
await page.getByRole('link', {name: ' Delete Account'}).click();

const accountDeleted = page.getByRole('heading', {name: 'Account Deleted!'});
await expect(accountDeleted).toBeVisible();
await page.getByRole('link', {name: 'Continue'}).click();

const checkPoint = page.getByRole('link', {name: ' Home'});
await expect(checkPoint).toBeVisible();

});