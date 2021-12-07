const readline = require('readline-sync');
const fs = require('fs').promises;

const answerUser = readline.question('Qual arquivo você quer que seja lido? ');

const readWantedFile = async (answerUser) => {
  // console.log(answerUser);
  try {
    const response = await fs.readFile(`${answerUser}.txt`, 'utf-8');
    console.log(response);
  } catch (e) {
    console.error('Arquivo inexistente');
    process.exit(1);
  }
};

readWantedFile(answerUser);