import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  // Locators
  readonly registerLoginLink: Locator = this.page.getByRole('link', { name: 'Register / Login' });
  readonly orderMessageTextarea: Locator = this.page.locator('#ordermsg textarea');
  readonly placeOrderLink: Locator = this.page.getByRole('link', { name: 'Place Order' });
  readonly nameOnCardInput: Locator = this.page.locator('input[name="name_on_card"]');
  readonly cardNumberInput: Locator = this.page.locator('input[name="card_number"]');
  readonly cvvInput: Locator = this.page.getByPlaceholder('ex. 311');
  readonly expirationMonthInput: Locator = this.page.getByPlaceholder('MM');
  readonly expirationYearInput: Locator = this.page.locator('input[data-qa="expiry-year"]');
  readonly payConfirmButton: Locator = this.page.getByRole('button', { name: 'Pay and Confirm Order' });
  readonly orderConfirmedMessage: Locator = this.page.getByText('Congratulations! Your order has been confirmed!');

  constructor(page: Page) {
    super(page);
  }

  async fillOrderMessage(message: string): Promise<void> {
    await this.orderMessageTextarea.fill(message);
  }

  async clickPlaceOrder(): Promise<void> {
    await this.placeOrderLink.click();
  }

  async fillNameOnCard(name: string): Promise<void> {
    await this.nameOnCardInput.fill(name);
  }

  async fillCardNumber(cardNumber: string): Promise<void> {
    await this.cardNumberInput.fill(cardNumber);
  }

  async fillCVV(cvv: string): Promise<void> {
    await this.cvvInput.fill(cvv);
  }

  async fillExpirationMonth(month: string): Promise<void> {
    await this.expirationMonthInput.fill(month);
  }

  async fillExpirationYear(year: string): Promise<void> {
    await this.expirationYearInput.fill(year);
  }

  async clickPayAndConfirm(): Promise<void> {
    await this.payConfirmButton.click();
  }

  getDeliveryAddressText(name: string): Locator {
    return this.page.getByText('Your delivery address').locator('..').locator('..').getByText(`. ${name}`);
  }

  getAddressText(text: string, index: number = 0): Locator {
    return this.page.getByText(text).nth(index);
  }
}
