import { expect, test } from "@playwright/test";

test.only('register user', async ({page}) =>{

// await page.goto('https://www.swimtime.org/');
await page.goto('https://portal.swimtime.org/register');
await page.getByRole('button', { name: 'Allow all' }).click();
// await page.getByRole('link', {name: 'My Account'}).click();

// // 1. Get the browser context
// const context = page.context();
//   // 2. Set up new tab listener BEFORE clicking
// const newTabPromise = context.waitForEvent('page');
// await page.getByRole('link', { name: 'My Account' }).click();
// const newTab = await newTabPromise;
// await newTab.waitForLoadState('domcontentloaded');
// console.log('New tab URL:', await newTab.url());



const name = 'John';
const lastName = 'Doe';
const mobile = '0117 929 7354';
const email = 'john.doe@example.com';
const password = 'John Doe';
const city = 'Worcester';
const address = 'Newtown Road';
const postcode = 'WR25AD';

await page.locator('input[type="email"]').fill(email);
await page.locator('input[type="password"]').fill(password);
await page.getByRole('textbox', { name: 'First Name required' }).fill(name);
await page.getByRole('textbox', { name: 'Last Name required' }).fill(lastName);
await page.getByRole('textbox', {name:'Primary Contact Number'}).fill(mobile);
await page.getByRole('textbox', {name: 'Address'}).nth(0).fill(address);
await page.getByRole('textbox', {name: 'City'}).fill(city);
await page.getByRole('textbox', {name: 'Postcode'}).fill(postcode);
await page.getByLabel('How did you hear about us?').selectOption('Internet Search');

const header = await page.getByRole('heading', {name: 'Account Owner Details'});
await expect(header).toBeVisible();

});