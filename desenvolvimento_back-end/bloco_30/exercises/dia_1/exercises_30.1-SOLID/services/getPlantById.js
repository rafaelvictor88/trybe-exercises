const getPlantById = require('../models/getPlantById');

module.exports = servGetPlantById = (id) => {
  const plant = getPlantById(id);

  return plant;
}