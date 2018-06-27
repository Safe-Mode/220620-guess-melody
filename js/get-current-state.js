import gameState from './data/state.js';
import getTimer from './get-timer.js';
import {INITIAL_STATE} from './data/data.js';

const state = (gameState.question) ? gameState : Object.assign({}, INITIAL_STATE);
console.log(state);

export default () => {
  state.question = state.question + 1;
  // state.time.minutes = Math.round(getTimer().currentTime / 60);
  // state.time.seconds = state.time - state.time.minutes * 60;
  state.time.minutes = INITIAL_STATE.time.minutes;
  state.time.seconds = INITIAL_STATE.time.seconds;

  return state;
};
