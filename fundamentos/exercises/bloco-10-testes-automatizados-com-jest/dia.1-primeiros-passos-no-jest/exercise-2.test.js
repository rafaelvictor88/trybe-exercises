const { test, expect } = require('@jest/globals');
const myRemove = require('./exercise-2');

test('Verifique se a chamada myRemove() retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('Verifique se a chamada myRemove() não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Verifique se a chamada myRemove() retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});