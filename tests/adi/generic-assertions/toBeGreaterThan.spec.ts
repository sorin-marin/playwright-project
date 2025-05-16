import { test, expect } from '@playwright/test';

test('5 is grater than 4', () => {
  expect(5).toBeGreaterThan(4);
});
