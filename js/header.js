import getElementFromTemplate from './get-element-from-template.js';
import {INITIAL_STATE} from './data/data.js';

const NOTES_MAX_COUNT = 3;

const headerTemplate = (state) =>
  `<header>
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
      </circle>
    </svg>
    <a class="play-again play-again__wrap" href="#">
      <img class="play-again__img" src="/img/melody-logo-ginger.png" alt="logo" width="177" height="76">
    </a>
    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${state.time.minutes}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${state.time.seconds}</span>
    </div>
    <div class="main-mistakes">
      ${new Array(NOTES_MAX_COUNT - state.notes)
          .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
          .join(``)}
    </div>
  </header>`;

export default getElementFromTemplate(headerTemplate(INITIAL_STATE));
