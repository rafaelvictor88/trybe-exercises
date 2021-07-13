const oddsAndEvens = ([13, 3, 4, 10, 7, 2]) => {

  for (let indexM = 0; indexM <= array.length; indexM += 1) {
    for (let index = 1; index <= array.length; index += 1) {
      if (array[index] < array[indexM]) {
        array[indexM] = array[index];
      } else {
        array[indexM] = array[indexM];
      }
    }
  }
  return array;
};

console.log(oddsAndEvens());