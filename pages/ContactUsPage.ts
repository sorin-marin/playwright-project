import { Page, Locator, selectors } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';

export class ContactUsPage extends BasePage {
  // Locators
  readonly getInTouchHeading: Locator = this.page.getByRole('heading', { name: 'Get In Touch' });
  readonly nameInput: Locator = this.page.getByTestId('name');
  readonly emailInput: Locator = this.page.getByTestId('email');
  readonly subjectInput: Locator = this.page.getByTestId('subject');
  readonly messageInput: Locator = this.page.getByTestId('message');
  readonly chooseFileButton: Locator = this.page.getByRole('button', { name: 'Choose File' });
  readonly submitButton: Locator = this.page.getByTestId('submit-button');

  constructor(page: Page) {
    super(page);
    selectors.setTestIdAttribute('data-qa');
  }

  async fillName(name: string): Promise<void> {
    await this.nameInput.fill(name);
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillSubject(subject: string): Promise<void> {
    await this.subjectInput.fill(subject);
  }

  async fillMessage(message: string): Promise<void> {
    await this.messageInput.fill(message);
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.chooseFileButton.setInputFiles(filePath);
  }

  async uploadFileFromProjectFolder(fileName: string): Promise<void> {
    const fullPath = path.join(__dirname, '../tests/sorin/', fileName);
    await this.uploadFile(fullPath);
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async acceptDialog(): Promise<void> {
    this.clickDialogAccept();
  }
}
