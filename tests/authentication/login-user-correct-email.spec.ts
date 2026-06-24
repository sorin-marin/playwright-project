import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { environment } from '../../config/environment';

test('login user with correct email', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  const testData = {
    email: 'John1900@b.com',
    password: 'Test',
  };

  await homePage.navigate(environment.baseUrl);
  await loginPage.manageCookies();

  await homePage.clickSignupLogin();
  await expect(loginPage.loginHeading).toBeVisible();
  await loginPage.fillLoginEmail(testData.email);
  await loginPage.fillLoginPassword(testData.password);
  await loginPage.clickLogin();
  await expect(homePage.loggedInAsText).toBeVisible();
  await homePage.clickDeleteAccount();
  await expect(page.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible();
});
