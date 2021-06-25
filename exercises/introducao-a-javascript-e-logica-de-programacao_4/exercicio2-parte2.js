function indexOfBigger(numbers){
  let indexBigger = 0;

  for(let index in numbers){
    if(numbers[indexBigger] < numbers[index]){
      indexBigger = index;
    }
  }
  return indexBigger;
};

console.log(indexOfBigger([2, 3, 60, 7, 10, 1]));

















// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = indice;
//     }
//   }
//   return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4













