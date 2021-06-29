const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator} - currentValue: ${currentValue}`);
    return accumulator.concat(currentValue);
  }, []);
}

console.log(flatten());