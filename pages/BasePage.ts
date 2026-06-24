import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async acceptConsent(): Promise<void> {
    await this.page.getByRole('button', { name: 'Consent' }).click();
  }

  async clickDialogAccept(): Promise<void> {
    this.page.on('dialog', (dialog) => dialog.accept());
  }
}
