const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./index');

test('adds two positive numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('adds negative numbers', () => {
  assert.strictEqual(add(-1, -2), -3);
});