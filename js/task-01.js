
const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(listEl => {
  console.log(`Category: ${listEl.firstElementChild.textContent}`);
  console.log(`Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`);
});