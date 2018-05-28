'use strict';

const Keycode = {
  Arrow: {
    LEFT: 37,
    RIGHT: 39
  }
};

const screenTemplates = document.querySelector(`#templates`).content
    .querySelectorAll(`.main`);
const appEl = document.querySelector(`.app`);
const mainEl = document.querySelector(`.main`);

const showScreen = (number) => {
  Array.from(screenTemplates[number].cloneNode(true).children).forEach((it) => {
    mainEl.appendChild(it);
  });
};

const drainNode = (node) => {
  while (node.children.length) {
    node.removeChild(node.children[0]);
  }
};

const renderScreen = () => {
  drainNode(mainEl);
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

let screenNum = 0;

showScreen(screenNum);

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case Keycode.Arrow.LEFT:
      switchPrevScreen();
      break;
    case Keycode.Arrow.RIGHT:
      switchNextScreen();
  }
});

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

const arrowsWrapEl = document.createElement(`div`);

arrowsWrapEl.classList.add(`arrows__wrap`);
arrowsWrapEl.innerHTML = arrowsWrapHTML;
appEl.appendChild(arrowsWrapEl);

arrowsWrapEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  switch (evt.target.textContent) {
    case `<-`:
      switchPrevScreen();
      break;
    case `->`:
      switchNextScreen();
  }
});
