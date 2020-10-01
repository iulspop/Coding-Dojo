const bowlingGame = require('./bowling_game');

describe('acceptance tests', () => {
  it('computes score', () => {
    expect(bowlingGame("X|X|X|X|X|X|X|X|X|X||XX")).toEqual(300);
  });
  it('computes score', () => {
    expect(bowlingGame("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")).toEqual(90);
  });
  it('computes score', () => {
    expect(bowlingGame("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")).toEqual(150);
  }); 
  it('computes score', () => {
    expect(bowlingGame("X|7/|9-|X|-8|8/|-6|X|X|X||81")).toEqual(167);
  });
});

describe('getFrames', () => {
  // it('computes score', () => {
  //   expect(getFrames("X|X|X|X|X|X|X|X|X|X||XX")).toDeepEqual(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']);
  // });
  it('computes score', () => {
    expect(getFrames("X|X|X|X|X|X|X|X|X|X||XX")).toDeepEqual(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']);
  });
});
