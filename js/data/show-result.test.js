import {assert} from 'chai';
import showResult from './../show-result.js';
import rivals from './../rivals.js';
import player from './../player.js';

describe(`Check show result`, () => {
  it(`Show timeout message if player's time is out`, () => {
    const playerCopy = Object.assign({}, player);
    playerCopy.time = 0;

    assert.equal(showResult(rivals, playerCopy), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`Show try over message if player's tries are over`, () => {
    const playerCopy = Object.assign({}, player);
    playerCopy.notes = 0;

    assert.equal(showResult(rivals, playerCopy), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`Show success message, if player has won`, () => {
    const playerCopy = Object.assign({}, player);
    playerCopy.scores = 20;

    assert.equal(showResult(rivals, playerCopy), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
  });
});
