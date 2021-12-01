const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distâcia que você percorreu?\nR:');
const tempo = readline.questionInt('Em quanto tempo percorreu a distâcia acima?\nR:');

const calculoVelocidade = (distancia, tempo) => {
  return (distancia / tempo).toFixed(2);
};

const response = `Você estava a uma velocidade de ${calculoVelocidade(distancia, tempo)}m/s.`;

console.log(response);