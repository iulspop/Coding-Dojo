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

  it('calculates score for line with stikes, spares, numbers amd miss', () => {
    expect(bowlingGame("X|5/|23|8/|45|X|--|-4|-/|2/||5")).toEqual(101);
  });
});

// 10
// 5
// 5

// 10
// 2

// 5

// 10
// 4

// 9

// 10

// 4

// 10
// 2

// 10
// 5
