import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class UIElementsPage extends BasePage {
  // Checkboxes
  readonly checkbox: Locator = this.page.getByRole('checkbox');

  // Remove Elements
  readonly addElementButton: Locator = this.page.getByRole('button', { name: 'Add Element' });
  readonly deleteButton: Locator = this.page.getByRole('button', { name: 'Delete' });
  readonly elementalSeleniumLink: Locator = this.page.getByRole('link', { name: 'Elemental Selenium' });

  // Get By Label
  readonly nameLabel: Locator = this.page.getByLabel('Name:');
  readonly sendMessageButton: Locator = this.page.getByRole('button', { name: 'Send Message' });

  constructor(page: Page) {
    super(page);
  }

  getCheckboxByIndex(index: number): Locator {
    return this.checkbox.nth(index);
  }

  async checkCheckbox(index: number): Promise<void> {
    await this.getCheckboxByIndex(index).check();
  }

  async clickAddElement(): Promise<void> {
    await this.addElementButton.click();
  }

  async clickAddElementMultipleTimes(count: number): Promise<void> {
    await this.addElementButton.click({ clickCount: count });
  }

  getDeleteButtonByIndex(index: number): Locator {
    return this.deleteButton.nth(index);
  }

  async clickDeleteButton(index: number): Promise<void> {
    await this.getDeleteButtonByIndex(index).click();
  }

  async clickElementalSeleniumLink(): Promise<void> {
    await this.elementalSeleniumLink.click();
  }

  async fillNameField(name: string): Promise<void> {
    await this.nameLabel.fill(name);
  }

  async clickSendMessage(): Promise<void> {
    await this.sendMessageButton.click();
  }
}
