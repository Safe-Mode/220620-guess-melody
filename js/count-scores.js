const MAX_ANSWERS_LENGTH = 10;
const FAST_ANSWER_LIMIT = 30;

export default (answers) => {
  if (answers.length < MAX_ANSWERS_LENGTH) {
    return -1;
  }

  return answers.reduce((scores, it) => {
    if (it.value) {
      const itScore = (it.time < FAST_ANSWER_LIMIT) ? 2 : 1;
      return scores + itScore;
    } else {
      return scores - 2;
    }
  }, 0);
};
