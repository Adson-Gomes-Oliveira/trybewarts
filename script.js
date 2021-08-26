function logInValidation() {
  const logInButton = document.querySelector('#trybewarts-button-header');

  logInButton.addEventListener('click', (event) => {
    const userEmail = document.querySelector('#trybewarts-input-emal').value;
    const userPassword = document.querySelector('#trybewarts-input-password').value;

    event.preventDefault();

    if (userEmail === 'tryber@teste.com' && userPassword === '123456') {
      alert('Olá, Tryber!');
      return;
    }
    alert('Email ou senha inválidos.');
  });
}

function formsButtom() {
  const submitButton = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');

  submitButton.setAttribute('disabled', 'disabled');

  checkbox.addEventListener('click', () => {
    const checkboxValue = document.querySelector('#agreement');

    if (checkboxValue.checked) {
      submitButton.removeAttribute('disabled', 'disabled');
      return;
    }

    submitButton.setAttribute('disabled', 'disabled');
  });
}

window.onload = () => {
  logInValidation();
  formsButtom();
};
