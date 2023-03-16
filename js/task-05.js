
const nameInput = {
  input: document.querySelector('[id="name-input"]'),
  output: document.querySelector('[id="name-output"]'),
  spanEl: document.querySelector('span')
  }
nameInput.input.addEventListener('input', onInputChange);
  function onInputChange (event) {
    if (event.currentTarget.value.trim()!== "") {
      nameInput.output.textContent = event.currentTarget.value;
    }
  }