import { test, expect } from '@playwright/test';
import { UIElementsPage } from '../../pages/UIElementsPage';

test('Checkboxes', async ({ page }) => {
  const uiElementsPage = new UIElementsPage(page);

  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await uiElementsPage.checkCheckbox(0);
  await expect(uiElementsPage.getCheckboxByIndex(0)).toBeVisible();
});
