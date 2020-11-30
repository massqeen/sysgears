import distributeCells from './distributeCellsInit';
import { VELOCITY } from './getCellsOrder';

const createGeneration = (size) => {
  return new Array(size).fill(0).map(() => distributeCells(VELOCITY.length));
};

export default createGeneration;
