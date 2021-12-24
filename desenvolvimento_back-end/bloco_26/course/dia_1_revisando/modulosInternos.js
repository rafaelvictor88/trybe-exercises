// Exemplo de importação de módulo interno;
const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');

// Ps: Repare que o nome da variável pode ser qualquer um que escolhermos.
// O que importa mesmo é o nome do pacote que passamos como parâmetro para o require.