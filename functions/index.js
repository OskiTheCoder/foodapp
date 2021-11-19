const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const app = require('express')();
const {
  editRecipe,
  deleteRecipe,
  postOneRecipe,
  getAllRecipes,
} = require('./APIs/recipes');

// recipes
app.get('/recipes', getAllRecipes);
app.post('/recipe', postOneRecipe);
app.delete('/recipe/:recipeId', deleteRecipe);
app.put('/recipe/:recipeId', editRecipe);

exports.api = functions.https.onRequest(app);
