import getElementFromTemplate from './get-element-from-template.js';
import renderScreen from './render-screen.js';
import artistScreen from './artist.js';

const markup = `
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
const welcomeScreen = getElementFromTemplate(markup);

renderScreen(welcomeScreen);

const playBtnEl = document.querySelector(`.main-play`);

playBtnEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  renderScreen(artistScreen);
});

export default welcomeScreen;
