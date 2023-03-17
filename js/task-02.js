const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItem =  ingredients.map(ingredient => { 
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList = "item";
  return listItem;
});

ingredientsList.append(...ingredientsItem);