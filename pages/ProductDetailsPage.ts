import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  // Locators
  readonly quantityInput: Locator = this.page.locator('#quantity');
  readonly addToCartButton: Locator = this.page.getByRole('button', { name: 'Add to cart' });

  constructor(page: Page) {
    super(page);
  }

  async fillQuantity(quantity: string): Promise<void> {
    await this.quantityInput.fill(quantity);
  }

  async getQuantityValue(): Promise<string | null> {
    return this.quantityInput.inputValue();
  }

  async clickAddToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async getProductText(text: string): Locator {
    return this.page.getByText(text);
  }
}
