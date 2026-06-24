import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { AccountPage } from '../../pages/AccountPage';
import { environment } from '../../config/environment';

test('register user', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  const testData = {
    name: 'John',
    email: 'John1912@b.com',
    password: 'Tes1234',
    surname: 'Doe',
    address: 'Address Test',
    country: 'Singapore',
    state: 'Worcestershire',
    city: 'Worcester',
    zipCode: 'WR1 1AA',
    mobile: '07894456856',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickSignupLogin();

  await expect(loginPage.newUserSignupHeading).toBeVisible();
  await loginPage.fillSignupName(testData.name);
  await loginPage.fillSignupEmail(testData.email);
  await loginPage.clickSignup();

  await expect(accountPage.enterAccountInformationHeading).toBeVisible();
  await accountPage.selectMr();
  await accountPage.fillPassword(testData.password);
  await accountPage.fillFirstName(testData.name);
  await accountPage.fillLastName(testData.surname);
  await accountPage.fillAddress(testData.address);
  await accountPage.selectCountry(testData.country);
  await accountPage.fillState(testData.state);
  await accountPage.fillCity(testData.city);
  await accountPage.fillZipCode(testData.zipCode);
  await accountPage.fillMobileNumber(testData.mobile);
  await accountPage.clickCreateAccount();

  await expect(accountPage.accountCreatedHeading).toBeVisible();
  await accountPage.clickContinue();
  await expect(homePage.loggedInAsText).toBeVisible();
  await homePage.clickDeleteAccount();
  await expect(accountPage.accountDeletedHeading).toBeVisible();
  await accountPage.clickContinue();
  await expect(loginPage.newUserSignupHeading).toBeVisible();
});
