const formInput = document.querySelector('#font-size-control');
const formText = document.querySelector('#text');

formInput.addEventListener('input', onChangeRange);

function onChangeRange() {
    console.log(formInput.value);
    formText.style.fontSize = formInput.value + 'px';
}