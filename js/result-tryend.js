import getElementFromTemplate from './get-element-from-template.js';
import renderScreen from './render-screen.js';
import welcomeScreen from './welcome.js';

const markup = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`;

const resultScreen = getElementFromTemplate(markup);

renderScreen(resultScreen);

const replayBtnEl = document.querySelector(`.main-replay`);

replayBtnEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  renderScreen(welcomeScreen);
});

export default resultScreen;
