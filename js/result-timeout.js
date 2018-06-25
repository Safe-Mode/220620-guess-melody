import {INITIAL_STATE, INITIAL_PLAYER} from './data/data';
import player from './player.js';
import getCurrentState from './get-current-state.js';
import getElementFromTemplate from './get-element-from-template.js';
import render from './render-screen.js';
import welcomeScreen from './welcome.js';
import {deepClone} from './util';

export default () => {
  const markup = `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

      <h2 class="title">Увы и ах!</h2>
      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
      <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
    </section>
  `;

  const resultScreen = getElementFromTemplate(markup);
  const replayBtnEl = resultScreen.querySelector(`.main-replay`);
  let state = getCurrentState();

  replayBtnEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    Object.assign(state, deepClone(INITIAL_STATE));
    Object.assign(player, deepClone(INITIAL_PLAYER));
    render(welcomeScreen);
  });

  render(resultScreen);
};
