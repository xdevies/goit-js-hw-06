const range = document.getElementById('font-size-control');
const text = document.getElementById('text');

range.addEventListener('input', (event) => {
  const value = event.target.value;
  text.style.fontSize = `${value}px`;
});