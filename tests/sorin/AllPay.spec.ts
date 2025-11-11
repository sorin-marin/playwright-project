import { expect, test } from '@playwright/test';

test.only('talk to us', async ({page}) =>{ 

await page.goto('https://www.allpay.net/');
await page.getByRole('button', { name: 'I Accept Cookies' }).click();

await page.getByRole('link', {name: 'Talk with us'}).nth(0).click();

await page.getByLabel('Type of enquiry(Required)').selectOption('Sales enquiry');
await page.getByRole('textbox', { name: 'First' }).fill('John');
await page.getByRole('textbox', { name: 'Last' }).fill('Doe');
await page.getByRole('textbox', { name: 'Email(Required)' }).fill('john.doe@test.com');
await page.getByRole('textbox', { name: 'Company name(Required)' }).fill('John Doe Consulting Ltd');
await page.getByRole('textbox', { name: 'Phone(Required)' }).fill('+44 20 7946 1234');
await page.getByLabel('Company size(Required)').selectOption('101 - 500');
await page.getByLabel('Interested in(Required)').selectOption('Credit & Debit Card Acceptance');
await page.getByLabel('Annual Transaction Volume(').selectOption('1,001 - 10,000');
await page.getByLabel('Annual Transaction Value(').selectOption('Est. £500,001 - £1,500,000');
await page.getByLabel('How can our team help?(').selectOption('I want to understand which allpay products are right for me');
await page.getByLabel('Role(Required)').selectOption('Manager');
await page.getByRole('checkbox', { name: 'I’d like a product demo' }).check();
await page.getByRole('textbox', { name: 'Further information(Required)' })
.fill('This is a test enquiry. I’ve selected the option to understand which product is right for me. Please disregard this message as it is for testing purposes only.');
//await page.getByRole('button', {name: 'Submit'}).click();
const checkPoint2 = page.getByRole('heading', {name: 'Need to talk to our dedicated and professional team?'});
await expect(checkPoint2).toBeVisible();

});
