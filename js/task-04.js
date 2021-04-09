let counterValue = 0;

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const result = document.querySelector('#value');

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    result.textContent = counterValue;
});
incBtn.addEventListener('click', () => {
    counterValue += 1;
    result.textContent = counterValue;
});




