import {deepFreeze, getRandomInt} from './util.js';

const MAX_ANSWER_TIME = 30;
const ANSWERS_LENGTH = 10;
const booleans = [true, false];
const MAX_LIVES = 3;

export default () => {
  let answers = [];

  for (let i = 0; i < ANSWERS_LENGTH; i++) {
    const falseCount = answers.reduce((counter, it) => {
      return (!it.value) ? ++counter : counter;
    }, 0);

    answers.push({
      value: (falseCount === MAX_LIVES - 1) ? true : booleans[getRandomInt(0, booleans.length - 1)],
      time: getRandomInt(1, MAX_ANSWER_TIME)
    });
  }

  return deepFreeze(answers);
};
