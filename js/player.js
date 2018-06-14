import {getRandomInt} from './util.js';
import countScores from './count-scores.js';
import getAnswers from './get-answers.js';

const GAME_TIME = 300;

export default Object.freeze({
  scores: countScores(getAnswers()),
  notes: getRandomInt(1, 3),
  time: getRandomInt(0, GAME_TIME)
});
