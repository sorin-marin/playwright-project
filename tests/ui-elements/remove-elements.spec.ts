import { test, expect } from '@playwright/test';
import { UIElementsPage } from '../../pages/UIElementsPage';

test('Add/Remove Elements', async ({ page }) => {
  const uiElementsPage = new UIElementsPage(page);

  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  await expect(uiElementsPage.addElementButton).toBeVisible();
  await uiElementsPage.clickAddElementMultipleTimes(2);
  await expect(uiElementsPage.addElementButton).toBeVisible();

  await uiElementsPage.clickDeleteButton(0);
  await uiElementsPage.clickDeleteButton(0);

  await uiElementsPage.clickElementalSeleniumLink();
});
