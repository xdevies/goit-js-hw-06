

const categoriesList = Array.from(document.querySelectorAll('#categories .item'));

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.map(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});

