import getRandInt from './getRandInt';
import { CELLS } from './getCellsOrder';

const recordCellToThruster = (thruster, index, cell) => {
  thruster[index] = cell;
  return thruster;
};

const changeIndex = (index, length) => {
  if (index < length - 2) {
    return index + 1;
  }
  return 0;
};

// random distribution cells to the thruster arrays
const distributeCells = (velocityLength) => {
  let mainThruster = new Array(velocityLength).fill(0);
  let secondThruster = new Array(velocityLength).fill(0);
  let counter = 0;
  CELLS.map((cell) => {
    let thruster = getRandInt(1, 2);

    let index = getRandInt(0, velocityLength - 1);
    if (thruster === 1) {
      if (!mainThruster[index]) {
        mainThruster = [...recordCellToThruster(mainThruster, index, cell)];
        counter += 1;
      } else {
        while (mainThruster[index]) {
          counter += 1;
          // eslint-disable-next-line max-depth
          if (counter >= velocityLength * 3) {
            thruster = thruster === 1 ? 2 : 1;
            counter = 0;
            break;
          }
          index = changeIndex(index, velocityLength);
        }
        if (counter === velocityLength - 1) {
          mainThruster = [...recordCellToThruster(mainThruster, index, cell)];
          return;
        }
        secondThruster = [...recordCellToThruster(secondThruster, index, cell)];
        counter += 1;
      }
      return;
    }
    if (!secondThruster[index]) {
      secondThruster = [...recordCellToThruster(secondThruster, index, cell)];
      counter += 1;
    } else {
      while (secondThruster[index]) {
        counter += 1;
        if (counter >= velocityLength * 3) {
          thruster = thruster === 1 ? 2 : 1;
          counter = 0;
          break;
        }
        index = changeIndex(index, velocityLength);
      }
      if (counter === velocityLength - 1) {
        mainThruster = [...recordCellToThruster(mainThruster, index, cell)];
        return;
      }
      secondThruster = [...recordCellToThruster(secondThruster, index, cell)];
      counter += 1;
    }
  });
  mainThruster.forEach((item, i) => (mainThruster[i] = !item ? 0 : item));
  secondThruster.forEach((item, i) => (secondThruster[i] = !item ? 0 : item));
  return { mainThruster, secondThruster };
};

export default distributeCells;
