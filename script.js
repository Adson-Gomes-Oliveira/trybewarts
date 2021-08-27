const submitButton = document.querySelector('#submit-btn');
const dataContent = document.querySelector('#data-from-form')

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

function changeBackground() {
  const house = document.querySelector('#house')
  const main = document.querySelector('main')

  house.addEventListener('click', () => {
    if (house.value === 'Unselected') {
      main.style.background = 'rgba(0, 0, 0, 0.55) url(images/Castle.webp)'
    }

    if (house.value === 'Gitnória') {
      main.style.background = 'rgba(0, 0, 0, 0.55) url(images/Red-Castle.jpg)'
    }

    if (house.value === 'Reactpuff') {
      main.style.background = 'rgba(0, 0, 0, 0.55) url(images/Blue-Castle.jpg)'
    }

    if (house.value === 'Corvinode') {
      main.style.background = 'rgba(0, 0, 0, 0.55) url(images/Green-Castle.jpeg)'
    }

    if (house.value === 'Pytherina') {
      main.style.background = 'rgba(0, 0, 0, 0.55) url(images/Yellow-Castle.jpg)'
    }
  })
}

function getName() {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  const retrieveName = document.querySelector('#input-name');
  const retrieveLast = document.querySelector('#input-lastname');

  paragraph.innerText = `${retrieveName.value} ${retrieveLast.value}`;
  strong.innerText = 'Nome: '

  paragraph.insertAdjacentElement('afterbegin', strong)
  dataContent.appendChild(paragraph)
}

function getEmail() {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  const retrieveEmail = document.querySelector('#input-email');

  paragraph.innerText = `${retrieveEmail.value}`;
  strong.innerText = 'Email: '

  paragraph.insertAdjacentElement('afterbegin', strong)
  dataContent.appendChild(paragraph)
}

function getHouse() {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  const retrieveHouse = document.querySelector('#house');

  paragraph.innerText = `${retrieveHouse.value}`;
  strong.innerText = 'Casa: '

  paragraph.insertAdjacentElement('afterbegin', strong)
  dataContent.appendChild(paragraph)
}

function getFamily() {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  const retrieveFamily = document.querySelectorAll('.family-class');
  let getUserFamily = '';

  for (let index = 0; index < retrieveFamily.length; index += 1) {
    if (retrieveFamily[index].checked) {
      getUserFamily = retrieveFamily[index].value;
    }
  }

  paragraph.innerText = `${getUserFamily}`;
  strong.innerText = 'Família: '

  paragraph.insertAdjacentElement('afterbegin', strong)
  dataContent.appendChild(paragraph)
}

function getLesson() {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  const retrieveLessons = document.querySelectorAll('.subject');
  let getUserLessons = '';

  for (let index = 0; index < retrieveLessons.length; index += 1) {
    if (retrieveLessons[index].checked) {
      getUserLessons = `${getUserLessons}, ${retrieveLessons[index].value}`;
    }
  }
  getUserLessons = getUserLessons.replace(',', '');

  paragraph.innerText = `${getUserLessons}`;
  strong.innerText = 'Matérias: '

  paragraph.insertAdjacentElement('afterbegin', strong)
  dataContent.appendChild(paragraph)
}

function getText() {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  const retrieveTextArea = document.querySelector('#textarea');

  paragraph.innerText = `${retrieveTextArea.value}`;
  strong.innerText = 'Observações: ';

  paragraph.insertAdjacentElement('afterbegin', strong)
  dataContent.appendChild(paragraph)
}

function rating() {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  const retrieveRate = document.querySelectorAll('.rate');
  let getUserRate = '';

  for (let index = 0; index < retrieveRate.length; index += 1) {
    if (retrieveRate[index].checked) {
      getUserRate = retrieveRate[index].value;
    }
  }
  paragraph.innerText = `${getUserRate}`;
  strong.innerText = 'Avaliação: ';

  paragraph.insertAdjacentElement('afterbegin', strong)
  dataContent.appendChild(paragraph)
}

