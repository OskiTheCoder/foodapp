exports.getAllRecipes = (request, response) => {
  let recipes = [
    {
      title: 'vegan chicken burrito',
      description:
        'delicious, simple, and highly customizable recipe for a vegan chicken burrito that you will love',
      ingredients: [
        'tortilla',
        'vegan chicken',
        'beans',
        'rice',
        'tomato',
        'peppers',
      ],
      steps: [
        'get tortilla',
        'put everything inside tortilla',
        'eat everything',
      ],
      costtomake: '6.25',
      cooktime: '30 min',
    },
    {
      title: 'pasta',
      description: 'extremely quick and delicious pasta',
      ingredients: ['pasta', 'pasta sauce', 'spices'],
      steps: [
        'boil pasta',
        'heat up sauce',
        'combine pasta with sauce and add spices',
      ],
      costtomake: '3.25',
      cooktime: '25 min',
    },
  ];
  return response.json(recipes);
};
