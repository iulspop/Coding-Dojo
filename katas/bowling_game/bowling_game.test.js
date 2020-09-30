const bowlingGame = require('./bowling_game');

describe('bowlingGame', () => {
  it('to life the universe and everything', () => {
    expect(bowlingGame()).toEqual(42);
  });
});
