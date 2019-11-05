import Position from "./position.js";
import { getNewDirection, getInitialPosition } from './movehelper.js';

let prevDirection;

/**
 * Replace the logic in this function with your own custom movement algorithm.
 *
 * This function should run in a reasonable amount of time and should attempt
 * to collect as much gold as possible.
 *
 * Remember, landing outside the mine's boundary or on a "0" on the mine will
 * result in the run completing.
 *
 * @param  {array} mine - A n x m multidimensional array respresenting the mine.
 * @param  {object} position - The current position of the miner, will be undefined on the first move
 *
 * @return {Position} The new position of the miner.
 */
const move = (mine, position) => {
// This is a greedy miner that does not think far into the future. It does the following:
  // 1. Start at (0,0)
  // 2. Chooses the highest available gold value each time.

  const newX = (position && position.x + 1) || 0;
  const initY = position && position.y !== undefined ? position.y : getInitialPosition(mine);

  // gets new direction if not starting position
  const newDirection = (position && position.y !== undefined) ?
    getNewDirection(mine, position, prevDirection) 
      : undefined;
  
  const newY = newDirection ? initY + newDirection : initY;
 
  prevDirection = newDirection;

  return new Position(newX, newY);
};

export default move;
