// Exemplo de importação de módulo com apenas um valor;
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl);

// Exemplo de importação de módulo em objeto (para importar mais de 1 valor);
const brlValue = require('./brlValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7

// Exemplo de importação de módulo em objeto, utilizando desestruturação;
const { brl, usdToBrl } = require('./brValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7