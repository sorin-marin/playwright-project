import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { AccountPage } from '../../pages/AccountPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { environment } from '../../config/environment';

test('Place order: Register before checkout', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  const testData = {
    name: 'John',
    surname: 'Doe',
    email: 'John1946@b.com',
    password: 'Protected',
    address: 'Bd, Ion Mihalache',
    state: 'Singapore-City',
    city: 'Singapore',
    zipCode: '999077',
    mobile: '07456685658',
    nameOnCard: 'John Doe',
    cardNumber: '1234567890',
    cvv: '323',
    expirationMonth: '06',
    expirationYear: '2030',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickSignupLogin();

  // Sign up
  await page.getByRole('textbox', { name: 'Name' }).fill(testData.name);
  await page.getByPlaceholder('Email Address').nth(1).fill(testData.email);
  await loginPage.clickSignup();

  await accountPage.selectMr();
  await accountPage.fillPassword(testData.password);

  // Date of birth
  await page.selectOption('#days', '15');
  await page.selectOption('[data-qa="months"]', 'February');
  await page.selectOption('[data-qa="years"]', '2010');

  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();

  await accountPage.fillFirstName(testData.name);
  await accountPage.fillLastName(testData.surname);
  await accountPage.fillAddress(testData.address);
  await accountPage.selectCountry('Singapore');
  await accountPage.fillState(testData.state);
  await accountPage.fillCity(testData.city);
  await page.locator('#zipcode').fill(testData.zipCode);
  await accountPage.fillMobileNumber(testData.mobile);
  await accountPage.clickCreateAccount();

  await accountPage.clickContinue();
  const checkLogin = homePage.loggedInAsText;
  await expect(checkLogin).toBeVisible();
  await homePage.clickHome();

  await page.getByRole('img', { name: 'ecommerce website products' }).nth(2).hover();
  await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
  await cartPage.clickViewCart();
  await expect(page).toHaveURL(/.*view_cart/);
  await cartPage.clickProceedToCheckout();

  const johnDoeText = checkoutPage.getDeliveryAddressText(testData.name + ' ' + testData.surname);
  await expect(johnDoeText).toBeVisible();

  await checkoutPage.fillOrderMessage('Leave the package behind the blue bin.');
  await checkoutPage.clickPlaceOrder();

  // Payment
  await checkoutPage.fillNameOnCard(testData.nameOnCard);
  await checkoutPage.fillCardNumber(testData.cardNumber);
  await checkoutPage.fillCVV(testData.cvv);
  await checkoutPage.fillExpirationMonth(testData.expirationMonth);
  await checkoutPage.fillExpirationYear(testData.expirationYear);
  await checkoutPage.clickPayAndConfirm();

  const orderConfirmed = page.getByText('Congratulations! Your order has been confirmed!');
  await expect(orderConfirmed).toBeVisible();

  await accountPage.clickContinue();
  await homePage.clickDeleteAccount();
  await expect(accountPage.accountDeletedHeading).toBeVisible();
  await accountPage.clickContinue();

  const checkPoint = homePage.homeLink;
  await expect(checkPoint).toBeVisible();
});
