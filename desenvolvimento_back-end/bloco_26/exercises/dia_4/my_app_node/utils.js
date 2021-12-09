// exercise 5;
// Gabarito consultado para criar esse arquivo;
const fs = require('fs/promises');

async function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf8')
    .then(content => JSON.parse(content));
};

async function setSimpsons(newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
};

module.exports = { getSimpsons, setSimpsons };