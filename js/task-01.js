const countCategories = document.querySelectorAll('.item');
console.log(`В списке ${countCategories.length} категории.`);

for (const countCategorie of countCategories) {
    const titleCategories = countCategorie.querySelector('h2');
    const elementCategories = countCategorie.querySelectorAll('li');
    console.log(`Категория: ${titleCategories.textContent}`);
    console.log(`Количество элементов: ${elementCategories.length}`);
}
