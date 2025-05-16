import { test, expect } from '@playwright/test';

test('5 is less than 9', () => {
  expect(5).toBeLessThan(9);
});
