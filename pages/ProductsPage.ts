import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  // Locators
  readonly allProductsHeading: Locator = this.page.getByRole('heading', { name: 'All Products' });
  readonly categoryHeading: Locator = this.page.getByRole('heading', { name: 'Category' });
  readonly searchProductInput: Locator = this.page.getByRole('textbox', { name: 'Search Product' });
  readonly submitSearchButton: Locator = this.page.locator('#submit_search');
  readonly searchedProductsHeading: Locator = this.page.getByRole('heading', { name: 'Searched Products' });

  constructor(page: Page) {
    super(page);
  }

  getProductImage(productId: number): Locator {
    return this.page.locator(`img[src="/get_product_picture/${productId}"]`);
  }

  getProductLink(productId: number): Locator {
    return this.page.locator(`a[href="/product_details/${productId}"]`);
  }

  async hoverProduct(productId: number): Promise<void> {
    const productImage = this.getProductImage(productId);
    await productImage.hover();
  }

  async addProductToCart(productIndex: number): Promise<void> {
    if (productIndex === 1) {
      await this.page.locator('.overlay-content > .btn').first().click();
    } else {
      await this.page
        .locator(
          `div:nth-child(${productIndex + 1}) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn`
        )
        .click();
    }
  }

  async clickViewProduct(productId: number): Promise<void> {
    const viewProductLink = this.getProductLink(productId);
    await viewProductLink.click();
  }

  async searchProduct(productName: string): Promise<void> {
    await this.searchProductInput.fill(productName);
    await this.submitSearchButton.click();
  }

  async continueShopping(): Promise<void> {
    await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
  }
}
