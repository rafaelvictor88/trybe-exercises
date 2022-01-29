const defaultPlants = require('../repository/defaultPlants');

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== id);
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  return defaultPlants;
};

module.exports = {
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
};

// const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  //   const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
  //     : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  //   const newPlant = {
    //     id,
    //     breed,
    //     needsSun,
    //     origin,
    //     specialCare: {
      //       waterFrequency,
      //       ...specialCare,
      //     },
      //     size,
      //   };
      //   return newPlant;
      // };
      