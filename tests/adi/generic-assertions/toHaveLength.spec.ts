import { test, expect } from '@playwright/test';

test('fruits length is 4', () => {
  const fruits = ['apple', 'banana', 'orange', 'mango'];

  expect(fruits).toHaveLength(4);
});
