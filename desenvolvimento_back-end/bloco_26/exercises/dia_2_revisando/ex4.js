const fs = require('fs').promises;

// // exercício 4.1
// fs.readFile('./simpsons.json', 'utf8')
//   .then((data) => {
//     return JSON.parse(data);
//   })
//   .then((simpsons) => {
//     simpsons.map(({ id, nome }) => console.log(`${id}- ${nome}`))
//   })

  // exercício 4.2
const getSimpsonById = async (id) => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf8')
    .then((data) => JSON.parse(data));
  
  const chosenSimpson = simpsons.find((simpson) => simpson.id == id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado!');
  }

  return console.log(`${chosenSimpson.id} - ${chosenSimpson.nome}`);
}

getSimpsonById(4);