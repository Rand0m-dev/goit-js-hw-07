const countCategories = document.querySelectorAll('.item');
console.log(`В списке ${countCategories.length} категории.`);

countCategories.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${element.lastElementChild.children.length}`);
});
