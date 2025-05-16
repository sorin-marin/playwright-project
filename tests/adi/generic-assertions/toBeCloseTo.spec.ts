import { test, expect } from '@playwright/test';

test('0.1 + 0.2 is close to 0.3', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
