const formInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
formInput.addEventListener('input', onInputChange);
function onInputChange(event) {
    if(formInput.value === ''){
        nameOutput.textContent = 'незнакомец';
    } else {
        nameOutput.textContent = event.currentTarget.value;
    }
}