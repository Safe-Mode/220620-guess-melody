import goOverResult from './result-try-over.js';

const PERCENT_RATIO = 100;
const FAST_ANSWER_LIMIT = 30;

export const countScores = (answers) => {
  return answers.reduce((scores, it) => {
    if (it.value) {
      const itScore = (it.time < FAST_ANSWER_LIMIT) ? 2 : 1;
      return scores + itScore;
    } else {
      return scores - 2;
    }
  }, 0);
};

export const showResult = (rivals, result) => {
  const statistics = [];
  const playerScores = countScores(result.answers);

  rivals.forEach((it) => {
    statistics.push(it.scores);
  });

  statistics.push(playerScores);
  statistics.sort((left, right) => right - left);

  const playerPosition = statistics.indexOf(playerScores) + 1;
  const percent = (statistics.length - playerPosition) * PERCENT_RATIO / statistics.length;

  return {
    scores: playerScores,
    position: playerPosition,
    rivalsCount: statistics.length,
    percent,
    fast: result.fast,
    fails: result.fails
  };
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

export const canContinue = (state) => state.notes - 1 > 0;

export const err = (state) => {
  if (!canContinue(state)) {
    goOverResult();
  }

  state.notes = state.notes - 1;
  return state;
};

export const isFinished = (questions, state) => state.question === questions.length;

export const updatePlayer = (player, answer) => {
  player.answers.push(answer);
  player.fast = (answer.time < 30) ? ++player.fast : player.fast;
  player.fails = (!answer.value) ? ++player.fails : player.fails;
};
