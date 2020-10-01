const { bowlingGame, getFrames } = require("./bowling_game");

describe("acceptance tests", () => {
  it.skip("computes score", () => {
    expect(bowlingGame("X|X|X|X|X|X|X|X|X|X||XX")).toEqual(300);
  });
  it.skip("computes score", () => {
    expect(bowlingGame("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")).toEqual(90);
  });
  it.skip("computes score", () => {
    expect(bowlingGame("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")).toEqual(150);
  });
  it.skip("computes score", () => {
    expect(bowlingGame("X|7/|9-|X|-8|8/|-6|X|X|X||81")).toEqual(167);
  });
});

describe("getFrames", () => {
  it("splits frames", () => {
    expect(getFrames("X|X|X|X|X|X|X|X|X|X||XX")).toEqual([
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "XX",
    ]);
    expect(getFrames("5-|5-|5-|5-|5-|5-|5-|5-|5-|5-||")).toEqual([
      "5-",
      "5-",
      "5-",
      "5-",
      "5-",
      "5-",
      "5-",
      "5-",
      "5-",
      "5-",
    ]);
    expect(getFrames("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")).toEqual([
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5",
    ]);
  });
});
