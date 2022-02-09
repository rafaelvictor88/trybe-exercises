const myNumbers = (num1, num2, num3) => {
  const myPromise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error('Informe apenas números.'));
    const result = (num1 + num2) * num3;
    if (result < 50) reject(new Error('Valor muito baixo.'))
    resolve(result);
  });
  return myPromise;
}
// // Chamada para o valor "correto";
// myNumbers(10, 20, 30)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// // Chamada para o caso de valor muito baixo;
// myNumbers(1, 2, 3)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// // Chamada para o caso de erro;
// myNumbers('a', 2, 3)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

module.exports = myNumbers;