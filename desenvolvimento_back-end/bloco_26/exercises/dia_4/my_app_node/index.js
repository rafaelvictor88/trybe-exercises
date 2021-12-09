const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const { getSimpsons, setSimpsons } = require('./utils');

const app = express();
app.use(bodyParser.json());

// exercise 1;
app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

// exercise 2;
app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.json({ message: `Hello, ${name}` });
});

// exercise 3;
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}!` });
});

// exercise 4;
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.` });
});

// exercise 6;
// Utilização do rescue foi feita após consulta ao gabarito;
app.get('/simpsons', rescue(async (req, res) => {
  const file = await getSimpsons();

  res.status(200).json(file);
}));

// exercise 7;
app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const simpsonById = simpsons.find(simpson => simpson.id === id);

  if (!simpsonById) return res.status(404).json({ message: 'Simpson not found' });
  
  res.status(200).json(simpsonById);
}));

// exercise 8;
app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  };
  
  simpsons.push({ id, name });
  await setSimpsons(simpsons);
  res.status(200).json({});
}));

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => {
  console.log('App listening on port 3001');
});