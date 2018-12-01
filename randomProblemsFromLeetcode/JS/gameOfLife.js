/**
 * 
 * Given a board with m by n cells, each cell has an initial state live (1) or dead (0). 
 * Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) 
 * using the following four rules (taken from the above Wikipedia article):
 * 
 * Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any live cell with more than three live neighbors dies, as if by over-population..
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * Write a function to compute the next state (after one update) of the board given its current state. 
 * The next state is created by applying the above rules simultaneously to every cell in the current state, 
 * where births and deaths occur simultaneously.
 * 
 * Example:
 * 
 * Input: 
 * [
 *   [0,1,0],
 *   [0,0,1],
 *   [1,1,1],
 *   [0,0,0]
 * ]
 * Output: 
 * [
 *   [0,0,0],
 *   [1,0,1],
 *   [0,1,1],
 *   [0,1,0]
 * ]
 */


/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // states for cells
  // 0 -> 0 = 0
  // 0 -> 1 = 2
  // 1 -> 1 = 1
  // 1 -> 0 = 3

  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      let lives = getLiveNeighbors(board, j, i);
      let elem = board[j][i];

      if (elem === 1) {
        if (lives < 2 || lives > 3) {
          board[j][i] = 3;
        }
      } else {
        if (lives === 3) {
          board[j][i] = 2;
        }
      }
    }
  }

  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      let elem = board[j][i];
      if (elem === 0 || elem === 3) {
        board[j][i] = 0;
      } else {
        board[j][i] = 1;
      }
    }
  }

};

var getLiveNeighbors = function (board, r, c) {
  var count = board[r][c] ? -1 : 0;
  var rStart = r - 1 > -1 ? r - 1 : r;
  var rEnd = r + 1 < board.length ? r + 1 : r;
  var cStart = c - 1 > -1 ? c - 1 : c;
  var cEnd = c + 1 < board[0].length ? c + 1 : c;

  for (let j = rStart; j <= rEnd; j++) {
    for (let i = cStart; i <= cEnd; i++) {
      if (board[j][i] === 1 || board[j][i] === 3) {
        count++;
      }
    }
  }

  return count;
}
