import { test, expect } from '@playwright/test';
import { on } from 'events';

test('name input is required', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/broken_images');

  const imageSrcs = await page
    .locator('img')
    .evaluateAll((images: HTMLImageElement[]) => {
      return images.map((image) => image.src);
    });

  for (const src in imageSrcs) {
    await page.goto(src);
  }
});
