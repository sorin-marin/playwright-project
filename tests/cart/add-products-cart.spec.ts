import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { environment } from '../../config/environment';

test('Add products in Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickProducts();

  await productsPage.hoverProduct(1);
  await productsPage.addProductToCart(1);
  await productsPage.continueShopping();

  await productsPage.hoverProduct(2);
  await productsPage.addProductToCart(2);
  await cartPage.clickViewCart();

  const blueTop = cartPage.getProductByName('Blue Top');
  await expect(blueTop).toHaveText('Blue Top');

  const menTshirt = cartPage.getProductByName('Men Tshirt');
  await expect(menTshirt).toHaveText('Men Tshirt');

  await expect(cartPage.cartHeading).toBeVisible();
});
