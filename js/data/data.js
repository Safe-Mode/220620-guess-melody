import {deepFreeze} from '../util';

export const INITIAL_STATE = {
  question: 0,
  notes: 3,
  time: {
    minutes: `05`,
    seconds: `00`
  }
};

export const INITIAL_PLAYER = deepFreeze({
  answers: [],
  fast: 0,
  fails: 0
});
