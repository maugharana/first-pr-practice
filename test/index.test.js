const test = require('node:test');
const assert = require('node:assert');
const { capitalize } = require('../index');

test('capitalize turns first letter uppercase', () => {
  assert.strictEqual(capitalize('hello'), 'Hello');
});

test('capitalize handles empty string', () => {
  assert.strictEqual(capitalize(''), '');
});
