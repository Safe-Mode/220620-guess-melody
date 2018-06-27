import {INITIAL_STATE} from './data/data.js';
import {INITIAL_PLAYER} from './data/data';
import player from './player.js';
import getCurrentState from './get-current-state.js';
import getElementFromTemplate from './get-element-from-template.js';
import render from './render-screen.js';
import welcomeScreen from './welcome.js';
import {deepClone} from './util';

export default () => {
  const markup =
    `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

      <h2 class="title">Какая жалость!</h2>
      <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
      <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
    </section>`;

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
