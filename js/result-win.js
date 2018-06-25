import {INITIAL_STATE, INITIAL_PLAYER} from './data/data';
import player from './player';
import getCurrentState from './get-current-state.js';
import getElementFromTemplate from './get-element-from-template.js';
import render from './render-screen.js';
import welcomeScreen from './welcome.js';
import {deepClone} from './util';

export default (result) => {
  const markup =
    `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
        <br>вы&nbsp;набрали ${result.scores} баллов (${result.fast} быстрых)
        <br>совершив ${result.fails} ошибки</div>
      <span class="main-comparison">Вы заняли ${result.position} место из ${result.rivalsCount}. Это&nbsp;лучше чем у&nbsp;${result.percent}%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  const resultScreen = getElementFromTemplate(markup);
  const replayBtnEl = resultScreen.querySelector(`.main-replay`);
  const state = getCurrentState();

  replayBtnEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    Object.assign(state, deepClone(INITIAL_STATE));
    Object.assign(player, deepClone(INITIAL_PLAYER));
    render(welcomeScreen);
  });

  render(resultScreen);
};
