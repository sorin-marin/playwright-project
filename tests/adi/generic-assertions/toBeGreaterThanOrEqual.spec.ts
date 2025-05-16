import { test, expect } from '@playwright/test';

test('5 is grater or equal to 2', () => {
  expect(5).toBeGreaterThanOrEqual(2);
});
