import { test, expect } from '@playwright/test';

test('check two objects', () => {
  const a = { prop: 1 };
  const b = a;

  expect(a).toBe(b);
});
