const express = require('express');

const routerDelete = express.Router();

routerDelete.delete('/plant/:id');

module.exports = routerDelete;
