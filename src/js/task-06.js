const formInput = document.querySelector('#validation-input');
const countInput = formInput.getAttribute('data-length');
const count = parseInt(countInput, 10);

formInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (formInput.value.length !== count) {
        formInput.classList.add('invalid');
        formInput.classList.remove('valid');
    }
    else {
        formInput.classList.add('valid');
        formInput.classList.remove('invalid');
    }
}



