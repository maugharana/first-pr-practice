const test = require('node:test');
const assert = require('node:assert');
const { capitalize, reverse } = require('../index');

test('capitalize turns first letter uppercase', () => {
  assert.strictEqual(capitalize('hello'), 'Hello');
});

test('capitalize handles empty string', () => {
  assert.strictEqual(capitalize(''), '');
});

test('reverse reverses a string', () => {
  assert.strictEqual(reverse('hello'), 'olleh');
});

test('reverse handles empty string', () => {
  assert.strictEqual(reverse(''), '');
});
