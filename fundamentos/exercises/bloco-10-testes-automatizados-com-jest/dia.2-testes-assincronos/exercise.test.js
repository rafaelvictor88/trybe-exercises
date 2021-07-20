const { test, expect } = require('@jest/globals');
const uppercase = require('./exercise1');

test('Testa se a função aplica corretamente a transformação para Uppercase.', (done) => {
  expect(uppercase('xablau', callback)).toBe('XABLAU');
  done();
})