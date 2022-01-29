const express = require('express');

const contGetAllPlants = require('../controllers/getAllPlants');
const contGetPlantById = require('../controllers/getPlantById');

const routerGet = express.Router();

routerGet.get('/plants', contGetAllPlants);
routerGet.get('/plant/:id', contGetPlantById);
routerGet.get('/sunny/:id');

module.exports = routerGet;
