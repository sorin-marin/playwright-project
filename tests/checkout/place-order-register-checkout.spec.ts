import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { LoginPage } from '../../pages/LoginPage';
import { AccountPage } from '../../pages/AccountPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { environment } from '../../config/environment';

test('Place Order: Register while Checkout', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);
  const checkoutPage = new CheckoutPage(page);

  const testData = {
    name: 'John',
    email: 'John1930@b.com',
    surname: 'Doe',
    password: 'Test',
    address: 'Test address',
    state: 'Alberta',
    city: 'Leduc',
    zipCode: 'T0C 2K0',
    mobile: '07589965685',
    nameOnCard: 'John Doe',
    cardNumber: '1234567890',
    cvv: '323',
    expirationMonth: '06',
    expirationYear: '2030',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();

  // Adding products to cart
  await productsPage.hoverProduct(7);
  await productsPage.addProductToCart(7);
  await productsPage.continueShopping();

  await productsPage.hoverProduct(8);
  await productsPage.addProductToCart(8);
  await productsPage.continueShopping();

  await productsPage.hoverProduct(11);
  await productsPage.addProductToCart(11);
  await productsPage.continueShopping();

  await homePage.clickCart();
  await expect(page).toHaveURL(/.*view_cart/);
  await cartPage.clickProceedToCheckout();

  // Account creation
  await checkoutPage.registerLoginLink.click();
  await loginPage.fillSignupName(testData.name);
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder(/email address/i).fill(testData.email);
  await loginPage.clickSignup();

  await accountPage.selectMr();
  await accountPage.fillPassword(testData.password);
  await accountPage.fillFirstName(testData.name);
  await accountPage.fillLastName(testData.surname);
  await accountPage.fillAddress(testData.address);
  await accountPage.selectCountry('Canada');
  await accountPage.fillState(testData.state);
  await accountPage.fillCity(testData.city);
  await page.locator('#zipcode').fill(testData.zipCode);
  await accountPage.fillMobileNumber(testData.mobile);
  await accountPage.clickCreateAccount();

  await expect(accountPage.accountCreatedHeading).toBeVisible();
  await accountPage.clickContinue();
  await expect(homePage.loggedInAsText).toBeVisible();

  // Checkout
  await homePage.clickCart();
  await cartPage.clickProceedToCheckout();

  await expect(checkoutPage.getAddressText(testData.name, 1)).toBeVisible();
  await expect(checkoutPage.getAddressText(testData.surname, 1)).toBeVisible();
  await expect(checkoutPage.getAddressText(testData.address, 0)).toBeVisible();
  await expect(checkoutPage.getAddressText(testData.city, 0)).toBeVisible();
  await expect(checkoutPage.getAddressText(testData.zipCode, 0)).toBeVisible();
  await expect(checkoutPage.getAddressText(testData.state, 0)).toBeVisible();
  await expect(checkoutPage.getAddressText(testData.mobile, 0)).toBeVisible();

  await checkoutPage.fillOrderMessage('Leave the package behind the blue bin.');
  await checkoutPage.clickPlaceOrder();

  // Payment
  await checkoutPage.fillNameOnCard(testData.nameOnCard);
  await checkoutPage.fillCardNumber(testData.cardNumber);
  await checkoutPage.fillCVV(testData.cvv);
  await checkoutPage.fillExpirationMonth(testData.expirationMonth);
  await checkoutPage.fillExpirationYear(testData.expirationYear);
  await checkoutPage.clickPayAndConfirm();

  await expect(checkoutPage.orderConfirmedMessage).toBeVisible();
  await accountPage.clickContinue();
  await homePage.clickDeleteAccount();
  await expect(accountPage.accountDeletedHeading).toBeVisible();
});
