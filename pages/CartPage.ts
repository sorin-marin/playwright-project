import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  // Locators
  readonly proceedToCheckoutButton: Locator = this.page.getByText('Proceed To Checkout');
  readonly viewCartLink: Locator = this.page.getByRole('link', { name: 'View Cart' });
  readonly cartHeading: Locator = this.page.getByText('Cart', { exact: true });
  readonly subscriptionHeading: Locator = this.page.getByRole('heading', { name: 'Subscription' });
  readonly subscriptionEmailInput: Locator = this.page.getByRole('textbox', { name: 'Your email address' });
  readonly subscribeButton: Locator = this.page.locator('#subscribe');
  readonly subscriptionSuccessMessage: Locator = this.page.getByText('You have been successfully subscribed!');

  constructor(page: Page) {
    super(page);
  }

  async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

  async clickViewCart(): Promise<void> {
    await this.viewCartLink.click();
  }

  async getProductByName(productName: string): Locator {
    return this.page.getByRole('link', { name: productName });
  }

  async scrollToSubscription(): Promise<void> {
    await this.subscriptionHeading.scrollIntoViewIfNeeded();
  }

  async fillSubscriptionEmail(email: string): Promise<void> {
    await this.subscriptionEmailInput.fill(email);
  }

  async clickSubscribe(): Promise<void> {
    await this.subscribeButton.click();
  }
}