function houseDescription() {
  const houseSelected = document.querySelector('#house');
  const division = document.createElement('div')

  division.className = 'division'

  if (houseSelected.value === 'Unselected') {
    const lore = document.createElement('div');
    const paragraph = document.createElement('p')
    const title = document.createElement('h2')

    lore.id = 'lore-house'
    title.innerText = 'Sem Casa'
    paragraph.innerText = 'Um mago programador, mesmo que domine diversas magias da programação deve escolher uma casa para servir, um mago sem uma casa é como alguém perdido no deserto, ninguém estenderá a mão para alguém que abandonou as tradições sagradas do código, recarregue a página e escolha uma casa para que os deuses, Giterium, Reactemos, Nodessa, e Pytherina não se enfureçam com você e lhe tirem toda e qualquer habilidade de codar. Escolha sua casa, AGORA!'

    dataContent.appendChild(lore)
    lore.appendChild(title)
    lore.appendChild(paragraph)
    dataContent.appendChild(division)
  }

  if (houseSelected.value === 'Gitnória') {
    const lore = document.createElement('div');
    const paragraph = document.createElement('p')
    const title = document.createElement('h2')

    dataContent.style.background = 'url(https://i.pinimg.com/originals/70/bd/40/70bd40cfa34632bb52bc1aeebc9dd21e.png)'

    lore.id = 'lore-house'
    title.innerText = 'Gitnória, A casa dos destemidos programadores!'
    paragraph.innerText = 'Sua jornada em Gitnória será ardua e está prestes a começar, não pense que será uma colônia de férias, muito pelo contrário, você posto a prova todos os dias enquanto viver no castelo de Gitnória, mas caso seja um developer com garra e determinação o deus Giterium estará sempre de braços abertos para você, assim como a gitnória.'

    dataContent.appendChild(lore)
    lore.appendChild(title)
    lore.appendChild(paragraph)
    dataContent.appendChild(division)
  }

  if (houseSelected.value === 'Reactpuff') {
    const lore = document.createElement('div');
    const paragraph = document.createElement('p')
    const title = document.createElement('h2')

    dataContent.style.background = 'url(images/react-removebg.png)'

    lore.id = 'lore-house'
    title.innerText = 'Reactpuff, A casa dos geniais programadores!'
    paragraph.innerText = 'Sua jornada em Reactpuff será cheia de desafios, apenas os mais inteligentes e ávidos por conhecimento sobrevivem aqui, cada dia será um desafio diferente mais dificil que o anterior está preparado mago programador, a jornada pode ser dificil mas o grande Reactemos lhe dará sabedoria e paz.'

    dataContent.appendChild(lore)
    lore.appendChild(title)
    lore.appendChild(paragraph)
    dataContent.appendChild(division)
  }

  if (houseSelected.value === 'Corvinode') {
    const lore = document.createElement('div');
    const paragraph = document.createElement('p')
    const title = document.createElement('h2')

    dataContent.style.background = 'url(images/zyro-image.png)'

    lore.id = 'lore-house'
    title.innerText = 'Corvinode, A casa dos mais eficientes programadores!'
    paragraph.innerText = 'Antes de escolher Corvinode pense bem, aqui não é lugar de fracos, se não puder lutar pela sua sobrevivência não entre aqui, mas se você tiver a habilidade e força necessária garanto que se tornará o melhor programador que o mundo DEV já viu, casas fortes constroem Devs fortes! Tudo pela graça da grande Nodessa!'

    dataContent.appendChild(lore)
    lore.appendChild(title)
    lore.appendChild(paragraph)
    dataContent.appendChild(division)
  }

  if (houseSelected.value === 'Pytherina') {
    const lore = document.createElement('div');
    const paragraph = document.createElement('p')
    const title = document.createElement('h2')

    dataContent.style.background = 'url(images/zyro-image1.png)'

    lore.id = 'lore-house'
    title.innerText = 'Pytherina, A casa dos mais valorosos programadores!'
    paragraph.innerText = 'A força é importante, a inteligêncai também, assim como a astúcia, porem não podemos esquecer do que nos torna humanos, somos magos programadores, mas ainda temos sentimentos, ainda amamos e odiamos e são essas forças que lhe farão um grande lider e um grande mago programador, sigamos a nossa deusa Pytherina e juntos alcançaremos o topo!'

    dataContent.appendChild(lore)
    lore.appendChild(title)
    lore.appendChild(paragraph)
    dataContent.appendChild(division)
  }
}

function generateData() {
  const sectionData = document.querySelector(".js-control");
  sectionData.id = 'get-data'
  houseDescription();
  getName();
  getEmail();
  getHouse();
  getFamily();
  getLesson();
  getText();
  rating();
}

function submitBtn() {
  submitButton.addEventListener('click', (event) => {
    const form = document.querySelector('#evaluation-form')
    event.preventDefault();

    generateData();
    form.remove()
  });
}

window.onload = () => {
  logInValidation();
  formsButtom();
  counterText();
  submitBtn();
  changeBackground()
};
