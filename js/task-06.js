
const inputEl = document.querySelector('#validation-input');
const requiredLength = parseInt(inputEl.dataset.length);

inputEl.addEventListener('blur', () => {
inputEl.classList.toggle('valid', inputEl.value.length === parseInt(inputEl.dataset.length));
inputEl.classList.toggle('invalid', inputEl.value.length !== parseInt(inputEl.dataset.length));
});