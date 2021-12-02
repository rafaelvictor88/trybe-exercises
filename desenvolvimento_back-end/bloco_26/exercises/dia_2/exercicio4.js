const fs = require('fs').promises;

// Função para ler o arquivo(requisição) simpson.js
async function getSimpsons(arquivo) {
  const response = await fs.readFile(arquivo, 'utf8');

  return await JSON.parse(response);
}

// Ex1 - Lê o arquivo e retorna no formato id - nome;
async function readCharacters(nomeArquivo) {
  try {
    const response = await fs.readFile(nomeArquivo, 'utf8');

    const data = await JSON.parse(response);

    data.forEach((item) => {
      console.log(`${item.id} - ${item.name}`);
    });

  } catch (error) {
    console.log(error.message);
  }
}

// Ex2 - Recebe o id e retorna os detalhes do personagem, se não existir retorna msg de erro;
function detailsCharactersForId(id) {
  return new Promise(async (resolve, reject) => {

    const data = await getSimpsons('simpsons.json');

    const result = data.find((item) => Number(item.id) === id);

    result ? resolve(result) : reject(new Error("id não encontrado"));

  });
}

// Ex3 - Remove os personagens com id 10 e 6;
async function removeCharactersByIdTenAndSix() {
  const data = await getSimpsons('simpsons.json');
  const arrayFiltered = data.filter((item) => (
    Number(item.id) !== 10 && Number(item.id) !== 6
  ));

  await fs.writeFile('simpsons.json', JSON.stringify(arrayFiltered));
}

// Ex4 - Cria novo arquivo (simpsonFamily) com os ids de 1 a 4;
async function createFileWithFamily() {
  const data = await getSimpsons();
  const idsValid = [1, 2, 3, 4];
  const arrayFiltered = data.filter((item) => (
    idsValid.includes(Number(item.id))
  ));
  fs.writeFile('simpsonFamily.json', JSON.stringify(arrayFiltered))
}

// Ex5 - Adiciona à simpsonFamily o personagem com o nome 'Nelson Muntz';
async function appendNelsonInFamily() {
  const dataSimpson = await getSimpsons('simpsons.json')
  const dataFamily = await getSimpsons('simpsonFamily.json');
  const dataNelson = dataSimpson.filter((item) => (
    item.name === "Nelson Muntz"
  ))
  dataFamily.push(...dataNelson)

  fs.writeFile('simpsonFamily.json', JSON.stringify(dataFamily))
}

// Ex6 - Substitui o personagem 'Nelson Muntz' pela personagem 'Maggie Simpson';
async function replaceNelsonByMeggie() {
  const dataSimpson = await getSimpsons('simpsons.json')
  const dataFamily = await getSimpsons('simpsonFamily.json');
  const dataMeggie = dataSimpson.filter((item) => (
    item.name === "Maggie Simpson"
  ));

  const dataFiltered = dataFamily.filter((item) => (
    item.name !==  "Nelson Muntz" 
  ));

  dataFiltered.push(...dataMeggie)
  fs.writeFile('simpsonFamily.json', JSON.stringify(dataFiltered))
}

