import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  // Locators
  readonly signupLoginLink: Locator = this.page.getByRole('link', { name: /Signup \/ Login/ });
  readonly productsLink: Locator = this.page.getByRole('link', { name: 'Products' });
  readonly cartLink: Locator = this.page.getByRole('link', { name: 'Cart' });
  readonly contactUsLink: Locator = this.page.getByRole('link', { name: 'Contact us' });
  readonly homeLink: Locator = this.page.getByRole('link', { name: 'Home' });
  readonly deleteAccountLink: Locator = this.page.getByRole('link', { name: 'Delete Account' });
  readonly loggedInAsText: Locator = this.page.getByText(/Logged in as/);

  constructor(page: Page) {
    super(page);
  }

  async clickSignupLogin(): Promise<void> {
    await this.signupLoginLink.click();
  }

  async clickProducts(): Promise<void> {
    await this.productsLink.click();
  }

  async clickCart(): Promise<void> {
    await this.cartLink.click();
  }

  async clickContactUs(): Promise<void> {
    await this.contactUsLink.click();
  }

  async clickHome(): Promise<void> {
    await this.homeLink.click();
  }

  async clickDeleteAccount(): Promise<void> {
    await this.deleteAccountLink.click();
  }
}
