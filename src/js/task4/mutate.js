import getRandInt from './getRandInt';
import { MUTATION_RATE } from './getCellsOrder';

const swapElements = (arr) => {
  const indexToSwap1 = getRandInt(0, arr.length - 1);
  let indexToSwap2 = getRandInt(0, arr.length - 1);

  if (indexToSwap2 === indexToSwap1) {
    while (indexToSwap2 === indexToSwap1) {
      indexToSwap2 = getRandInt(0, arr.length - 1);
    }
  }
  [arr[indexToSwap1], arr[indexToSwap2]] = [
    arr[indexToSwap2],
    arr[indexToSwap1],
  ];
  return arr;
};
// mutation is swapping 2 random elements inside mainThrusters or secondThrusters
const mutate = (obj) => {
  let mainThruster = [...obj.mainThruster];
  if (Math.round(Math.random() * MUTATION_RATE) === 2) {
    mainThruster = swapElements(mainThruster);
  }

  let secondThruster = [...obj.secondThruster];
  if (Math.round(Math.random() * MUTATION_RATE) === 2) {
    secondThruster = swapElements(secondThruster);
  }
  return { mainThruster, secondThruster };
};

export default mutate;
