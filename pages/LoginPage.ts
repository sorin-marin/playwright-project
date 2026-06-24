import { Page, Locator, selectors } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // Locators
  readonly newUserSignupHeading: Locator = this.page.getByText('New User Signup!');
  readonly loginHeading: Locator = this.page.getByRole('heading', { name: 'Login to your account' });
  readonly signupForm: Locator = this.page.locator('form').filter({ hasText: 'Signup' });
  readonly loginForm: Locator = this.page.locator('form').filter({ hasText: 'Login' });
  readonly namePlaceholder: Locator = this.page.getByPlaceholder('Name');
  readonly signupEmailPlaceholder: Locator = this.signupForm.getByPlaceholder(/Email Address/);
  readonly signupButton: Locator = this.page.getByRole('button', { name: 'Signup' });
  readonly loginEmailInput: Locator = this.page.getByTestId('login-email');
  readonly loginPasswordInput: Locator = this.page.getByTestId('login-password');
  readonly loginButton: Locator = this.page.getByRole('button', { name: 'Login' });
  readonly incorrectEmailPassword: Locator = this.page.getByText('Your email or password is incorrect!');
  readonly emailAlreadyExistsError: Locator = this.page.getByText('Email Address already exist!');
  readonly signupEmailTestId: Locator = this.page.getByTestId('signup-email');

  constructor(page: Page) {
    super(page);
    selectors.setTestIdAttribute('data-qa');
  }

  async fillSignupName(name: string): Promise<void> {
    await this.namePlaceholder.fill(name);
  }

  async fillSignupEmail(email: string): Promise<void> {
    await this.signupEmailPlaceholder.fill(email);
  }

  async fillSignupEmailTestId(email: string): Promise<void> {
    await this.signupEmailTestId.fill(email);
  }

  async clickSignup(): Promise<void> {
    await this.signupButton.click();
  }

  async fillLoginEmail(email: string): Promise<void> {
    await this.loginEmailInput.fill(email);
  }

  async fillLoginPassword(password: string): Promise<void> {
    await this.loginPasswordInput.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async manageCookies(): Promise<void> {
    await this.page.getByRole('button', { name: 'Manage options' }).click();
    await this.page
      .locator('label')
      .filter({ hasText: 'Legitimate interest (30' })
      .locator('span')
      .nth(3)
      .click();
    await this.page
      .locator('label')
      .filter({ hasText: 'Legitimate interest (43' })
      .locator('span')
      .nth(3)
      .click();
    await this.page
      .locator('label')
      .filter({ hasText: 'Legitimate interest (13' })
      .locator('span')
      .nth(3)
      .click();
    await this.page
      .locator('label')
      .filter({ hasText: 'Legitimate interest (22' })
      .locator('span')
      .nth(3)
      .click();
    await this.page
      .getByText(
        'Develop and improve servicesInformation about your activity on this service,'
      )
      .click();
    await this.page
      .locator('label')
      .filter({ hasText: 'Legitimate interest (34' })
      .locator('span')
      .nth(3)
      .click();
    await this.page
      .locator('label')
      .filter({ hasText: 'Legitimate interest (3 vendors)' })
      .locator('span')
      .nth(3)
      .click();
    await this.page.getByRole('button', { name: 'Confirm choices' }).click();
  }
}
