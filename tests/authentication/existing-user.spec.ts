import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { environment } from '../../config/environment';

test('Register User with existing email', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  const testData = {
    name: 'Test',
    email: 'test@test',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickSignupLogin();

  await expect(loginPage.newUserSignupHeading).toBeVisible();
  await loginPage.fillSignupName(testData.name);
  await loginPage.fillSignupEmailTestId(testData.email);
  await loginPage.clickSignup();
  await expect(loginPage.emailAlreadyExistsError).toBeVisible();
});
