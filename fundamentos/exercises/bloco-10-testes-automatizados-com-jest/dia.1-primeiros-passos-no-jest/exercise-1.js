function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

console.log(sum(10, 2));

module.exports = sum; 
// implemente seus testes aqui