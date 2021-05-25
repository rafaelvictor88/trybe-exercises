function theBiggerValue(strings){
  let biggerString = strings[0];

  for(let index in strings){
    if(biggerString.length < strings[index].length)
    biggerString = strings[index];
  }
  return biggerString;
};

console.log(theBiggerValue(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
