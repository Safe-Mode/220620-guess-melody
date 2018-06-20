import gameState from './data/state.js';
import getTimer from './get-timer.js';
import {INITIAL_STATE} from './data/data.js';

const state = gameState || INITIAL_STATE;

export default () => {
  state.question = state.question + 1;
  state.notes = state.notes - 0;
  state.time.minutes = Math.round(getTimer().currentTime / 60),
  state.time.seconds = state.time - state.time.minutes * 60
};