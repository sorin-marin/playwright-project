import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { environment } from '../../config/environment';

test('login user incorrect email', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  const testData = {
    email: 'John1900@b.com',
    password: 'Test',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();

  await homePage.clickSignupLogin();
  await expect(loginPage.loginHeading).toBeVisible();
  await loginPage.fillLoginEmail(testData.email);
  await loginPage.fillLoginPassword(testData.password);
  await loginPage.clickLogin();
  await expect(loginPage.incorrectEmailPassword).toBeVisible();
});
