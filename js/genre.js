import {getRandomInt} from './util.js';
import getElementFromTemplate from './get-element-from-template.js';
import render from './render-screen.js';
// import getResultWin from './result-win.js';
// import getResultTimeout from './result-timeout.js';
// import getResultTryOver from './result-try-over.js';
import initialScreen from './welcome.js';
import headerEl from './header.js';
import footerEl from './footer.js';
import gameData from './data/game-data.js';

export default (questions, state) => {
  console.log(state);
  
  const markup =
    `<section class="main main--level main--level-genre">
      <div class="main-wrap">
        <h2 class="title">${questions[state.question].title}</h2>
        <form class="genre">
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio src=${questions[state.question].options[0]}></audio>
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
                <audio src=${questions[state.question].options[1]}></audio>
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
                <audio src=${questions[state.question].options[2]}></audio>
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
                <audio src=${questions[state.question].options[3]}></audio>
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
      </div>
    </section>`;

  const genreMain = getElementFromTemplate(markup);

  // const results = [getResultWin, getResultTimeout, getResultTryOver];
  // const showResult = results[getRandomInt(0, results.length - 1)];
  const sendBtnEl = genreMain.querySelector(`.genre-answer-send`);
  const answersEl = genreMain.querySelectorAll(`input[name="answer"]`);
  const genreEl = genreMain.querySelector(`.genre`);
  const playAgainEl = headerEl.querySelector(`.play-again`);

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
    // showResult();
  });

  playAgainEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    render(initialScreen);
  });

  const genreScreen = document.createDocumentFragment();

  genreScreen.appendChild(headerEl);
  genreScreen.appendChild(genreMain);
  genreScreen.appendChild(footerEl);

  render(genreScreen);
};
