import getElementFromTemplate from './get-element-from-template.js';
import goOverArtist from './artist.js';
import gameData from './data/game-data.js';
import {INITIAL_STATE} from './data/data.js';

const markup =
  `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;
const welcomeScreen = getElementFromTemplate(markup);
const playBtnEl = welcomeScreen.querySelector(`.main-play`);

playBtnEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  goOverArtist(gameData, INITIAL_STATE);
});

export default welcomeScreen;
