import {assert} from 'chai';
import countScores from './../count-scores.js';
import getAnswers from './../get-answers.js';

const getAnswersCopy = (array) => {
  const answersCopy = [];

  array.forEach((it) => {
    answersCopy.push(Object.assign([], it));
  });

  return answersCopy;
};

describe(`Check scores counter`, () => {
  it(`Should return -1, if player has answered less than 10 questions`, () => {
    const answersCopy = getAnswersCopy(getAnswers());
    answersCopy.length = 9;

    assert.equal(countScores(answersCopy), -1);
  });

  it(`Should return 10, if player has answered all questions right, but not quickly`, () => {
    const answersCopy = getAnswersCopy(getAnswers());

    answersCopy.forEach((it) => {
      it.value = true;
      it.time = 30;
    });

    assert.equal(countScores(answersCopy), 10);
  });

  it(`Should return 20, if player has answered all questions quickly`, () => {
    const answersCopy = getAnswersCopy(getAnswers());

    answersCopy.forEach((it) => {
      it.value = true;
      it.time = 5;
    });

    assert.equal(countScores(answersCopy), 20);
  });
});
