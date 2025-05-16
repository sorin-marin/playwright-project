import { test, expect } from '@playwright/test';

test('contact send message button contains btn and btn-primary classes', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:8080/contact.html');

  const sendMessage = page.getByRole('button', { name: 'Send Message' });

  await expect(sendMessage).toContainClass('btn btn-primary');
});
