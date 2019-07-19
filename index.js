const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'


// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/kitchen', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

const newRecipe = new Recipe({title : "ratatouille", level: "Easy Peasy", ingredients: ["tomatoes", "eggplants", "zucchini", "onions"], cuisine: "French", dishType: "Dish", image: "#", duration : 10, creator: "Lison", created: "2019-07-19"})

Recipe.create(newRecipe) 
  .then(recipe1 => { 
    console.log(recipe1.title)
  })
  .catch(err => {
    console.log(err)
  })

Recipe.update({title: "Rigatoni alla Genovese"}, {$set: {duration: 100}})
  .then(console.log("is updated"))
  .catch(err => {
    console.log(err)
  })


Recipe.deleteOne({title: "Carrot Cake"})
  .then(console.log("is deleted"))
  .catch(err => {
    console.log(err)
  })



// Recipe.find(function (err, Recipe) {
//   if (err) return console.error(err);
//   console.log(recipe);
// })

