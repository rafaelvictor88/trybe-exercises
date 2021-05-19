let nota = 45;

if (nota >= 90) {
  console.log("Parabéns, Excelente!!! Você recebeu 'A'. Continue assim.");
} else if (nota >= 80) {
  console.log("Parabéns, Muito Bom!!! Você recebeu 'B'. Mas ainda pode melhorar.");
} else if (nota >= 70) {
  console.log("Atenção!!! Você recebeu 'C'. Com mais esforço e dedicação podemos subir essa nota.");
} else if (nota >= 60) {
  console.log("Cuidado, Zona Perigosa. Você recebeu 'D'. Precisa estudar mais pra não ser reprovado.");
} else if (nota >= 50) {
  console.log("ALERTA VERMELHO. Você recebeu 'E'. Você não foi reprovado dessa vez, mas se não tomar cuidado poderá ser em breve.");
} else if (nota < 50) {
  console.log("Que pena, infelizmente você não atingiu o conceito mínimo para ser aprovado. Você recebeu 'F', vamos trabalhar mais e melhor para que esse cenário mude da próxima vez.");
}

