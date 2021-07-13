// HoF
const prizeDrawResult = (numberPlayer) => {
  if (numberPlayer !== prizeDraw()) {
    return 'Tente novamente';
  }
  return 'Parabéns você ganhou';
}

// Sorteio
const prizeDraw = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(prizeDraw(5));