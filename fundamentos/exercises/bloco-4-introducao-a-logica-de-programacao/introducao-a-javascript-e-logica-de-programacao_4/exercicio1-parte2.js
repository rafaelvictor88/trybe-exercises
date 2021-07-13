function palindromo(string){

  for(let indexUp = 0; indexUp <= string.length - 1; indexUp += 1) {
  for(let indexDown = string.length - 1; indexDown >= 0; indexDown -= 1) {
    if (string[indexUp] === string[indexDown]) {
      return true;
    } else {
      return false;
    }
  }
  } 
};

console.log(palindromo('arara'));
console.log(palindromo('roubo'));
