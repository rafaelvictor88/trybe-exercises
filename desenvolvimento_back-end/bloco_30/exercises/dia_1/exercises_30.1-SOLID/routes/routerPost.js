const express = require('express');

const routerPost = express.Router();

routerPost.post('/plant');
routerPost.post('/plant/:id');

module.exports = routerPost;
