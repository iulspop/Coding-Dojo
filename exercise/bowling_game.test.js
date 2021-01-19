const bowlingGame = require('./bowling_game');

describe('bowlingGame', () => {
  it('calculates score for line with numbers', () => {
    expect(bowlingGame("9-|9-|9-|9-|9-|9-|9-|9-|9-|72||")).toEqual(90);
  });
});
