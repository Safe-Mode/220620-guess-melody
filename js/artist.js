import getElementFromTemplate from './get-element-from-template.js';
import render from './render-screen.js';
import goOverGenre from './genre.js';
import initialScreen from './welcome.js';
import headerEl from './header.js';
import initData from './data/game-data.js';

export default (questions, state) => {
  const markup =
    `<section class="main main--level main--level-artist">
      <div class="main-wrap">
        <h2 class="title main-title">${questions[state.question].title}</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src=${questions[state.question].audio}></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-1" name="answer" value=\"${questions[state.question].options[0]}\">
            <label class="main-answer" for="answer-1">
              <img class="main-answer-preview" src="http://placehold.it/134x134"
                  alt="${questions[state.question].options[0]}" width="134" height="134">
              ${questions[state.question].options[0]}
            </label>
          </div>

          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-2" name="answer" value=\"${questions[state.question].options[1]}\">
            <label class="main-answer" for="answer-2">
              <img class="main-answer-preview" src="http://placehold.it/134x134"
                  alt="${questions[state.question].options[1]}" width="134" height="134">
              ${questions[state.question].options[1]}
            </label>
          </div>

          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-3" name="answer" value=\"${questions[state.question].options[2]}\">
            <label class="main-answer" for="answer-3">
              <img class="main-answer-preview" src="http://placehold.it/134x134"
                  alt="${questions[state.question].options[2]}" width="134" height="134">
              ${questions[state.question].options[2]}
            </label>
          </div>
        </form>
      </div>
    </section>`;
  const artistMain = getElementFromTemplate(markup);
  const answerList = artistMain.querySelector(`.main-list`);
  const playAgainEl = headerEl.querySelector(`.play-again`);

  answerList.addEventListener(`change`, (evt) => {
    if (evt.target.classList.contains(`main-answer-r`)) {
      console.log(evt.target.value);
      goOverGenre();
    }
  });

  playAgainEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    render(initialScreen);
  });

  render(headerEl);
  render(artistMain);
};
