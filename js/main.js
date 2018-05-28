'use strict';

const Keycode = {
  Arrow: {
    LEFT: 37,
    RIGHT: 39
  }
};

const screenTemplates = document.querySelector(`#templates`).content
    .querySelectorAll(`.main`);
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

let screenNum = 0;

showScreen(screenNum);

document.addEventListener(`keydown`, (evt) => {
  if (screenNum > 0 && evt.keyCode === Keycode.Arrow.LEFT) {
    screenNum--;
    renderScreen();
  } else if (screenNum < screenTemplates.length - 1 && evt.keyCode === Keycode.Arrow.RIGHT) {
    screenNum++;
    renderScreen();
  }
});
