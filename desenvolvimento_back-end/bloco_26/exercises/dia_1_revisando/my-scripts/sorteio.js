// Importa o módulo readline-sync;
const readline = require('readline-sync');

// Cria a função que vai mostrar o resultado do jogo,
// recebe dois parâmetros para comparar;
const resultado = (playerNumber, randomNumber) => {
  if (playerNumber !== randomNumber) return console.log(`Opa, não foi dessa vez. O número era ${randomNumber}!`);

  return console.log('Parabéns, número correto!');
}

// Função para iniciar o jogo, também reinicia se solicitado;
const newGame = () => {
  const number = Math.floor(Math.random() * 11);
  const player = readline.questionInt('Em qual número de 0 a 10 eu estou pensando? ');

  resultado(player, number);

  const playAgain = readline.question(
    'Deseja jogar novamente?(Digite s para sim e qualquer outra coisa para não) '
    );

  if (playAgain.toLowerCase() !== 's') return 'Ok! Até a próxima.';

  newGame();
}

// Chama a função principal do jogo pel primeira vez;
newGame();
