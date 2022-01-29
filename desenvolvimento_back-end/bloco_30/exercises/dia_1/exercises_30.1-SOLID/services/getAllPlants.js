const getAllPlants = require('../models/getAllPlants');

module.exports = servGetAllPlants = () => {
  const allPlants = getAllPlants();

  return allPlants;
}
