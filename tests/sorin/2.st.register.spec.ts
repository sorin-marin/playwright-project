import { expect, test } from "@playwright/test";
import { register } from "module";

test.only('register user', async ({page}) =>{

await page.goto('https://portal.swimtime.org/register');
await page.getByRole('button', { name: 'Allow all' }).click();

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
await page.getByRole('textbox', {name: 'First Name required' }).fill(name);
await page.getByRole('textbox', {name: 'Last Name required' }).fill(lastName);
await page.getByRole('textbox', {name:'Primary Contact Number'}).fill(mobile);
await page.getByRole('textbox', {name: 'Address'}).nth(0).fill(address);
await page.getByRole('textbox', {name: 'City'}).fill(city);
await page.getByRole('textbox', {name: 'Postcode'}).fill(postcode);

const register = await page.getByRole('button', {name: 'Register'});
await expect(register).toBeDisabled();
await expect(register).toBeVisible();

await page.getByLabel('How did you hear about us?').selectOption('Internet Search');

await expect(register).toBeEnabled();
await expect(register).toBeVisible();

const phone = await page.getByText('Phone');
await phone.click();
await expect(phone).toBeChecked();

const sms = await page.getByText('SMS');
await sms.click();
await expect(sms).toBeChecked();

const header = await page.getByRole('heading', {name: 'Account Owner Details'});
await expect(header).toBeVisible();

});