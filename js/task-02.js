const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.querySelector('#ingredients');


const element = ingredients.map(ingredient => {
    const navItemEl = document.createElement('li');
    navItemEl.textContent = ingredient;

    return navItemEl;
});

navEl.append(...element);

console.log(navEl);



