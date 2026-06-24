import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { environment } from '../../config/environment';

test('Verify all Products and product detail', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickProducts();
  await expect(homePage.productsLink).toBeVisible();

  await expect(page).toHaveURL('https://automationexercise.com/products');

  await expect(productsPage.allProductsHeading).toBeVisible();

  await productsPage.clickViewProduct(1);
  await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

  const texts = ['Blue Top', 'Category: Women > Tops', 'Rs. 500'];
  for (const text of texts) {
    await expect(page.getByText(text)).toBeVisible();
  }
});
