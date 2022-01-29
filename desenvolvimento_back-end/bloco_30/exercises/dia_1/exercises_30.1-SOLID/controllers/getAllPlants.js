const servGetAllPlants = require('../services/getAllPlants');

module.exports = contGetAllPlants = (req, res, next) => {
  try {
    const allPlants = servGetAllPlants();

    return res.status(200).json(allPlants);
  } catch (error) {
    next(error);
  }
}
