
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userEmail = loginForm.elements.email.value;
  const userPassword = loginForm.elements.password.value;

  if (!userEmail || !userPassword) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }

  const userData = { email: userEmail, password: userPassword };

  console.log(userData);

  loginForm.reset();
});


