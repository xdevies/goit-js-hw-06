const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingridients");

const ingredientsItems = ingredients.map((ingredients) => {
  const li = document.createElement("li");
  li.classList.add("item");
  return li;
})

console.log(ingredientsItems);