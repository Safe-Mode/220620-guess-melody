import {INITIAL_STATE} from './data/data.js';
import {INITIAL_PLAYER} from './data/data';
import getElementFromTemplate from './get-element-from-template.js';
import render from './render-screen.js';
import goOverGenre from './genre.js';
import initialScreen from './welcome.js';
import goOverResult from './result-win.js';
import getHeader from './header.js';
import footerEl from './footer.js';
import gameData from './data/game-data.js';
import getCurrentState from './get-current-state.js';
import {err} from './game.js';
import {isFinished} from './game';
import rivals from './rivals.js';
import player from './player.js';
import {updatePlayer} from './game.js';
import {showResult} from './game.js';

export default (questions, state) => {
  if (!state.notes) {
    return false;
  }

  let newState = Object.assign({}, state);

  const markup =
    `<section class="main main--level main--level-artist">
      <div class="main-wrap">
        <h2 class="title main-title">${questions[newState.question].title}</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src=${questions[newState.question].audio}></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-1" name="answer" value=\"${questions[newState.question].options[0]}\">
            <label class="main-answer" for="answer-1">
              <img class="main-answer-preview" src="http://placehold.it/134x134"
                  alt="${questions[newState.question].options[0]}" width="134" height="134">
              ${questions[newState.question].options[0]}
            </label>
          </div>

          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-2" name="answer" value=\"${questions[newState.question].options[1]}\">
            <label class="main-answer" for="answer-2">
              <img class="main-answer-preview" src="http://placehold.it/134x134"
                  alt="${questions[newState.question].options[1]}" width="134" height="134">
              ${questions[newState.question].options[1]}
            </label>
          </div>

          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-3" name="answer" value=\"${questions[newState.question].options[2]}\">
            <label class="main-answer" for="answer-3">
              <img class="main-answer-preview" src="http://placehold.it/134x134"
                  alt="${questions[newState.question].options[2]}" width="134" height="134">
              ${questions[newState.question].options[2]}
            </label>
          </div>
        </form>
      </div>
    </section>`;
  const artistMain = getElementFromTemplate(markup);
  const answerList = artistMain.querySelector(`.main-list`);
  const headerEl = getHeader(newState);
  const playAgainEl = headerEl.querySelector(`.play-again`);

  answerList.addEventListener(`change`, ({target}) => {
    const currentState = getCurrentState();
    const playerAnswer = {time: 30};

    if (gameData[newState.question].answer !== target.value) {
      err(currentState);
      playerAnswer.value = false;
    } else {
      playerAnswer.value = true;
    }

    updatePlayer(player, playerAnswer);

    if (isFinished(questions, currentState)) {
      goOverResult(showResult(rivals, player));
    } else {
      goOverGenre(Object.assign(gameData), currentState);
    }
  });

  playAgainEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    Object.assign(state, INITIAL_STATE);
    Object.assign(player, INITIAL_PLAYER);
    render(initialScreen);
  });

  const artistScreen = document.createDocumentFragment();

  artistScreen.appendChild(headerEl);
  artistScreen.appendChild(artistMain);
  artistScreen.appendChild(footerEl);
  render(artistScreen);

  return newState;
};
