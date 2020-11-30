import breed from './breed';
import getRandInt from './getRandInt';
import { ALLOWED_TO_BREED } from './getCellsOrder';

const createChildren = (bestCands) => {
  let bestCandidatesChildren = [];
  for (let y = 0; y < ALLOWED_TO_BREED; y += 1) {
    for (let i = 0; i < ALLOWED_TO_BREED - y; i += 1) {
      bestCandidatesChildren.push(
        breed(bestCands[y], bestCands[getRandInt(0, i)])
      );
    }
  }
  return bestCandidatesChildren;
};

export default createChildren;
