function logInValidation() {
  const logInButton = document.querySelector('#button-header');

  logInButton.addEventListener('click', (event) => {
    const userEmail = document.querySelector('#email-input').value;
    const userPassword = document.querySelector('#input-password').value;

    event.preventDefault();

    if (userEmail === 'tryber@teste.com' && userPassword === '123456') {
      alert('Olá, Tryber!');
      return;
    }
    alert('Email ou senha inválidos.');
  });
}

window.onload = () => {
  logInValidation();
};
