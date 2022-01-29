const express = require('express');

const { routerGet } = require('./routes/routerIndex');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routerGet);
// console.log('cheguei aqui');


module.exports = app;