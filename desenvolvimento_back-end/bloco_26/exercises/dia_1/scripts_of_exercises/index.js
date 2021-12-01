const {calculadoraIMC, situacaoImc} = require('./imc');
const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso?\nR: ');
const altura = readline.questionFloat('Qual a sua altura?\nR: ');
const result = calculadoraIMC(peso, altura);
const response = situacaoImc(result);

console.log(`Com essa altura e esse peso seu IMC é: ${result}\nVocê está ${response}`);