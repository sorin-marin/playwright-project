import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CartPage } from '../../pages/CartPage';
import { environment } from '../../config/environment';

test('Verify Subscription in Homepage', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  const testData = {
    email: 'John1912@b.com',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickCart();

  await cartPage.scrollToSubscription();
  await expect(cartPage.subscriptionHeading).toBeVisible();

  await cartPage.fillSubscriptionEmail(testData.email);
  await cartPage.clickSubscribe();

  await expect(cartPage.subscriptionSuccessMessage).toBeVisible();
  await expect(cartPage.cartHeading).toBeVisible();
});
