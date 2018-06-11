const PERCENT_RATIO = 100;

export default (rivals, result) => {
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
