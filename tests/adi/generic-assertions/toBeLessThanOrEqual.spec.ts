import { test, expect } from '@playwright/test';

test('5 is less or equal to 5', () => {
  expect(5).toBeLessThanOrEqual(5);
});
