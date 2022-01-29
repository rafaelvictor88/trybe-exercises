const servGetPlantById = require('../services/getPlantById');

module.exports = contGetPlantById = (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = servGetPlantById(id);

    return res.status(200).json(plant);
  } catch (error) {
    next(error);
  }
}