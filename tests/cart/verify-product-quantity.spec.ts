import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage';
import { CartPage } from '../../pages/CartPage';
import { environment } from '../../config/environment';

test('Verify Product quantity in Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const productDetailsPage = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);

  const testData = {
    quantity: '4',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();

  await productsPage.clickViewProduct(1);
  await expect(page).toHaveURL(/.*product_details\/1/);

  await productDetailsPage.fillQuantity(testData.quantity);
  const value = await productDetailsPage.getQuantityValue();
  await expect(value).toBe(testData.quantity);

  await productDetailsPage.clickAddToCart();
  await cartPage.clickViewCart();

  const quantityButton = page.getByRole('button', { name: testData.quantity });
  await expect(quantityButton).toHaveText(testData.quantity);

  const cartLink = page.getByRole('link', { name: 'Cart' });
  await expect(cartLink).toBeVisible();
});
