import getElementFromTemplate from './get-element-from-template.js';

const Keycode = {
  Arrow: {
    LEFT: 37,
    RIGHT: 39
  }
};

const welcomeMarkup = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>
`;

const welcomeEl = getElementFromTemplate(welcomeMarkup);

const screenTemplates = document.querySelector(`#templates`)
    .content
    .querySelectorAll(`.main`);
const appEl = document.querySelector(`.app`);
const mainEl = document.querySelector(`.main`);

const showScreen = (number) => {
  Array.from(screenTemplates[number].cloneNode(true).children).forEach((it) => {
    mainEl.appendChild(it);
  });
};

const renderScreen = () => {
  mainEl.innerHTML = ``;
  showScreen(screenNum);
};

const switchPrevScreen = () => {
  if (screenNum > 0) {
    screenNum--;
    renderScreen();
  }
};

const switchNextScreen = () => {
  if (screenNum < screenTemplates.length - 1) {
    screenNum++;
    renderScreen();
  }
};

const isLeftPressed = (evt) => evt.keyCode === Keycode.Arrow.LEFT || evt.target.textContent === `<-`;

const isRightPressed = (evt) => evt.keyCode === Keycode.Arrow.RIGHT || evt.target.textContent === `->`;

const switchScreen = (evt) => {
  if (isLeftPressed(evt)) {
    switchPrevScreen();
  } else if (isRightPressed(evt)) {
    switchNextScreen();
  }
};

let screenNum = 0;

showScreen(screenNum);

document.addEventListener(`keydown`, (evt) => {
  switchScreen(evt);
});

const arrowsWrapEl = document.createElement(`div`);
const arrowsWrapHTML = `
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>`;

arrowsWrapEl.classList.add(`arrows__wrap`);
arrowsWrapEl.innerHTML = arrowsWrapHTML;
appEl.appendChild(arrowsWrapEl);

arrowsWrapEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  switchScreen(evt);
});
