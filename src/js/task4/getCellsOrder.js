import createGeneration from './createGeneration';
import fitness from './fitness';
import mutate from './mutate';
import createChildren from './createChildren';
import convertJson from '../convertJsonToObj';

// mutation rate. 8 means that on average each gene in 8 will be mutated
const MUTATION_RATE = 8;
const PENALTY_FACTOR = 30;
const INITIAL_GENERATION_SIZE = 10;
const ALLOWED_TO_BREED = 5;
const ALLOWED_SURVIVORS = 5;
let CELLS = [];
let VELOCITY = [];
let bestCandidates = [];
let bestCandidatesChildren = [];

const getCellsOrder = (json) => {
  const entry = convertJson(json);
  const { corrections, cells } = entry;
  CELLS = [...cells];
  VELOCITY = [...corrections];

  let newGeneration = [];
  let running = 1;
  let candidates = createGeneration(INITIAL_GENERATION_SIZE);
  let counter = 0;
  let deltaVelocity = 0;
  while (running !== 0) {
    bestCandidatesChildren = [];

    newGeneration = candidates
      .map((c) => [c, fitness(c)])
      .sort((a, b) => a[1] - b[1]);

    bestCandidates = newGeneration.map((c) => c[0]).slice(0, ALLOWED_SURVIVORS);

    bestCandidates.concat(createChildren(bestCandidates));

    candidates = bestCandidates
      .concat(createGeneration(20))
      .concat(bestCandidatesChildren);
    candidates = candidates.map((x) => mutate(x));
    counter += 1;

    if (counter > 100) {
      deltaVelocity += 1;
      counter = 0;
    }
    if (newGeneration[0][1] <= deltaVelocity) {
      running = 0;
      const { mainThruster, secondThruster } = newGeneration[0][0];
      const delta =
        VELOCITY.reduce((acc, curr) => acc + curr, 0) - deltaVelocity;
      const result = {
        main_thruster: mainThruster,
        sec_thruster: secondThruster,
        delta_velocity: delta,
      };
      console.log('task4', JSON.stringify(result));
      return JSON.stringify(result);
    }
  }
};

export {
  CELLS,
  VELOCITY,
  PENALTY_FACTOR,
  MUTATION_RATE,
  ALLOWED_TO_BREED,
  getCellsOrder,
};
