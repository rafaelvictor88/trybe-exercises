const myNumbers = require('./ex1');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

// Solução criada com auxílio do gabarito;
const callMyNumbers = async () => {
  const myArray = Array.from({ length: 3 }).map(getRandomNumber);

  try {
    const result = await myNumbers(...myArray);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

callMyNumbers();