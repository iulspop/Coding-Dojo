function bowlingGame(line) {
  score = 0;
  line = line.match(/[X/\-1-9]{1,2}/g);
  for (let i = 0; i < 10; i++) {
    frame = line[i];
    if (frame.match(/\X/)) {
      score += 10;
      let nextFrame = line[i + 1];
      if (i == 9) {
        continue
      }
      if (nextFrame.match(/X/)) {
        score += 10;
        let nextFrame2 = line[i + 2];
        if (nextFrame2.match(/X/)) {
          score += 10;
        } else if (nextFrame2.match(/^[1-9]/)) {
          let number = nextFrame2.match(/^[1-9]/).map(str => Number(str))[0];
          score += number;
        }
      } else {
        let firstNumber = 0;
        if (nextFrame.match(/^[1-9]/)) {
          firstNumber = nextFrame.match(/^[1-9]/).map(str => Number(str))[0];
          score += number;
        }
        if (nextFrame.match(/[1-9]$/)) {
          let number = nextFrame.match(/^[1-9]/).map(str => Number(str))[0];
          score += number;
        } else if (frame.match(/\//)) {
          score += (10 - firstNumber);
        }
      }
    } else if (frame.match(/\//)) {
      score += 10;
      let nextFrame = line[i + 1];
      if (nextFrame.match(/X/)) {
        score += 10;
      } else if (nextFrame.match(/^[1-9]/)) {
        let number = nextFrame.match(/^[1-9]/).map(str => Number(str))[0];
        score += number;
      }
    } else {
      let numbers = frame.match(/[1-9]/g).map(str => Number(str));
      let sum = numbers.reduce((sum, num) => sum += num);
      score += sum;
    }
  }
  return score;
}

// bowlingGame("9-|9-|9-|9-|9-|9-|9-|9-|9-|62||")

module.exports = bowlingGame;
