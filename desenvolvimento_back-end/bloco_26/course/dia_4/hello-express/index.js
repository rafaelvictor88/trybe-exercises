// Para fixar:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  const organizado = recipes.sort(function(a, b) {return a.name.localeCompare(b.name)});
  res.json(organizado);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes
    .filter((r) => r.name.includes(name)
    && r.price < parseInt(maxPrice)
    && r.price >= parseInt(minPrice));

  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  // console.log(req);
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (req, res) => {
  const organizado = drinks.sort(function(a, b) {return a.name.localeCompare(b.name)});
  res.json(organizado);
});

app.get('/drinks/search', function(req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.toLowerCase().includes(name));

  if (!filteredDrinks) return res.status(404).json({ message: 'No such drink' });

  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id, 10));

  if (!drink) return res.status(404).json({ message: 'drink not found' });

  res.status(200).json(drink);
});

app.post('/drinks', function(req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully' });
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.listen(3001, () => {
  console.log('Aplicação escutando na porta 3001!');
});