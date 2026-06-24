import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ContactUsPage } from '../../pages/ContactUsPage';
import { environment } from '../../config/environment';

test('Contact Us Form', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  const testData = {
    name: 'Test',
    email: 'test@test',
    subject: 'Playwright',
    message: 'Playwright is awesome',
    fileName: 'myfile.txt',
  };

  await homePage.navigate(environment.baseUrl);
  await homePage.acceptConsent();
  await homePage.clickContactUs();

  await expect(contactUsPage.getInTouchHeading).toBeVisible();

  await contactUsPage.fillName(testData.name);
  await contactUsPage.fillEmail(testData.email);
  await contactUsPage.fillSubject(testData.subject);
  await contactUsPage.fillMessage(testData.message);

  await contactUsPage.uploadFileFromProjectFolder(testData.fileName);

  contactUsPage.acceptDialog();
  await contactUsPage.clickSubmit();
});
