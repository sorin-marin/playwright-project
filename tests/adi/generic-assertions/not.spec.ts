import { test, expect } from '@playwright/test';

test('6 + 4 equals 3 + 7', () => {
  const a = 6 + 4;
  const b = 3 + 7 + 2;

  expect(a).not.toEqual(b);
});
