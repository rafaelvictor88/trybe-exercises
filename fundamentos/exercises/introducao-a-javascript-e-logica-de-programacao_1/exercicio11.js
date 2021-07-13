let salarioBruto = 3000 ;
let salarioBase = 0;
let salarioLiquido = 0;
let valorIR = 0;
//console.log (salarioBase);

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto * 0.92
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto * 0.91
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto * 0.89
} else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88
}
//console.log (salarioBase);

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  valorIR = salarioBase * (7.5 /100) - 142.80
  salarioLiquido = salarioBase - valorIR 
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  valorIR = salarioBase * (15 / 100) - 354.80
  salarioLiquido = salarioBase - valorIR
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  valorIR = salarioBase * (22.5 / 100) - 636.13
  salarioLiquido = salarioBase - valorIR
} else if (salarioBase > 4664.68) {
  valorIR = salarioBase * (27.5 / 100) - 869.36
  salarioLiquido = salarioBase - valorIR
}

console.log(salarioLiquido);
