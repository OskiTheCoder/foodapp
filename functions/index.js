const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const app = require('express')();
const { getAllRecipes } = require('./APIs/recipes');

app.get('/recipes', getAllRecipes);
exports.api = functions.https.onRequest(app);
