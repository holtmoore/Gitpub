const express = require('express');
const app = express();
const PORT = 3000;


const drinks = require('./models/drinks.js');
const food = require("./models/food.js");





app.set('view engine', 'ejs');


app.get('/drinks', (req, res) => {
  res.render('drinks_index', { drinks: drinks });
});

app.get('/drinks/:id', (req, res) => {
  const id = req.params.id;
  const drink = drinks[id];
  res.render('drinks_show', { drink: drink });
});

app.get("/food", (req, res) => {
    res.render("food_index", { food });
});

app.get("/food/:id", (req, res) => {
    const id = req.params.id;
    const foodItem = food[id];
    res.render('food_show', { food: foodItem });
});



app.listen(PORT, () => {
    console.log(`PORT: ${PORT}, Welcome to the Gitpub App!`);
  });