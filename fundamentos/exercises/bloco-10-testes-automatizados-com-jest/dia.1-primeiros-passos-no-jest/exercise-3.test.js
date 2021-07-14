const { test, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./exercise-3');

test('Verifique se a chamada myRemoveWithoutCopy() retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('Verifique se a chamada myRemoveWithoutCopy() não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
  expect(myRemoveWithoutCopy([10, 15, 20, 25], 10)).toEqual([10, 15, 20, 25]);
});