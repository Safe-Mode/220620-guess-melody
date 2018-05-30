'use strict';

const Keycode = {
  Arrow: {
    LEFT: 37,
    RIGHT: 39
  }
};

const ARROWS_WRAP_HTML = `
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

arrowsWrapEl.classList.add(`arrows__wrap`);
arrowsWrapEl.innerHTML = ARROWS_WRAP_HTML;
appEl.appendChild(arrowsWrapEl);

arrowsWrapEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  switchScreen(evt);
});
