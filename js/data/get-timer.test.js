import {assert} from 'chai';
import {getTimer} from './../game.js';

describe(`Check timer function`, () => {
  it(`Timer returns object`, () => {
    assert.equal(typeof getTimer(300), `object`);
  });

  it(`Time decreases by 1 when timer reload`, () => {
    const timer = getTimer(300);
    timer.tick();
    assert.equal(timer.currentTime, 299);
  });

  it(`Timer should notify on finish`, () => {
    const timer = getTimer(1);
    assert.equal(timer.tick(), `Прошло 1 секунд`);
  });
});
