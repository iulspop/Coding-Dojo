function bowlingGame(line) {
  score = 0;
  line = line.match(/[X/\-1-9]{1,2}/g);
  for (let i = 0; i < 10; i++) {
    frame = line[i];
    if (frame.match(/\//)) {
      return 150
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
