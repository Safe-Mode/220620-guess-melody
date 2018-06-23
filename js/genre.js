import getElementFromTemplate from './get-element-from-template.js';
import render from './render-screen.js';
import goOverResult from './result-win.js';
import resultTimeoutScreen from './result-timeout.js';
import initialScreen from './welcome.js';
import getHeader from './header.js';
import footerEl from './footer.js';
import getCurrentState from './get-current-state.js';
import gameData from './data/game-data.js';
import {err} from './game.js';
import goOverArtist from './artist.js';
import {isFinished} from './game';
import rivals from './rivals.js';
import player from './player.js';
import {updatePlayer} from './game.js';
import {showResult} from './game.js';

export default (questions, state) => {
  if (!state.notes) {
    return false;
  }

  state = Object.assign({}, state);

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
  const headerEl = getHeader(state);
  const formEl = genreMain.querySelector(`.genre`);
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

  formEl.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    let currentState = getCurrentState();
    let playerAnswer = {time: 30};
    let answers = [];

    for (const answer of answersEl) {
      if (answer.checked) {
        answers.push(answer.parentElement.querySelector(`audio`).src);
      }
    }

    if (!answers.every((it, i) => {
      if (answers.length === questions[state.question].answer.length) {
        return it === questions[state.question].answer[i];
      }

      return false;
    })) {
      err(currentState);
      playerAnswer.value = false;
    } else {
      playerAnswer.value = true;
    }

    updatePlayer(player, playerAnswer);

    if (isFinished(questions, currentState)) {
      goOverResult(showResult(rivals, player));
    } else {
      goOverArtist(Object.assign(gameData), currentState);
    }
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

  return state;
};
