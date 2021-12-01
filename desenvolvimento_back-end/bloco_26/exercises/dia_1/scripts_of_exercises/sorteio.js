const readline = require('readline-sync');

const numeroJogador = readline.questionInt('Em qual número de 0 a 10 estou pensando? ')

const numeroAleatorio = (numeroJogador) => {
  const numAleatorio = parseInt(Math.random() * 10);

  const result = numAleatorio !== numeroJogador
    ? `Opa, não foi dessa vez. O número era ${numAleatorio}.`
    : "Parabéns, número correto!";

  return result;
};

const jogarNovamente = (numeroAleatorio, numeroJogador) => {
  const resposta = readline.question('Deseja jogar novamente? s/n: ');

  if (resposta === n) return console.log("Ok! Até a próxima.");
  if (resposta === s) return numeroAleatorio(numeroJogador);

};

console.log(numeroAleatorio(numeroJogador));
console.log(jogarNovamente());