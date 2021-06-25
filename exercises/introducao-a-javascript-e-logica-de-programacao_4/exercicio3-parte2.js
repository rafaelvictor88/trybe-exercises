function indexOfSmaller(numbers){
  let indexSmaller = 0;

  for(let index in numbers){
    if(numbers[index] < numbers[indexSmaller]){
      indexSmaller = index;
    }
  }
  return indexSmaller;
}

console.log(indexOfSmaller([2, 4, -6, 7, -10, 0, -3]));
