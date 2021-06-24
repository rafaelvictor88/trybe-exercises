const newEmployees = () => {
  const employees = {
    id1: newFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newFunction = (nomeCompleto) => {
  let splitName = nomeCompleto.split(' ');
  splitName = splitName.join('_').toLowerCase();
  const object = {
    name: nomeCompleto,
    // email: `${splitName[0]}_${splitName[1]}@trybe.com`
    email: `${splitName}@trybe.com`,
  }
  return object;
};

console.log(newEmployees().id2);

