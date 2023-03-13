const input = document.getElementById("validation-input");
const requiredLength = parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  if (input.value.length === requiredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});