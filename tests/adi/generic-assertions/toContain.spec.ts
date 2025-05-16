import { test, expect } from '@playwright/test';

test('fruits contains orange', () => {
  const fruits = ['apple', 'banana', 'orange', 'mango'];
  expect(fruits).toContain('orange');
});
