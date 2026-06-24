import { test, expect } from '@playwright/test';
import { UIElementsPage } from '../../pages/UIElementsPage';

test('Adi is awesome', async ({ page }) => {
  const uiElementsPage = new UIElementsPage(page);

  await page.goto('http://127.0.0.1:8080/contact.html');
  await uiElementsPage.fillNameField('Sorin');

  await expect(uiElementsPage.sendMessageButton).toBeVisible();
  await uiElementsPage.clickSendMessage();

  await uiElementsPage.fillNameField('Sorin');
});
