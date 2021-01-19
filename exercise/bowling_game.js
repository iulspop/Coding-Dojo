function bowlingGame(line) {
  score = 0;
  line = line.match(/[X/\-1-9]{1,2}/g);
  for (let i = 0; i < 10; i++) {
    frame = line[i];
    if (frame.match(/\X/)) {
      return 300;
    } else if (frame.match(/\//)) {
      score += 10;
      nextFrame = line[i + 1];
      if (nextFrame.match(/X/)) {
        score += 10;
      } else if (nextFrame.match(/^[1-9]/)) {
        number = nextFrame.match(/^[1-9]/).map(str => Number(str))[0];
        score += number;
      }
    } else {
      numbers = frame.match(/[1-9]/g).map(str => Number(str));
      sum = numbers.reduce((sum, num) => sum += num);
      score += sum;
    }
  }
  return score;
}

// bowlingGame("9-|9-|9-|9-|9-|9-|9-|9-|9-|62||")

module.exports = bowlingGame;
