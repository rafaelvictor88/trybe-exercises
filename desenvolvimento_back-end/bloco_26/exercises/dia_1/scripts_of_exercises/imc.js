const calculadoraIMC = (peso, altura) => {
  const resultadoImc = (peso / Math.pow(altura, 2)).toFixed(2);
  return resultadoImc;
};

const situacaoImc = (resultadoImc) => {
  if(resultadoImc < 18.5) {
    return "Abaixo do peso (magreza)";
  } else if(resultadoImc >= 18.5 || resultadoImc <= 24.9) {
    return "com o Peso normal";
  } else if(resultadoImc >= 25.0 || resultadoImc <= 29.9) {
    return "Acima do peso (sobrepeso)";
  } else if(resultadoImc >= 30.0 || resultadoImc <= 34.9) {
    return "com Obesidade grau I";
  } else if(resultadoImc >= 35.0 || resultadoImc <= 39.9) {
    return "com Obesidade grau II";
  } else if(resultadoImc >= 40.0) {
    return "com Obesidade grau III e IV";
  }
};

module.exports = {calculadoraIMC, situacaoImc};