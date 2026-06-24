import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountPage extends BasePage {
  // Locators
  readonly enterAccountInformationHeading: Locator = this.page.getByText('Enter Account Information');
  readonly accountCreatedHeading: Locator = this.page.getByRole('heading', { name: 'Account Created!' });
  readonly accountDeletedHeading: Locator = this.page.getByRole('heading', { name: 'Account Deleted!' });
  readonly mrRadio: Locator = this.page.getByRole('radio', { name: /Mr\./ });
  readonly passwordInput: Locator = this.page.getByLabel('password');
  readonly firstNameInput: Locator = this.page.getByText('First name *');
  readonly lastNameInput: Locator = this.page.getByText('Last name *');
  readonly addressInput: Locator = this.page.getByRole('textbox', { name: /Address \* \(Street/ });
  readonly countrySelect: Locator = this.page.getByLabel('country');
  readonly stateInput: Locator = this.page.getByText('State *');
  readonly cityInput: Locator = this.page.getByText('City *');
  readonly zipCodeInput: Locator = this.page.getByLabel('city'); // Note: the test uses this for zip code
  readonly mobileInput: Locator = this.page.getByText('Mobile Number *');
  readonly createAccountButton: Locator = this.page.getByRole('button', { name: 'Create Account' });
  readonly continueLink: Locator = this.page.getByRole('link', { name: 'Continue' });

  constructor(page: Page) {
    super(page);
  }

  async selectMr(): Promise<void> {
    await this.mrRadio.check();
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
  }

  async fillAddress(address: string): Promise<void> {
    await this.addressInput.fill(address);
  }

  async selectCountry(country: string): Promise<void> {
    await this.countrySelect.selectOption(country);
  }

  async fillState(state: string): Promise<void> {
    await this.stateInput.fill(state);
  }

  async fillCity(city: string): Promise<void> {
    await this.cityInput.fill(city);
  }

  async fillZipCode(zipCode: string): Promise<void> {
    await this.zipCodeInput.fill(zipCode);
  }

  async fillMobileNumber(mobile: string): Promise<void> {
    await this.mobileInput.fill(mobile);
  }

  async clickCreateAccount(): Promise<void> {
    await this.createAccountButton.click();
  }

  async clickContinue(): Promise<void> {
    await this.continueLink.click();
  }
}
