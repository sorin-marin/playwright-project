import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { environment } from '../../config/environment';

test('Logout User', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate(environment.baseUrl);

  const headline = page.getByRole('heading', {
    name: 'This site asks for consent to use your data',
  });
  await expect(headline).toBeVisible();

  await homePage.acceptConsent();
  await homePage.clickSignupLogin();
});
