import { test, expect, selectors } from '@playwright/test';
import path from 'path';

test('Contact Us Form', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Contact us' }).click();

  const getintouch = page.getByRole('heading', { name: 'Get In Touch' });
  await expect(getintouch).toBeVisible();

  selectors.setTestIdAttribute('data-qa');

  await page.getByTestId('name').fill('Test');
  await page.getByTestId('email').fill('test@test');
  await page.getByTestId('subject').fill('Playwright');
  await page.getByTestId('message').fill('Playwright is awesome');

  //In this case the the file must be in the Playwright Project folder, otherwise won't work.
  await page
    .getByRole('button', { name: 'Choose File' })
    .setInputFiles(path.join(__dirname, 'myfile.txt'));

  page.on('dialog', (dialog) => dialog.accept());
  selectors.setTestIdAttribute('data-qa');
  await page.getByTestId('submit-button').click();
});
