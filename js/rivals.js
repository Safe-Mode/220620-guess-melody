import {getRandomInt} from './util.js';
import countScores from './count-scores.js';
import getAnswers from './get-answers.js';

const GAME_TIME = 300;
const MAX_LIVES = 3;

export default [{
  scores: countScores(getAnswers()),
  notes: getRandomInt(1, MAX_LIVES),
  time: getRandomInt(0, GAME_TIME)
}, {
  scores: countScores(getAnswers()),
  notes: getRandomInt(1, MAX_LIVES),
  time: getRandomInt(0, GAME_TIME)
}, {
  scores: countScores(getAnswers()),
  notes: getRandomInt(1, MAX_LIVES),
  time: getRandomInt(0, GAME_TIME)
}, {
  scores: countScores(getAnswers()),
  notes: getRandomInt(1, MAX_LIVES),
  time: getRandomInt(0, GAME_TIME)
}];
