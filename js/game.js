const PERCENT_RATIO = 100;
const MAX_ANSWERS_LENGTH = 10;
const FAST_ANSWER_LIMIT = 30;

export const showResult = (rivals, result) => {
  if (result.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (result.notes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const statistics = [];

  rivals.forEach((it) => {
    statistics.push(it.scores);
  });

  statistics.push(result.scores);
  statistics.sort((left, right) => right - left);

  const playerPosition = statistics.indexOf(result.scores) + 1;
  const percent = (statistics.length - playerPosition) * PERCENT_RATIO / statistics.length;

  return `Вы заняли ${playerPosition} место из ${statistics.length} игроков. Это лучше, чем у ${percent}% игроков`;
};

export const getTimer = (time) => {
  return {
    initTime: time,
    currentTime: time,

    tick() {
      --this.currentTime;
      return (this.currentTime === 0) ? this.notifyOnTimerEnd() : false;
    },

    notifyOnTimerEnd() {
      return `Прошло ${this.initTime} секунд`;
    }
  };
};

export const countScores = (answers) => {
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

export const canContinue = (state) => state.notes - 1 > 0;

export const err = (state) => {
  if (!canContinue(state)) {
    throw new Error(`You can't continue anymore`);
  }

  state.notes = state.notes - 1;
  return state.notes;
};
