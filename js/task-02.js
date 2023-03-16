const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingridients");

const ingredientsItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList = "item";
  return listItem;
})

console.log(ingredientsItems);