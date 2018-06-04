import getElementFromTemplate from './get-element-from-template.js';
import renderScreen from './render-screen.js';
import welcomeScreen from './welcome.js';

const markup = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
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
