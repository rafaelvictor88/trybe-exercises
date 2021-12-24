const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distância percorrida?(m) ');
const time = readline.questionInt('Em quanto tempo foi percorrida a distância acima?(s) ');

const velocityCalculator = (distance, time) => {
  const velocity = (distance / time).toFixed(2);

  return `A sua velocidade foi ${velocity} m/s`;
}

console.log(velocityCalculator(distance, time));