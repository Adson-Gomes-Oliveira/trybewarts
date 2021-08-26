const form = document.querySelector('#data-form');

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

function counterText() {
  const textArea = document.querySelector('#textarea');
  const maxArea = 500;
  const counterSpan = document.querySelector('#counter');

  counterSpan.innerHTML = maxArea;

  textArea.addEventListener('input', () => {
    const areaValue = textArea.value;
    const areaValueSize = areaValue.length;

    counterSpan.innerHTML = maxArea - areaValueSize;
  });
}

function getText() {
  const createListItem = document.createElement('li');
  const createLabel = document.createElement('strong');
  const retrieveTextArea = document.querySelector('#textarea').value;

  createLabel.innerText = 'Observações: ';
  createListItem.innerText = retrieveTextArea;

  createListItem.insertAdjacentElement('afterbegin', createLabel);
  form.appendChild(createListItem);
}

function getName() {
  const createListItem = document.createElement('li');
  const createLabel = document.createElement('strong');
  const retrieveName = document.querySelector('#input-name').value;
  const retrieveLast = document.querySelector('#input-lastname').value;

  createLabel.innerText = 'Nome: ';
  createListItem.innerText = `${retrieveName} ${retrieveLast}`;

  createListItem.insertAdjacentElement('afterbegin', createLabel);
  form.appendChild(createListItem);
}

function getEmail() {
  const createListItem = document.createElement('li');
  const createLabel = document.createElement('strong');
  const retrieveEmail = document.querySelector('#input-email').value;

  createLabel.innerText = 'Email: ';
  createListItem.innerText = retrieveEmail;

  createListItem.insertAdjacentElement('afterbegin', createLabel);
  form.appendChild(createListItem);
}

function getHouse() {
  const createListItem = document.createElement('li');
  const createLabel = document.createElement('strong');
  const retrieveHouse = document.querySelector('#house').value;

  createLabel.innerText = 'Casa: ';
  createListItem.innerText = retrieveHouse;

  createListItem.insertAdjacentElement('afterbegin', createLabel);
  form.appendChild(createListItem);
}

function getFamily() {
  const createListItem = document.createElement('li');
  const createLabel = document.createElement('strong');
  const retrieveFamily = document.querySelectorAll('.family-class');
  let getUserFamily = '';

  for (let index = 0; index < retrieveFamily.length; index += 1) {
    if (retrieveFamily[index].checked) {
      getUserFamily = retrieveFamily[index].value;
    }
  }

  createLabel.innerText = 'Família: ';
  createListItem.innerText = getUserFamily;

  createListItem.insertAdjacentElement('afterbegin', createLabel);
  form.appendChild(createListItem);
}

function getLesson() {
  const createListItem = document.createElement('li');
  const createLabel = document.createElement('strong');
  const retrieveLessons = document.querySelectorAll('.lesson');
  let getUserLessons = '';

  for (let index = 0; index < retrieveLessons.length; index += 1) {
    if (retrieveLessons[index].checked) {
      getUserLessons = `${getUserLessons} ${retrieveLessons[index].value}`;
    }
  }

  createLabel.innerText = 'Matérias: ';
  createListItem.innerText = getUserLessons;

  createListItem.insertAdjacentElement('afterbegin', createLabel);
  form.appendChild(createListItem);
}

function rating() {
  const createListItem = document.createElement('li');
  const createLabel = document.createElement('strong');
  const retrieveRate = document.querySelectorAll('.rate');
  let getUserRate = '';

  for (let index = 0; index < retrieveRate.length; index += 1) {
    if (retrieveRate[index].checked) {
      getUserRate = retrieveRate[index].value;
    }
  }

  createLabel.innerText = 'Avaliação: ';
  createListItem.innerText = getUserRate;

  createListItem.insertAdjacentElement('afterbegin', createLabel);
  form.appendChild(createListItem);
}

function generateData() {
  getName();
  getEmail();
  getHouse();
  getFamily();
  getLesson();
  rating();
  getText();
}

function submitBtn() {
  const submitButton = document.querySelector('#submit-btn');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    generateData();
    const dataForm = document.querySelector('#evaluation-form');

    dataForm.remove();
  });
}

window.onload = () => {
  logInValidation();
  formsButtom();
  counterText();
  submitBtn();
};
