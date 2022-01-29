const defaultPlants = require('../repository/defaultPlants');

module.exports = getPlantById = (id) => {
  const plant = defaultPlants.filter((plant) => plant.id === Number(id));

  return plant;
};