import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { environment } from '../../config/environment';

test('Search Product', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);

  const testData = {
    searchTerm: 'Men Tshirt',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickProducts();

  await expect(productsPage.categoryHeading).toBeVisible();

  await productsPage.searchProduct(testData.searchTerm);
  await expect(productsPage.searchedProductsHeading).toBeVisible();
});
