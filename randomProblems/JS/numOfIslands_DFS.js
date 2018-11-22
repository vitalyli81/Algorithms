// DFS solution

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  var colLen = grid.length;
  if (colLen == 0) return 0;

  var result = 0;
  var rowLen = grid[0].length;

  for (let i = 0; i < colLen; i++) {

    // scan rows
    for (let j = 0; j < rowLen; j++) {
      if (grid[i][j] == 1) {
        result++;
        dfsSearch(grid, i, j, rowLen, colLen);
      }
    }

  }

  return result;
};

var dfsSearch = function (A, i, j, jLen, iLen) {

  if (i < 0 || j < 0 || i >= iLen || j >= jLen || A[i][j] == 0) return;

  A[i][j] = 0;
  // check right 
  dfsSearch(A, i, j + 1, jLen, iLen);
  // check left 
  dfsSearch(A, i, j - 1, jLen, iLen);
  // check top
  dfsSearch(A, i + 1, j, jLen, iLen);
  // check bottom
  dfsSearch(A, i - 1, j, jLen, iLen);

};
