import {getRandomInt} from './util.js';
import getElementFromTemplate from './get-element-from-template.js';
import renderScreen from './render-screen.js';
import getResultWin from './result-win.js';
import getResultTimeout from './result-timeout.js';
import getResultTryOver from './result-try-over.js';
import initApp from './welcome.js';
import headerEl from './header.js';

export default () => {
  const markup =
    `<div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>`;

  const genreScreen = getElementFromTemplate(markup);
  const genreMain = document.createElement(`section`);

  genreMain.className = `main main--level main--level-artist`;
  genreMain.appendChild(headerEl.cloneNode(true));
  genreMain.appendChild(genreScreen);

  const results = [getResultWin, getResultTimeout, getResultTryOver];
  const showResult = results[getRandomInt(0, results.length - 1)];
  const sendBtnEl = genreMain.querySelector(`.genre-answer-send`);
  const answersEl = genreMain.querySelectorAll(`input[name="answer"]`);
  const genreEl = genreMain.querySelector(`.genre`);
  const playAgainEl = genreMain.querySelector(`.play-again`);

  const toggleSendBtnState = () => {
    for (let i = 0; i < answersEl.length; i++) {
      if (answersEl[i].checked) {
        sendBtnEl.disabled = false;
        return;
      }
    }

    sendBtnEl.disabled = true;
  };

  toggleSendBtnState();

  genreEl.addEventListener(`change`, (evt) => {
    if (evt.target.name === `answer`) {
      toggleSendBtnState();
    }
  });

  sendBtnEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    showResult();
  });

  playAgainEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    initApp();
  });

  renderScreen(genreMain);
};
