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

exports.postOneRecipe = (request, response) => {
  const body = request.body;
  const newRecipeItem = {
    title: body.title,
    cooktime: body.cooktime,
    costtomake: body.costtomake,
    description: body.description,
    ingredients: body.ingredients,
    steps: body.steps,
  };
  db.collection('recipes')
    .add(newRecipeItem)
    .then((doc) => {
      const responseRecipeItem = newRecipeItem;
      responseRecipeItem.id = doc.id;
      return response.json(responseRecipeItem);
    })
    .catch((err) => {
      response.status(500).json({ error: 'Oops, something went wrong!' });
      console.error(err);
    });
};

exports.deleteRecipe = (request, response) => {
  const document = db.doc(`/recipes/${request.params.recipeId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: 'Recipe not found' });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: 'Delete successfull' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.editRecipe = (request, response) => {
  let document = db.collection('recipes').doc(`${request.params.recipeId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: 'Updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({
        error: err.code,
      });
    });
};
