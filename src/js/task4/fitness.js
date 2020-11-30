// diff between standard and item velocities
import { CELLS, VELOCITY, PENALTY_FACTOR } from './getCellsOrder';

const fitness = ({ mainThruster, secondThruster }) => {
  let score = 0;
  let cellCounter = 0;
  let cellSum = 0;
  mainThruster.forEach((value, i) => {
    if (value) {
      cellCounter += 1;
      cellSum += value;
    }
    if (VELOCITY[i] < value + secondThruster[i] / 2) {
      score += PENALTY_FACTOR;
      return;
    }
    score += VELOCITY[i] - value - secondThruster[i] / 2;
  });

  // check if there are more cells than in initial array
  secondThruster.forEach((value) => {
    if (value) {
      cellCounter += 1;
      cellSum += value;
    }
  });
  if (cellCounter > CELLS.length) {
    score += PENALTY_FACTOR;
  }
  // check if modified cells sum is more than initial one
  if (
    cellSum >
    CELLS.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  ) {
    score += PENALTY_FACTOR;
  }
  return score;
};

export default fitness;
