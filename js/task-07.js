
const fontControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

const setFontSize = (value) => {
  textSpan.style.fontSize = `${value}px`;
};

fontControl.addEventListener('input', (event) => {
  setFontSize(event.target.value);
});
