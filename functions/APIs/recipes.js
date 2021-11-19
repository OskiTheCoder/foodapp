const { db } = require('../util/admin');

exports.getAllRecipes = (request, response) => {
  db.collection('recipes')
    .get()
    .then((data) => {
      let recipes = [];
      data.forEach((doc) => {
        recipes.push({
          recipeId: doc.id,
          title: doc.data().title,
          cooktime: doc.data().cooktime,
          costtomake: doc.data().costtomake,
          description: doc.data().description,
          ingredients: doc.data().ingredients,
          steps: doc.data().steps,
        });
      });
      return response.json(recipes);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
