const myNumbers = require('./ex1');

// * Minha solução;
const randomNumbers = () => {
  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1);

  myNumbers(num1, num2, num3)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
}

randomNumbers();

// * Solução do gabarito;
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const callMyNumbers = () => {
  const myArray = Array.from({ length: 3 }).map(getRandomNumber);

  myNumbers(...myArray)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
}

callMyNumbers();