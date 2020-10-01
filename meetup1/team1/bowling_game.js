function bowlingGame(gameString) {
  let score = 0;
  const frames = getFrames(gameString);
  let index = 0;
  while (index < 10) {
    console.log(frames[index]);
    index++;
  }
  return "apples";
}

function getFrames(str) {
  return str.split("|").filter((s) => s !== "");
}

module.exports = { bowlingGame, getFrames };
