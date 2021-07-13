let valorCusto = 100;
let valorVenda = 200;

let valorCustoTotal = valorCusto * 1.2
//console.log(valorCustoTotal);

let lucro = valorVenda - valorCustoTotal
// console.log(lucro);

let vendasTotal = 1000;
let lucroTotal = lucro * vendasTotal;


if (valorCusto < 0 || valorVenda < 0) {
  console.log("ERRO!!! Valor Inválido. Fim do Programa!");
} else {
  console.log(lucroTotal);
}
