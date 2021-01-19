const bowlingGame = require('./bowling_game');

describe('bowlingGame', () => {
  it('calculates score for line with numbers', () => {
    expect(bowlingGame("9-|9-|9-|9-|9-|9-|9-|9-|9-|62||")).toEqual(89);
  });

  it('calculates score for line with spares', () => {
    expect(bowlingGame("5/|5/|5/|5/|5/|5-|5/|5/|5/|-/||5")).toEqual(135);
  });

  it('calculates score for line with strikes', () => {
    expect(bowlingGame("X|X|X|X|X|X|X|X|X|X||XX")).toEqual(300);
  });
});
