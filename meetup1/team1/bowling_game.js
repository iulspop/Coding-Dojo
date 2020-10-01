function bowlingGame(gameString) {
  return "apples";
}

function getFrames(str) {
  return str.split('|').filter(s =>  s !== "")
}

module.exports = {bowlingGame, getFrames};
