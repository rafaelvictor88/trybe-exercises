const readline = require('readline-sync');

const respostaJogo = (numero, resposta) => {
  if(numero !== resposta) return console.log(`Que pena você errou! O número era ${numero}`);

  return console.log("Parabéns, número correto!");
};

const inicioJogo = () => {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  respostaJogo(numero, resposta);

  const jogarNovamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim e qualquer outra coisa para não): '
  );
  if (jogarNovamente !== 's') return console.log("Ok! Até a próxima.");

  inicioJogo();
};

inicioJogo();
