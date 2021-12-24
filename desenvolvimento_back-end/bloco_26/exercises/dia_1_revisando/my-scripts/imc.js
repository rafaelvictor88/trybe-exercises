const readline = require('readline-sync');

const weight = readline.questionFloat('Qual o seu peso?(kg) ');
const height = readline.questionFloat('Qual a sua altura?(m) ');

const imcCalculator = (weight, height) => {
  const imc = (weight / (height * 2)).toFixed(2);

  const imcClassification = (imc) => {
    if (imc < 18.5) return 'você está abaixo do peso (magreza)!';
    if (imc >= 18.5 && imc <= 24.9) return 'você com o peso normal!';
    if (imc >= 25.0 && imc <= 29.9) return 'você está acima do peso (sobrepeso)!';
    if (imc >= 30.0 && imc <= 34.9) return 'você está com Obesidade grau I!';
    if (imc >= 35.0 && imc <= 39.9) return 'você está com Obesidade grau II!';
    if (imc >= 40.0) return 'você está com Obesidade graus III e IV!';
  }

  const imcClass = imcClassification(imc);

  return `Seu IMC é ${imc} e ${imcClass}`;
}

console.log(imcCalculator(weight, height));