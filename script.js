const submitButton = document.querySelector('#submit-btn');

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
  const textDiv = document.querySelector('#text-area');
  const paragraph = document.createElement('p');
  const retrieveTextArea = document.querySelector('#textarea');
  const retrieveTextAreaLabel = document.querySelector('.textarea');
  const retrieveCheckboxAgree = document.querySelector('.checkbox-agreement');
  const retrieveButton = document.querySelector('#submit-btn');
  const span = document.querySelector('#counter');

  paragraph.innerText = `Observações: ${retrieveTextArea.value}`;

  retrieveTextArea.remove();
  retrieveTextAreaLabel.remove();
  retrieveCheckboxAgree.remove();
  retrieveButton.remove();
  span.remove();

  textDiv.appendChild(paragraph);
}

function getName() {
  const fullName = document.querySelector('#fullname');
  const paragraph = document.createElement('p');
  const retrieveName = document.querySelector('#input-name');
  const retrieveLast = document.querySelector('#input-lastname');
  const retrieveLabel1 = document.querySelector('#first');
  const retrieveLabel2 = document.querySelector('#last')
  paragraph.innerText = `Nome: ${retrieveName.value} ${retrieveLast.value}`;

  retrieveName.remove();
  retrieveLabel1.remove();
  retrieveLast.remove();
  retrieveLabel2.remove();

  fullName.appendChild(paragraph);
}

function getEmail() {
  const emailDiv = document.querySelector('.email-house');
  const paragraph = document.createElement('p');
  const retrieveEmail = document.querySelector('#input-email');
  const label = document.querySelector('#label-email')

  paragraph.innerText = `Email: ${retrieveEmail.value}||`;

  retrieveEmail.remove();
  label.remove();

  emailDiv.appendChild(paragraph);
}

function getHouse() {
  const emailDiv = document.querySelector('.email-house');
  const paragraph = document.createElement('p');
  const retrieveHouse = document.querySelector('#house');
  const retrieveHouseLabel = document.querySelector('#house-label');

  paragraph.innerText = `Casa: ${retrieveHouse.value}`;

  retrieveHouse.remove();
  retrieveHouseLabel.remove();

  emailDiv.appendChild(paragraph);
}

function getFamily() {
  const familyDiv = document.querySelector('#label-family-id');
  const paragraph = document.createElement('p');
  const retrieveFamily = document.querySelectorAll('.family-class');
  const retrieveFamilyLabel = document.querySelector('#label-family');
  const retrieveInternalFamilyDiv = document.querySelector('#radio-family');
  let getUserFamily = '';

  for (let index = 0; index < retrieveFamily.length; index += 1) {
    if (retrieveFamily[index].checked) {
      getUserFamily = retrieveFamily[index].value;
    }
  }

  paragraph.innerText = `Família: ${getUserFamily}`;
  retrieveFamilyLabel.remove();
  retrieveInternalFamilyDiv.remove();

  familyDiv.appendChild(paragraph);
}

function getLesson() {
  const lessonDiv = document.querySelector('.checkbox-content');
  const paragraph = document.createElement('p');
  const retrieveLessons = document.querySelectorAll('.subject');
  const retrieveLessonsLabel = document.querySelector('#label-content');
  const retrieveLessonsCheckbox = document.querySelector('.checkbox-content-value');
  let getUserLessons = '';

  for (let index = 0; index < retrieveLessons.length; index += 1) {
    if (retrieveLessons[index].checked) {
      getUserLessons = `${getUserLessons}, ${retrieveLessons[index].value}`;
    }
  }
  getUserLessons = getUserLessons.replace(',', '');
  paragraph.innerText = `Matérias: ${getUserLessons}`;
  retrieveLessonsLabel.remove();
  retrieveLessonsCheckbox.remove();
  lessonDiv.appendChild(paragraph);
}

function rating() {
  const rateDiv = document.querySelector('.radio-family-row');
  const paragraph = document.createElement('p');
  const retrieveRate = document.querySelectorAll('.rate');
  const retrieveRateLabel = document.querySelector('#label-rate');
  const retrieveRateDiv = document.querySelector('#ratings');
  let getUserRate = '';

  for (let index = 0; index < retrieveRate.length; index += 1) {
    if (retrieveRate[index].checked) {
      getUserRate = retrieveRate[index].value;
    }
  }
  paragraph.innerText = `Avaliação: ${getUserRate}`;

  retrieveRateLabel.remove();
  retrieveRateDiv.remove();

  rateDiv.appendChild(paragraph);
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
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    generateData();
  });
}

window.onload = () => {
  logInValidation();
  formsButtom();
  counterText();
  submitBtn();
};
