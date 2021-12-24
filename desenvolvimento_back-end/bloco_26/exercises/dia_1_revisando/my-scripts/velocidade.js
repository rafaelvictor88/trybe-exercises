// Importa o módulo readline-sync;
const readline = require('readline-sync');

// Define as variáveis com as perguntas para receber os valores;
const distance = readline.questionInt('Qual a distância percorrida?(m) ');
const time = readline.questionInt('Em quanto tempo foi percorrida a distância acima?(s) ');

// Função que calcula a velocidade média;
const velocityCalculator = (distance, time) => {
  const velocity = (distance / time).toFixed(2);

  return console.log(`A sua velocidade foi ${velocity} m/s`);
}

velocityCalculator(distance, time);
