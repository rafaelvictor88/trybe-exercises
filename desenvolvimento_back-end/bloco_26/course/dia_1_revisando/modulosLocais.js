// Exemplo de exportação de pasta;

// meuModulo/funcionalidade-1.js
// Cria a funcionalidade-1 na pasta meuModulo e exporta;
module.exports = function () {
  console.log('funcionalidade1');
}

// meuModulo/funcionalidade-2.js
// Cria a funcionalidade-2 na pasta meuModulo e exporta;
module.exports = function () {
  console.log('funcionalidade2');
}

// meuModulo/index.js
// Cria o arquivo index.js para importar os arquivos e exportar "tudo junto";
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };

// minha-aplicacao/index.js
// Importa a o módulo em forma de pasta e mostra como utilizar o mesmo;
const meuModulo = require('./meuModulo');1

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();